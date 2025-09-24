# NAMU Website

Modern, responsive website for the NAMU-VOCA language learning app built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Multilingual Support**: Korean/English localization
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Contact Form**: Functional contact form with email integration
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized images, CSS, and JavaScript

## 📁 File Structure

```
web/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── .htaccess          # Apache configuration
├── images/            # Image assets directory
│   └── .gitkeep       # Image requirements documentation
└── README.md          # This file
```

## 🚀 Quick Start

1. **Clone or download** the website files
2. **Add images** to the `images/` directory (see requirements below)
3. **Update links** in HTML (App Store, Google Play)
4. **Configure email** service in JavaScript
5. **Deploy** to your web hosting service

## 📱 Required Images

Add these images to the `images/` directory:

### App Screenshots

- `logo.png` - Main logo (32x32px minimum)
- `app-screenshot-main.png` - Hero section app screenshot
- `app-preview.png` - Download section app preview
- `step1.png` through `step4.png` - How-to-use illustrations

### Download Badges

- `app-store-badge.png` - iOS App Store badge
- `google-play-badge.png` - Google Play Store badge

### SEO Images

- `og-image.jpg` - Social media preview (1200x630px)
- `twitter-image.jpg` - Twitter card image (1200x600px)
- `favicon.ico` - Website favicon
- `apple-touch-icon.png` - Apple touch icon (180x180px)

## 🔧 Configuration

### 1. Update App Store Links

Replace `#` with actual app store URLs in `index.html`:

```html
<!-- Find these lines and update -->
<a href="#" class="download-badge">
	<!-- Add iOS App Store URL -->
	<a href="#" class="download-badge"> <!-- Add Google Play URL --></a></a
>
```

### 2. Configure Contact Form

The contact form is set up to send emails to `support@namu-voca.com`. To make it functional:

1. **EmailJS Integration** (Recommended):

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Replace the `sendEmail()` function in `script.js`

2. **Backend API**:

   - Create a backend endpoint to handle form submissions
   - Update the form submission URL in `script.js`

3. **Third-party Services**:
   - Use services like Formspree, Netlify Forms, or similar
   - Update the form action and method

### 3. Analytics Setup

Add Google Analytics or your preferred analytics service:

```html
<!-- Add to <head> section in index.html -->
<script
	async
	src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag("js", new Date());
	gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🌐 SEO Features

- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets
- XML sitemap for search engine indexing
- Robots.txt for crawler instructions
- Semantic HTML structure
- Fast loading times

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🎨 Customization

### Colors

Main colors are defined as CSS custom properties in `:root`:

```css
--primary-color: #6366f1;
--secondary-color: #06b6d4;
--accent-color: #f59e0b;
```

### Typography

Korean: Noto Sans KR
English: Inter

### Animations

- Smooth scroll behavior
- Fade-in animations on scroll (AOS library)
- Hover effects and transitions
- Mobile-friendly touch interactions

## 🔧 Deployment

### Static Hosting (Recommended)

- **Netlify**: Drag and drop deployment with forms support
- **Vercel**: Easy GitHub integration
- **GitHub Pages**: Free hosting for public repositories

### Traditional Hosting

1. Upload all files to your web server
2. Ensure `.htaccess` is uploaded for Apache servers
3. Update DNS to point to your hosting

### CDN Integration

For better performance, consider using a CDN for:

- AOS animation library
- Google Fonts
- Large image assets

## 🛠️ Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- Clickjacking protection
- HTTPS enforcement (when configured)
- Input validation and sanitization

## 📞 Support

For questions about the website setup:

- Email: support@namu-voca.com
- Website: [namu-voca.com](https://namu-voca.com)

## 📄 License

© 2025 Team NAMU. All rights reserved.
