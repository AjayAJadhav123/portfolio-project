# 🚀 Ajay Jadhav - Portfolio Website

A modern, responsive, and feature-rich personal portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer and Data Science Enthusiast.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism Effects** - Beautiful translucent UI elements
- **Gradient Backgrounds** - Eye-catching color gradients
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Dark/Light Mode** - Toggle between themes with persistent storage
- **Responsive Layout** - Mobile-first design that works on all devices

### 🛠️ Interactive Elements
- **Typing Animation** - Dynamic text rotation in hero section
- **Progress Bars** - Animated skill level indicators
- **Hover Effects** - Smooth transitions on all interactive elements
- **Scroll Animations** - Elements fade in as you scroll
- **Back to Top Button** - Quick navigation to top of page
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 Responsive Design
- Mobile (< 480px)
- Tablet (480px - 768px)
- Desktop (768px - 992px)
- Large Desktop (> 992px)

### 🔧 Technical Features
- **Form Validation** - Real-time validation for contact form
- **Loading Animation** - Professional loading screen
- **Sticky Navigation** - Fixed header with active link highlighting
- **Hamburger Menu** - Mobile-friendly navigation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Throttled scroll events and lazy loading

## 🏗️ Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/
    ├── resume.pdf      # Your resume (add your own)
    └── images/         # Project images (optional)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for editing

### Installation

1. **Clone or Download** this repository:
```bash
git clone https://github.com/AjayAJadhav123/portfolio.git
```

2. **Navigate to the project folder**:
```bash
cd portfolio
```

3. **Open `index.html`** in your browser:
   - Double-click the file, or
   - Right-click → Open with → Your browser, or
   - Use Live Server in VS Code

That's it! No build process or dependencies required.

## 📝 Customization Guide

### 1. Personal Information
Edit `index.html` to update:
- Name and title in hero section
- About me description
- Email and contact details
- Social media links
- Location

### 2. Projects
Update the projects section with your own projects:
```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
        </div>
    </div>
</div>
```

### 3. Skills
Modify skill percentages in `index.html`:
```html
<div class="skill-progress" data-progress="85"></div>
```

### 4. Colors & Theme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* Add your own colors */
}
```

### 5. Typing Animation
Change the typing text in `script.js`:
```javascript
const textArray = ['Your Title 1', 'Your Title 2', 'Your Title 3'];
```

## 📸 Adding Your Photo

Replace the placeholder with your actual photo:

1. Add your photo to the project folder
2. Update the CSS or HTML:
```css
.image-placeholder {
    background: url('your-photo.jpg') center/cover;
}
```

Or in HTML:
```html
<img src="your-photo.jpg" alt="Ajay Jadhav">
```

## 📄 Adding Your Resume

1. Save your resume as `resume.pdf`
2. Create an `assets` folder
3. Place the PDF inside: `assets/resume.pdf`
4. The download button will automatically work

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch
4. Your site will be live at `https://yourusername.github.io/portfolio/`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be live instantly

### Vercel
1. Import your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with one click

## 🎯 Sections

1. **Home/Hero** - Introduction with typing animation
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio of work with links
5. **Contact** - Contact form and social links
6. **Footer** - Quick links and social media

## 🔗 Connect With Me

- **Email**: [aj386092@gmail.com](mailto:aj386092@gmail.com)
- **GitHub**: [@AjayAJadhav123](https://github.com/AjayAJadhav123)
- **LinkedIn**: [Ajay Jadhav](https://www.linkedin.com/in/ajay-jadhav-287297333)
- **Instagram**: [@ajay_jadhav](https://instagram.com/ajay_jadhav)

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Vanilla JS for interactions
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins font family

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## � Known Issues

- None currently! Feel free to report issues on GitHub.

## 🤝 Contributing

While this is a personal portfolio, feel free to:
1. Fork the project
2. Create your own version
3. Suggest improvements via issues

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## � Acknowledgments

- Design inspiration from various modern portfolio websites
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Animations by [AOS Library](https://michalsnik.github.io/aos/)

## � Future Enhancements

- [ ] Add blog section
- [ ] Integrate email service (EmailJS)
- [ ] Add more project details with modal popups
- [ ] Implement testimonials section
- [ ] Add certifications section
- [ ] Create multilingual support
- [ ] Add analytics integration

## � Tips

1. **Regular Updates**: Keep your portfolio updated with latest projects
2. **Performance**: Optimize images before uploading
3. **SEO**: Update meta tags for better search visibility
4. **Analytics**: Add Google Analytics to track visitors
5. **Testing**: Test on multiple devices and browsers

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Open an issue on GitHub
- Email me at aj386092@gmail.com

---

<div align="center">
  
### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Ajay Jadhav](https://github.com/AjayAJadhav123)

**© 2024 Ajay Jadhav. All Rights Reserved.**

</div>
