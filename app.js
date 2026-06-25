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

    // Target elements to animate on scroll
    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => appearanceObserver.observe(el));
});