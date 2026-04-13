Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
$regexOptions = [System.Text.RegularExpressions.RegexOptions]::IgnoreCase `
  -bor [System.Text.RegularExpressions.RegexOptions]::Singleline

function Assert-True {
  param(
    [bool]$Condition,
    [string]$Message
  )

  if (-not $Condition) {
    throw $Message
  }
}

$requiredFiles = @("index.html", "404.html", "CNAME")
foreach ($file in $requiredFiles) {
  $fullPath = Join-Path $repoRoot $file
  Assert-True (Test-Path -LiteralPath $fullPath -PathType Leaf) "Missing required file: $file"
}

$cnameValue = (Get-Content -Raw -LiteralPath (Join-Path $repoRoot "CNAME")).Trim()
Assert-True (-not [string]::IsNullOrWhiteSpace($cnameValue)) "CNAME must contain a hostname."

$indexPath = Join-Path $repoRoot "index.html"
$indexHtml = Get-Content -Raw -LiteralPath $indexPath

$requiredPatterns = @(
  @{
    Pattern = "<title>.+?</title>"
    Message = "index.html must define a <title>."
  },
  @{
    Pattern = "<meta\s+name=""viewport""[^>]*>"
    Message = "index.html must define a viewport meta tag."
  },
  @{
    Pattern = "<meta\s+name=""description""[^>]*>"
    Message = "index.html must define a description meta tag."
  }
)

foreach ($rule in $requiredPatterns) {
  $matches = [System.Text.RegularExpressions.Regex]::IsMatch(
    $indexHtml,
    $rule.Pattern,
    $regexOptions
  )
  Assert-True $matches $rule.Message
}

$missingRefs = [System.Collections.Generic.HashSet[string]]::new()
$htmlFiles = Get-ChildItem -LiteralPath $repoRoot -Filter *.html -File

foreach ($htmlFile in $htmlFiles) {
  $html = Get-Content -Raw -LiteralPath $htmlFile.FullName
  $matches = [System.Text.RegularExpressions.Regex]::Matches(
    $html,
    "(?<attr>href|src)\s*=\s*""(?<path>[^""]+)""",
    $regexOptions
  )

  foreach ($match in $matches) {
    $rawPath = $match.Groups["path"].Value.Trim()
    if ([string]::IsNullOrWhiteSpace($rawPath)) {
      continue
    }

    if ($rawPath -match "^(?:[a-z][a-z0-9+.-]*:|//|#)") {
      continue
    }

    $normalizedPath = $rawPath.Split("#")[0].Split("?")[0]
    if ([string]::IsNullOrWhiteSpace($normalizedPath)) {
      continue
    }

    if ($normalizedPath.StartsWith("/")) {
      $candidatePath = Join-Path $repoRoot ($normalizedPath.TrimStart("/").Replace("/", "\"))
    } else {
      $candidatePath = Join-Path $htmlFile.DirectoryName ($normalizedPath.Replace("/", "\"))
    }

    if (-not (Test-Path -LiteralPath $candidatePath -PathType Leaf)) {
      [void]$missingRefs.Add("$($htmlFile.Name) -> $rawPath")
    }
  }
}

if ($missingRefs.Count -gt 0) {
  $message = ($missingRefs | Sort-Object) -join [Environment]::NewLine
  throw "Missing local asset references:`n$message"
}

Write-Host "Site checks passed."
