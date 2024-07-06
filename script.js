document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function() {
        alert('Thanks for your interest! We\'ll be in touch soon.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});