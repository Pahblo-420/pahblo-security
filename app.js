document.addEventListener('DOMContentLoaded', () => {
    // Immediately display hero contents
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('appear');
    }

    // Configure the Intersection Observer for scroll-driven animations
    const animationOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // Unobserve once animated to keep performance ultra-clean
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);
    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Show button after scrolling down 500 pixels
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    // --- Navbar Floating & Scrollspy Logic ---
    const navbar = document.querySelector('.navbar');
    // Select all our main sections to track
    const sections = document.querySelectorAll('#home, #about, #services, #contact');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // 1. Toggle the solid navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 2. Track which section is currently in view
        let currentSectionId = '';

        sections.forEach(section => {
            // Get the top position of the section, offset by the navbar height (approx 100px)
            const sectionTop = section.offsetTop - 100; 
            
            // If the user has scrolled past the top of this section
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // 3. Highlight the correct link
        navLinks.forEach(link => {
            link.classList.remove('active');
            // If the href attribute includes the current section's ID (e.g., "#about")
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    // Target elements to animate on scroll
    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => appearanceObserver.observe(el));
});