// ========================================
// MODERN PORTFOLIO WEBSITE - JAVASCRIPT
// Ajay Jadhav Portfolio
// ========================================

// Strict mode
'use strict';

// ========== LOADING ANIMATION ==========
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            // Force remove after animation
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 800);
    }
});

// Fallback - Remove loader after 3 seconds no matter what
setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.style.display = 'none';
    }
}, 3000);

// ========== NAVIGATION ==========
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

const updateActiveLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(\.nav-link[href*=\]\).classList.add('active');
        } else {
            document.querySelector(\.nav-link[href*=\]\).classList.remove('active');
        }
    });
};

window.addEventListener('scroll', updateActiveLink);

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ========== TYPING ANIMATION ==========
const typingText = document.getElementById('typingText');
const textArray = ['Full Stack Developer', 'Data Science Enthusiast', 'Problem Solver', 'Tech Enthusiast'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(type, 1500);
});

// ========== SKILLS ANIMATION ==========
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress', progress + '%');
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========== FORM VALIDATION & SUBMISSION ==========
const contactForm = document.getElementById('contactForm');
const formInputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
};
const formErrors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    subject: document.getElementById('subjectError'),
    message: document.getElementById('messageError')
};
const formStatus = document.getElementById('formStatus');
const submitBtn = contactForm.querySelector('.btn-submit');

// Validation functions
const validators = {
    name: (value) => {
        if (value.trim().length < 2) {
            return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Name should only contain letters';
        }
        return '';
    },
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    },
    subject: (value) => {
        if (value.trim().length < 3) {
            return 'Subject must be at least 3 characters long';
        }
        return '';
    },
    message: (value) => {
        if (value.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        return '';
    }
};

// Real-time validation
Object.keys(formInputs).forEach(key => {
    formInputs[key].addEventListener('blur', () => {
        validateField(key);
    });
    
    formInputs[key].addEventListener('input', () => {
        if (formErrors[key].textContent) {
            validateField(key);
        }
    });
});

function validateField(fieldName) {
    const value = formInputs[fieldName].value;
    const error = validators[fieldName](value);
    
    if (error) {
        formErrors[fieldName].textContent = error;
        formInputs[fieldName].style.borderColor = '#ef4444';
        return false;
    } else {
        formErrors[fieldName].textContent = '';
        formInputs[fieldName].style.borderColor = '#6366f1';
        return true;
    }
}

function validateForm() {
    let isValid = true;
    
    Object.keys(formInputs).forEach(key => {
        if (!validateField(key)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm()) {
        showFormStatus('Please fix the errors before submitting', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    try {
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success
        showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset field borders
        Object.keys(formInputs).forEach(key => {
            formInputs[key].style.borderColor = '';
        });
        
    } catch (error) {
        showFormStatus('Oops! Something went wrong. Please try again.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    setTimeout(() => {
        formStatus.className = 'form-status';
    }, 5000);
}

// ========== BACK TO TOP BUTTON ==========
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== AOS ANIMATION INITIALIZATION ==========
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
        easing: 'ease-out-cubic',
        mirror: false
    });
}

// ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== CURSOR EFFECT (OPTIONAL) ==========
const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// ========== PROJECT CARDS TILT EFFECT ==========
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ========== COUNTER ANIMATION FOR STATS ==========
const statNumbers = document.querySelectorAll('.stat-item h4');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight - 100) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const suffix = stat.textContent.replace(/[0-9]/g, '');
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + suffix;
                }
            };
            
            updateCounter();
        });
    }
};

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// ========== PRELOAD IMAGES ==========
const preloadImages = () => {
    const images = [
        // Add image URLs here if you have any
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

window.addEventListener('load', preloadImages);

// ========== CONSOLE MESSAGE ==========
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #ec4899;');

// ========== PERFORMANCE OPTIMIZATION ==========
// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    updateActiveLink();
    animateSkills();
    animateCounters();
}, 100);

window.addEventListener('scroll', throttledScroll);

// ========== ACCESSIBILITY IMPROVEMENTS ==========
// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #6366f1;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ========== EASTER EGG ==========
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('%c🎉 You found the secret! 🎉', 'font-size: 24px; font-weight: bold; color: #ec4899;');
    }
});

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully! 🚀');
});
