/* ============================================
   Smile First Dental Clinic - JavaScript
   ============================================ */

const PHONE_NUMBER = '917666421234';

// ============================================
// Navigation
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ============================================
// FAQ Accordion
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
// WhatsApp Booking Form
// ============================================
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !phone) {
        alert('Please enter your name and phone number.');
        return;
    }
    
    let whatsappMessage = `Hi Smile First Dental Clinic,%0A%0AI'd like to book an appointment.%0A%0A`;
    whatsappMessage += `*Name:* ${name}%0A`;
    whatsappMessage += `*Phone:* ${phone}%0A`;
    
    if (email) whatsappMessage += `*Email:* ${email}%0A`;
    if (service) whatsappMessage += `*Service:* ${service}%0A`;
    if (message) whatsappMessage += `*Message:* ${message}%0A`;
    
    whatsappMessage += `%0APlease confirm my booking.`;
    
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
});

// ============================================
// Scroll Animation (Reveal on Scroll)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Add reveal class to elements
document.querySelectorAll('.service-card, .why-card, .testimonial-card, .trust-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Apply animation when visible
const animatedElements = document.querySelectorAll('.service-card, .why-card, .testimonial-card, .trust-item, .gallery-item');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(el => io.observe(el));

// ============================================
// Image Lazy Loading
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.src;
    });
}

// ============================================
// Console Welcome Message
// ============================================
console.log('%c🦷 Smile First Dental Clinic', 'font-size: 24px; font-weight: bold; color: #0E7C86;');
console.log('%cProfessional dental website loaded', 'color: #64748b;');

console.log('✅ JavaScript loaded successfully');
