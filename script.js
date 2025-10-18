// 1. Set the copyright year automatically on page load
document.getElementById('current-year').textContent = new Date().getFullYear();

// 2. Add a scroll effect to the navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Make the background darker after scrolling down 50 pixels
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)'; // A more solid, blurred look
        navbar.style.backdropFilter = 'blur(10px)'; // Adds a nice glass effect
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent at the top
        navbar.style.backdropFilter = 'none';
    }
});

// 3. Enable smooth scrolling for all links starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the default jump

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Animate the scroll
        });
    });
});