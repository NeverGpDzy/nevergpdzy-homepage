/*
	Dimension by HTML5 UP (vanilla JS rewrite)
	Removed jQuery, browser.min.js, breakpoints.min.js, util.js dependencies.
	Added: time greeting, typewriter effect, email copy, Konami easter egg.
*/

(function() {
	'use strict';

	var body   = document.body;
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	var main   = document.getElementById('main');
	var articles = main ? Array.from(main.querySelectorAll('article')) : [];

	// Remove is-preload to trigger CSS entrance animations
	window.addEventListener('load', function() {
		setTimeout(function() { body.classList.remove('is-preload'); }, 100);
	});

	// Nav: add centering helpers when item count is even
	var nav = header ? header.querySelector('nav') : null;
	if (nav) {
		var navItems = nav.querySelectorAll('li');
		if (navItems.length % 2 === 0) {
			nav.classList.add('use-middle');
			navItems[Math.floor(navItems.length / 2)].classList.add('is-middle');
		}
	}

	// ── Article state machine ──────────────────────────────────────────────

	var delay = 325, locked = false;

	function showArticle(id, initial) {
		var article = articles.find(function(a) { return a.id === id; });
		if (!article) return;

		if (locked || initial === true) {
			body.classList.add('is-switching');
			body.classList.add('is-article-visible');
			articles.forEach(function(a) { a.classList.remove('active'); });
			if (header) header.style.display = 'none';
			if (footer) footer.style.display = 'none';
			if (main) main.style.display = '';
			article.style.display = '';
			article.classList.add('active');
			locked = false;
			setTimeout(function() { body.classList.remove('is-switching'); }, initial ? 1000 : 0);
			return;
		}

		locked = true;

		if (body.classList.contains('is-article-visible')) {
			var current = articles.find(function(a) { return a.classList.contains('active'); });
			if (current) current.classList.remove('active');
			setTimeout(function() {
				if (current) current.style.display = 'none';
				article.style.display = '';
				setTimeout(function() {
					article.classList.add('active');
					window.scrollTo(0, 0);
					setTimeout(function() { locked = false; }, delay);
				}, 25);
			}, delay);
		} else {
			body.classList.add('is-article-visible');
			setTimeout(function() {
				if (header) header.style.display = 'none';
				if (footer) footer.style.display = 'none';
				if (main) main.style.display = '';
				article.style.display = '';
				setTimeout(function() {
					article.classList.add('active');
					window.scrollTo(0, 0);
					setTimeout(function() { locked = false; }, delay);
				}, 25);
			}, delay);
		}
	}

	function hideArticle(addState) {
		if (!body.classList.contains('is-article-visible')) return;
		var article = articles.find(function(a) { return a.classList.contains('active'); });
		if (addState) history.pushState(null, null, '#');

		if (locked) {
			body.classList.add('is-switching');
			if (article) { article.classList.remove('active'); article.style.display = 'none'; }
			if (main)   main.style.display   = 'none';
			if (footer) footer.style.display = '';
			if (header) header.style.display = '';
			body.classList.remove('is-article-visible');
			locked = false;
			body.classList.remove('is-switching');
			window.scrollTo(0, 0);
			return;
		}

		locked = true;
		if (article) article.classList.remove('active');
		setTimeout(function() {
			if (article) article.style.display = 'none';
			if (main)   main.style.display   = 'none';
			if (footer) footer.style.display = '';
			if (header) header.style.display = '';
			setTimeout(function() {
				body.classList.remove('is-article-visible');
				window.scrollTo(0, 0);
				setTimeout(function() { locked = false; }, delay);
			}, 25);
		}, delay);
	}

	// Close button + prevent click-through for each article
	articles.forEach(function(article) {
		var btn = document.createElement('div');
		btn.className = 'close';
		btn.textContent = 'Close';
		btn.addEventListener('click', function() { location.hash = ''; });
		article.appendChild(btn);
		article.addEventListener('click', function(e) { e.stopPropagation(); });
	});

	// Click outside article → close
	body.addEventListener('click', function() {
		if (body.classList.contains('is-article-visible')) hideArticle(true);
	});

	// ESC key → close
	window.addEventListener('keyup', function(e) {
		if (e.key === 'Escape' && body.classList.contains('is-article-visible')) hideArticle(true);
	});

	// Hash-based routing
	window.addEventListener('hashchange', function(e) {
		if (!location.hash || location.hash === '#') {
			e.preventDefault();
			hideArticle();
		} else {
			var target = articles.find(function(a) { return '#' + a.id === location.hash; });
			if (target) { e.preventDefault(); showArticle(location.hash.substr(1)); }
		}
	});

	// Prevent scroll-to-top on hashchange
	if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

	// Initialize
	if (main) main.style.display = 'none';
	articles.forEach(function(a) { a.style.display = 'none'; });
	if (location.hash && location.hash !== '#') {
		window.addEventListener('load', function() { showArticle(location.hash.substr(1), true); });
	}

	// ── Feature 1: Time-based greeting ────────────────────────────────────

	var greetingEl = document.getElementById('greeting');
	if (greetingEl) {
		var hour = new Date().getHours();
		var greetings = [
			[0,  4,  '夜深静谧，万籁俱寂，注意休息 🌃'],
			[5,  6,  '黎明破晓，新的一天从此刻开始 🌅'],
			[7,  8,  '清晨初醒，愿今日事事顺遂 ☀️'],
			[9,  11, '上午好，精神饱满，诸事皆宜 🌤️'],
			[12, 13, '午间时分，劳逸结合，记得用餐 🍜'],
			[14, 17, '午后时光，专注当下，继续前行 ☕'],
			[18, 19, '暮色渐起，今日辛苦，稍事休整 🌆'],
			[20, 22, '入夜后，感谢今天的每一份努力 🌙'],
			[23, 23, '夜阑珊，早些安歇，养精蓄锐 ✨']
		];
		var msg = '';
		for (var i = 0; i < greetings.length; i++) {
			if (hour >= greetings[i][0] && hour <= greetings[i][1]) {
				msg = greetings[i][2];
				break;
			}
		}
		setTimeout(function() {
			greetingEl.textContent = msg;
			greetingEl.style.opacity = '0.65';
		}, 600);
	}

	// ── Feature 2: Typewriter effect ──────────────────────────────────────

	var sloganEl = document.getElementById('slogan');
	if (sloganEl) {
		var sloganText = sloganEl.getAttribute('aria-label') || '';
		var sloganIdx  = 0;
		window.addEventListener('load', function() {
			setTimeout(function() {
				var timer = setInterval(function() {
					sloganEl.textContent = sloganText.slice(0, ++sloganIdx);
					if (sloganIdx >= sloganText.length) {
						clearInterval(timer);
						sloganEl.classList.add('done');
					}
				}, 120);
			}, 600);
		});
	}

	// ── Feature 3: Email one-click copy ───────────────────────────────────

	var emailEl = document.getElementById('email-copy');
	if (emailEl) {
		emailEl.addEventListener('click', function() {
			var email    = emailEl.getAttribute('data-email');
			var original = emailEl.textContent;

			function onSuccess() {
				emailEl.textContent       = '已复制！';
				emailEl.style.color       = '#a8f0c6';
				emailEl.style.letterSpacing = '0.3rem';
				setTimeout(function() {
					emailEl.textContent       = original;
					emailEl.style.color       = '';
					emailEl.style.letterSpacing = '';
				}, 2000);
			}

			function onFail() {
				emailEl.textContent = '复制失败，请手动复制';
				setTimeout(function() { emailEl.textContent = original; }, 2000);
			}

			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(email).then(onSuccess, onFail);
			} else {
				// Fallback for iOS Safari
				var ta = document.createElement('textarea');
				ta.value = email;
				ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
				document.body.appendChild(ta);
				ta.focus();
				ta.select();
				try {
					document.execCommand('copy') ? onSuccess() : onFail();
				} catch (err) {
					onFail();
				}
				document.body.removeChild(ta);
			}
		});
	}

	// ── Feature 4: Konami Code easter egg ─────────────────────────────────

	var konamiSeq = [38,38,40,40,37,39,37,39,66,65];
	var konamiIdx = 0;

	window.addEventListener('keydown', function(e) {
		if (e.keyCode === konamiSeq[konamiIdx]) {
			konamiIdx++;
			if (konamiIdx === konamiSeq.length) {
				konamiIdx = 0;
				triggerKonami();
			}
		} else {
			konamiIdx = 0;
		}
	});

	function triggerKonami() {
		var colors = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#c77dff','#ff9f1c','#a8f0c6'];

		// 30 particle burst
		for (var i = 0; i < 30; i++) {
			(function() {
				var dot  = document.createElement('div');
				var size = 6 + Math.random() * 10;
				dot.style.cssText = [
					'position:fixed',
					'pointer-events:none',
					'z-index:9999',
					'width:'  + size + 'px',
					'height:' + size + 'px',
					'border-radius:50%',
					'background:' + colors[Math.floor(Math.random() * colors.length)],
					'left:' + (Math.random() * 100) + 'vw',
					'top:'  + (Math.random() * 100) + 'vh',
					'animation:konami-fly 1s ease-out forwards'
				].join(';');
				document.body.appendChild(dot);
				setTimeout(function() { dot.parentNode && dot.parentNode.removeChild(dot); }, 1000);
			})();
		}

		// Rainbow header title
		var h1 = header ? header.querySelector('h1') : null;
		if (h1) {
			h1.classList.add('konami-rainbow');
			setTimeout(function() { h1.classList.remove('konami-rainbow'); }, 3000);
		}

		// Toast notification
		var toast = document.createElement('div');
		toast.className    = 'konami-toast';
		toast.textContent  = '秘籍解锁！永不放弃！🏆';
		document.body.appendChild(toast);
		setTimeout(function() {
			toast.style.opacity = '0';
			setTimeout(function() { toast.parentNode && toast.parentNode.removeChild(toast); }, 500);
		}, 3000);
	}

})();
