document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. INITIAL PAGE LOAD (HERO)
    // ==========================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('appear');
    }

    // ==========================================
    // 2. BACK TO TOP BUTTON
    // ==========================================
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
    }

    // ==========================================
    // 3. NAVBAR FLOATING & SCROLLSPY
    // ==========================================
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('#home, #about, #services, #contact');
    const navLinks = document.querySelectorAll('.nav-links a'); // For scrollspy highlighting

    if (navbar) {
        window.addEventListener('scroll', () => {
            // Toggle the solid navbar background
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Track which section is currently in view
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; 
                if (window.scrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            // Highlight the correct link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==========================================
    // 4. MOBILE HAMBURGER MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a'); // For clicking links

    if (hamburger && navLinksContainer) {
        // Toggle menu open/close when tapping the icon
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
            if (navLinksContainer.classList.contains('nav-active')) {
                hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // X icon
            } else {
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';  // Hamburger icon
            }
        });

        // Close the menu automatically when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinksContainer.classList.remove('nav-active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // ==========================================
    // 5. STANDARD SCROLL ANIMATIONS
    // ==========================================
    const animationOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => appearanceObserver.observe(el));

    // ==========================================
    // 6. ABOUT SECTION (LINE-BY-LINE ANIMATION)
    // ==========================================
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const staggerElements = entry.target.querySelectorAll('.stagger-down');
                    staggerElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('appear');
                        }, index * 200); // 200ms delay looks smooth
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); 

        aboutObserver.observe(aboutSection);
    }

    // ==========================================
    // 7. SERVICES SECTION (RING & EXPLOSION)
    // ==========================================
    const servicesSection = document.getElementById('services');
    const tacticalRing = document.querySelector('.tactical-ring');
    const serviceCards = document.querySelectorAll('.card-animate');
    
    let explosionTimer;
    let cardTimers = [];

    if (servicesSection && tacticalRing) {
        const servicesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Play the ring animation
                    tacticalRing.classList.add('animate-ring');

                    // Wait, then show cards
                    explosionTimer = setTimeout(() => {
                        serviceCards.forEach((card, index) => {
                            let timer = setTimeout(() => {
                                card.classList.add('appear');
                            }, index * 120);
                            cardTimers.push(timer);
                        });
                    }, 1800); 
                } else {
                    // Reset if the user scrolls away
                    clearTimeout(explosionTimer);
                    cardTimers.forEach(timer => clearTimeout(timer));
                    cardTimers = [];

                    tacticalRing.classList.remove('animate-ring');
                    serviceCards.forEach(card => card.classList.remove('appear'));
                }
            });
        }, { threshold: 0.2 });

        servicesObserver.observe(servicesSection);
    }

}); // <-- Everything is cleanly enclosed before this final bracket