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
    // Target both standard slide-ups and the new 3D card animations
    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => appearanceObserver.observe(el));
});
// --- Mobile Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle menu open/close when tapping the icon
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
            // Change icon from bars to an 'X' when open
            if (navLinksContainer.classList.contains('nav-active')) {
                hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }

    // Close the menu automatically when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinksContainer.classList.remove('nav-active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
// --- About Section Stagger Animation ---
    const aboutSection = document.getElementById('about');
    
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Once the About section comes into view...
            if (entry.isIntersecting) {
                // Find all elements with the 'stagger-down' class
                const staggerElements = entry.target.querySelectorAll('.stagger-down');
                
                // Fire them one after the other with a 200ms delay
                staggerElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('appear');
                    }, index * 500); 
                });
                
                // Unobserve after playing so it stays put
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 }); // CHANGED TO 0.1: Triggers as soon as 10% of the section is visible

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
// --- Services Section Animation Sequence ---
    const servicesSection = document.getElementById('services');
    const tacticalRing = document.querySelector('.tactical-ring');
    const serviceCards = document.querySelectorAll('.card-animate');
    
    // We need to track the timers so we can cancel them if the user scrolls away quickly
    let explosionTimer;
    let cardTimers = [];

    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Play the ring animation
                tacticalRing.classList.add('animate-ring');

                // 2. Wait, then show cards
                explosionTimer = setTimeout(() => {
                    serviceCards.forEach((card, index) => {
                        let timer = setTimeout(() => {
                            card.classList.add('appear');
                        }, index * 120);
                        cardTimers.push(timer);
                    });
                }, 1800); 
            } else {
                // --- THE RESET ---
                // If the section leaves the viewport, reset everything so it plays again

                // 1. Stop any half-finished timers
                clearTimeout(explosionTimer);
                cardTimers.forEach(timer => clearTimeout(timer));
                cardTimers = [];

                // 2. Strip the animation classes away
                tacticalRing.classList.remove('animate-ring');
                serviceCards.forEach(card => card.classList.remove('appear'));
            }
        });
    }, { threshold: 0.2 }); // 0.2 means it triggers when 20% visible

    if (servicesSection) {
        servicesObserver.observe(servicesSection);
    }