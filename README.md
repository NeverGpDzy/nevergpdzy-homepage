# NeverGpDzy 个人主页

一个基于 HTML5 UP Dimension 模板的现代化个人主页网站，采用响应式设计和优雅的动画效果。

## 🌟 特性

- **响应式设计** - 完美适配桌面端、平板和移动设备
- **动态背景** - 精美的云彩背景图片配合动画效果
- **优雅动画** - 平滑的页面过渡和悬停效果
- **内容保护** - 禁用右键菜单、复制粘贴等功能
- **外部链接集成** - 快速访问相关网站和服务
- **ICP备案** - 符合中国大陆网站备案要求

## 📸 预览

网站采用深色主题设计，以云彩背景为特色，中央展示个人信息和快捷链接。

## 🛠️ 技术栈

- **HTML5** - 语义化标签和现代Web标准
- **CSS3** - Flexbox布局、动画和响应式设计
- **JavaScript** - jQuery库和自定义交互功能
- **Font Awesome** - 矢量图标库
- **HTML5 UP Framework** - 基于Dimension模板

## 📁 项目结构

```
MainPage/
├── index.html              # 主页面
├── 404.html               # 404错误页面  
├── verification.html      # 验证页面
├── css/                   # 样式文件目录
│   ├── main.css          # 主样式文件（基于HTML5 UP Dimension）
│   ├── css.css           # 通用样式
│   ├── noscript.css      # 无JavaScript时的备用样式
│   └── fontawesome-all.min.css  # Font Awesome图标样式
├── js/                    # JavaScript文件目录
│   ├── main.js           # 主要功能脚本
│   ├── jquery.min.js     # jQuery库（两个版本）
│   ├── jquery.min_1.js   
│   ├── breakpoints.min.js # 响应式断点处理
│   ├── browser.min.js    # 浏览器兼容性
│   ├── particles-init.js # 粒子效果初始化
│   ├── particles.min.js  # 粒子效果库
│   └── util.js           # 工具函数
├── .nojekyll             # GitHub Pages配置
└── .user.ini             # 服务器配置
```

## 🚀 快速开始

### 本地运行

1. **克隆仓库**
```bash
git clone https://github.com/[你的用户名]/MainPage.git
cd MainPage
```

2. **启动本地服务器**
```bash
# 使用Python 3
python -m http.server 8000

# 使用Python 2  
python -m SimpleHTTPServer 8000

# 使用Node.js http-server
npx http-server

# 或直接在浏览器中打开 index.html
```

3. **访问网站**
打开浏览器访问 `http://localhost:8000`

### 部署到GitHub Pages

1. **推送代码到GitHub**
```bash
git add .
git commit -m "部署个人主页"
git push origin main
```

2. **配置GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch" 
   - Branch 选择 `main`，目录选择 `/ (root)`
   - 等待部署完成，访问 `https://[用户名].github.io/MainPage/`

## 🎨 个性化配置

### 修改个人信息

编辑 `index.html` 文件中的以下部分：

```html
<!-- 个人头像 -->
<img src="你的头像链接" class="logo" alt="你的名字" title="你的名字">

<!-- 个人信息 -->
<h1 style="text-transform: none;">你的名字</h1>
<h3 style="text-transform: none;">你的座右铭</h3>
<h3 style="text-transform: none;">你的邮箱</h3>

<!-- 导航链接 -->
<li><a href="你的链接1" target="_blank">链接标题1</a></li>
<li><a href="你的链接2" target="_blank">链接标题2</a></li>
```

### 更换背景图片

在 `css/main.css` 文件中修改背景图片URL：

```css
#bg:after {
    background-image: url("你的背景图片链接");
}
```

### 修改网站图标

替换以下文件中的图标链接：
- `index.html` 中的 favicon 链接
- `favicon.ico` 文件

### 自定义样式

主要样式配置位于 `css/main.css`，你可以修改：
- 颜色主题
- 字体样式  
- 动画效果
- 布局参数

## 🔧 功能说明

### 内容保护功能

网站集成了以下保护措施：
- 禁用右键菜单
- 禁用文本选择
- 禁用复制/粘贴/剪切操作
- 只在输入框中允许这些操作

### 响应式设计

网站在以下设备上完美显示：
- 桌面端（>1680px）
- 笔记本（1680px-980px）  
- 平板（980px-736px）
- 手机（<736px）

### 外部链接

当前配置的快捷链接包括：
- 超算文档
- 个人简历
- 知识库
- 博客

## 📝 开发说明

### 依赖库版本

- jQuery: 已包含压缩版本
- Font Awesome: 5.x 版本
- HTML5 UP Dimension: 自定义修改版

### 浏览器兼容性

- Chrome 60+
- Firefox 55+ 
- Safari 12+
- Edge 79+

## 📄 许可证

本项目基于以下许可证：
- 原始HTML5 UP模板：[CCA 3.0](https://html5up.net/license)
- 自定义修改部分：MIT License

## 🙏 致谢

- **[HTML5 UP](https://html5up.net/)** - 提供优秀的Dimension模板
- **[Font Awesome](https://fontawesome.com/)** - 图标库支持  
- **[jQuery](https://jquery.com/)** - JavaScript库

## 📞 联系方式

- **邮箱**: i@nevergpdzy.cn
- **博客**: https://blog.nevergpdzy.cn
- **网站**: https://nevergpdzy.cn

## 📊 网站信息

- **备案号**: 蜀ICP备2023035415号-1
- **版权**: © 2023-2025 NeverGpDzy

---

⭐ 如果这个项目对你有帮助，请给它一个星标！