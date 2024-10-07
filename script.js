document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add a simple scroll animation for the hero text
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollPos = window.scrollY;
    heroContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
});
