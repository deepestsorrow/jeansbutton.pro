# SDAP | ALTERLIER ZIPPER / FERMOIR

**Luxury Zipper Manufacturer Website**  
Version: 2.0.0 | Last Updated: 2025-02-07

---

## 📁 Project Structure

```
sdap-landing/
├── index.html              # Main production file (monolithic)
├── index-modular.html      # Modular version (recommended)
├── css/
│   ├── style.css          # Full documented stylesheet
│   └── style.min.css      # Minified production version
├── js/
│   └── main.js            # Modular JavaScript with comments
├── privacy-policy.html    # GDPR-compliant privacy policy
├── cookie-policy.html     # Cookie consent policy
├── robots.txt             # Search engine crawler rules
├── sitemap.xml            # SEO sitemap
└── README.md              # This file
```

---

## 🚀 Quick Start

### Development
Use `index-modular.html` with separate CSS/JS files:
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js" defer></script>
```

### Production
Use minified CSS for better performance:
```html
<link rel="stylesheet" href="css/style.min.css">
```

---

## 🎨 CSS Architecture

### File: `css/style.css`

| Section | Lines | Description |
|---------|-------|-------------|
| 1. CSS Variables | 1-40 | Color scheme, fonts, spacing |
| 2. Reset & Base | 41-60 | Global reset and body styles |
| 3. Navigation | 61-120 | Fixed nav with scroll effect |
| 4. Hero | 121-200 | Full viewport hero section |
| 5. Split Layout | 201-280 | 50/50 two-column system |
| 6. Products Grid | 281-350 | 4-column product cards |
| 7. Knowledge | 351-420 | FAQ/knowledge cards |
| 8. Metal Comparison | 421-520 | Teeth types comparison |
| 9. Contact Form | 521-580 | Form styles and inputs |
| 10. Footer | 581-620 | Footer component |
| 11. Utilities | 621-650 | Helper classes |
| 12. Responsive | 651+ | Media queries |

### Modifying Styles

**To change brand colors:**
```css
:root {
  --color-bg: #0c0c0c;        /* Main background */
  --color-accent: #c9a86c;    /* Brand gold/brass */
  --color-text: #faf9f7;      /* Text color */
}
```

**To adjust spacing:**
```css
:root {
  --space-lg: 2rem;    /* Default: 32px */
  --space-xl: 3rem;    /* Default: 48px */
}
```

---

## ⚙️ JavaScript Architecture

### File: `js/main.js`

| Module | Purpose | Key Functions |
|--------|---------|---------------|
| **Navigation** | Scroll effects, mobile menu | `bindScrollEffect()`, `bindMobileToggle()` |
| **SmoothScroll** | Anchor link handling | `handleClick()` |
| **Form** | Validation & submission | `validateForm()`, `submitForm()` |
| **LazyLoad** | Image/content lazy loading | Intersection Observer |
| **Analytics** | Tracking (placeholder) | `trackPageView()`, `trackCTAClicks()` |
| **Reveal** | Scroll animations | Intersection Observer |

### Configuration

Edit the `CONFIG` object at the top of `main.js`:

```javascript
const CONFIG = {
  SCROLL_THRESHOLD: 100,        // Nav changes at 100px scroll
  FORM_ENDPOINT: '/api/contact', // Your API endpoint
  ENABLE_ANALYTICS: false,      // Set true to enable tracking
  DEBUG_MODE: false             // Set true for console logs
};
```

### Adding New Features

**Example: Add a new module**
```javascript
const NewModule = {
  init() {
    // Initialize your feature
  },
  
  yourFunction() {
    // Your logic
  }
};

// Add to init() function:
NewModule.init();
```

---

## 🔒 Security Configuration

### Form Submission
1. Open `js/main.js`
2. Find `CONFIG.FORM_ENDPOINT`
3. Replace with your actual API endpoint:
```javascript
FORM_ENDPOINT: 'https://your-api.com/contact'
```

### Environment Variables
For sensitive data, use environment variables:
```javascript
// Instead of hardcoding:
const API_KEY = 'your-api-key';

// Use environment variable:
const API_KEY = process.env.API_KEY;
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | > 1024px | Full layout |
| Tablet | ≤ 1024px | 2-column grid, stacked split |
| Mobile | ≤ 640px | Single column, reduced padding |

### Testing Responsive
```bash
# Chrome DevTools device emulation
# Test at: 1920px, 1440px, 1024px, 768px, 375px
```

---

## 🔍 SEO Checklist

- [x] Meta descriptions optimized
- [x] Open Graph tags configured
- [x] Twitter Cards configured
- [x] Structured data (Schema.org)
- [x] Canonical URLs
- [x] Hreflang for international
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Alt text on images
- [x] Semantic HTML structure

---

## 🛠️ Build Commands

### Minify CSS
```bash
# Using cssnano
npx cssnano css/style.css css/style.min.css

# Or online: https://cssminifier.com/
```

### Minify JS
```bash
# Using terser
npx terser js/main.js -o js/main.min.js -c -m

# Or online: https://javascript-minifier.com/
```

---

## 📝 Content Management

### Updating Product Information
Edit in `index-modular.html`:
```html
<!-- Product Card Example -->
<a href="#" class="product-card">
  <span class="product-label">M1</span>
  <h3 class="product-name">Metal Series</h3>
  <p class="product-desc">Your new description here</p>
  <div class="product-spec">Your specs</div>
</a>
```

### Updating FAQ
Edit in `index-modular.html` Section 8:
```html
<p style="margin-bottom: 2rem;">
  <strong>Your Question?</strong><br>
  <span style="color: var(--color-text-muted);">Your answer here.</span>
</p>
```

---

## 🌐 Deployment

### Requirements
- Static file hosting (no server required)
- HTTPS recommended
- Contact form requires backend API

### Recommended Hosts
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Deploy Steps
1. Upload all files to server
2. Ensure `index.html` is at root
3. Configure form endpoint
4. Test all links and forms
5. Submit sitemap to Google Search Console

---

## 📊 Performance Metrics

**Target Scores:**
- Lighthouse: 90+ (Performance)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimization Tips:**
- Use `style.min.css` in production
- Enable gzip/brotli compression
- Add CDN for static assets
- Optimize images (WebP format)

---

## 🐛 Debugging

### Enable Debug Mode
In `js/main.js`:
```javascript
const CONFIG = {
  DEBUG_MODE: true  // Shows console logs
};
```

### Check Module Status
Open browser console:
```javascript
// Access modules globally (debug mode only)
SDAP.NavigationModule
SDAP.FormModule
SDAP.CONFIG
```

---

## 🤝 Contributing

### Code Style
- Use semantic HTML5 elements
- CSS: BEM naming convention
- JS: CamelCase, JSDoc comments
- Indent: 4 spaces

### File Organization
- One component per section
- Group related styles together
- Comment complex logic

---

## 📞 Support

**Technical Issues:**
1. Check browser console for errors
2. Verify file paths in HTML
3. Test with DEBUG_MODE enabled

**Customization Help:**
- See CSS comments for style modifications
- See JS comments for feature additions
- Check this README for architecture overview

---

## 📄 License

© 2007-2026 S&D Asia Pacific Ltd (SDAP). All rights reserved.

---

## 🔄 Changelog

### v2.0.0 (2025-02-07)
- Modular architecture (CSS/JS separation)
- Comprehensive documentation
- Security enhancements
- SEO optimization
- Performance improvements

### v1.0.0 (Initial)
- Single-file HTML/CSS/JS
- Basic responsive design
- Contact form

---

**Need Help?** Refer to inline comments in `css/style.css` and `js/main.js` for detailed explanations of each component.