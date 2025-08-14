# NeverGpDzy Personal Homepage

<div align="center">
  <img src="https://picture.nevergpdzy.cn/img_for_Typora/OIG%20(3).png" alt="Logo" width="120" height="120">
  <h3 align="center">个人主页 | Personal Homepage</h3>
  <p align="center">
    勤而自律，心似明镜，永不放弃。
    <br />
    一个简洁优雅的个人主页网站
    <br />
    <a href="https://nevergpdzy.cn"><strong>访问网站 »</strong></a>
  </p>
</div>

## 📋 Project Overview

This is a responsive personal homepage website built with HTML5 + CSS3 + JavaScript, featuring a minimalist modern design style that showcases personal information and provides links to various projects and resources.

## ✨ Features

- 🎨 **Modern Design** - Clean and elegant interface with dark theme and glass morphism effects
- 📱 **Responsive Layout** - Perfect compatibility with desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Fluid transition animations and interactive effects
- 🌐 **Multi-portal Navigation** - Integrated links to personal blog, resume, knowledge base, and other sub-sites
- 🖼️ **Dynamic Background** - Beautiful background images with overlay effects
- 🔒 **Content Protection** - Disabled right-click menu and text selection to protect page content

## 🛠️ Tech Stack

- **Frontend Framework**: Native HTML5 + CSS3 + JavaScript
- **JavaScript Libraries**: 
  - jQuery 3.x - DOM manipulation and event handling
  - Particles.js - Particle animation effects (optional)
- **CSS Preprocessing**: Native CSS3 with Flexbox layout
- **Icon Fonts**: Font Awesome 5
- **Build Tools**: No build process required, ready to use

## 📁 Project Structure

```
.
├── 404.html                 # 404 error page
├── index.html               # Main page
├── verification.html        # Verification page
├── README.md               # Project documentation
├── css/                    # Stylesheets directory
│   ├── main.css           # Main stylesheet
│   ├── css.css            # Font styles
│   ├── fontawesome-all.min.css  # Font Awesome icons
│   └── noscript.css       # Styles for no JavaScript
└── js/                     # JavaScript files directory
    ├── jquery.min.js       # jQuery library
    ├── jquery.min_1.js     # jQuery backup version
    ├── main.js            # Main interaction logic
    ├── util.js            # Utility functions
    ├── browser.min.js     # Browser detection
    ├── breakpoints.min.js # Responsive breakpoints
    ├── particles.min.js   # Particle effects library
    └── particles-init.js  # Particle effects initialization
```

## 🚀 Getting Started

### Font Configuration

To improve website loading speed, the Google Fonts URLs have been replaced with custom CDN links:

```css
/* latin */
/* Origin: https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2 */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://picture.nevergpdzy.cn/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
/* Origin: https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu.woff2 */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(https://picture.nevergpdzy.cn/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

```

**For your own deployment:**
- You can use the original Google Fonts URLs (shown in the `Origin` comments)
- Or host the font files on your own CDN/OSS for better performance
- Make sure to configure proper CORS settings if using a custom domain

The original Google Fonts URLs are preserved in comments for easy reference and switching back if needed.
### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/NeverGpDzy/nevergpdzy-homepage.git
cd your-repo-name
```

2. **Direct Opening**
   - Double-click the `index.html` file to open in browser
   - Or use a local server (recommended)

3. **Using Local Server** (Optional)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
# Install http-server
npm install -g http-server

# Run
http-server
```

### Deployment

This project is a pure static website and can be deployed to any static hosting service:

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloud Server** (Nginx/Apache)
- **Object Storage** (OSS/COS + CDN)

## 🎨 Customization

### Modify Personal Information

Edit the relevant content in `index.html`:

```html
<!-- Change title -->
<title>Your Name</title>

<!-- Change main title and subtitle -->
<h1 style="text-transform: none;">Your Name</h1>
<h3 style="text-transform: none;">Your Motto</h3>
<h3 style="text-transform: none;">your-email@example.com</h3>

<!-- Modify navigation links -->
<nav>
    <ul>
        <li><a href="your-link" target="_blank">Link Name</a></li>
        <!-- More links... -->
    </ul>
</nav>
```

### Change Background Image

Modify the background image URL in `css/main.css`:

```css
#bg:after {
    background-image: url("your-background-image-url");
}
```

### Customize Color Theme

Modify the relevant color variables in `css/main.css`:

```css
body {
    background: #1b1f22;  /* Background color */
    color: #ffffff;       /* Text color */
}
```

## 📄 License

This project is open source under the MIT License. See the [LICENSE](LICENSE) file for details.

Based on the Dimension template from [HTML5 UP](https://html5up.net/).

## 👤 Author

- **NeverGpDzy**
- Email: i@nevergpdzy.cn
- Website: [nevergpdzy.cn](https://nevergpdzy.cn)

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📞 Contact

If you have any questions or suggestions, please contact me through:

- 📧 Email: i@nevergpdzy.cn
- 🌐 Website: [nevergpdzy.cn](https://nevergpdzy.cn)
- 📝 Blog: [blog.nevergpdzy.cn](https://blog.nevergpdzy.cn)

## 🙏 Acknowledgments

- [HTML5 UP](https://html5up.net/) - For providing excellent web templates
- [Font Awesome](https://fontawesome.com/) - Icon library
- [jQuery](https://jquery.com/) - JavaScript library

---

<p align="center">Made with ❤️ by NeverGpDzy</p>
<p align="center">© 2023-2025 NeverGpDzy</p>