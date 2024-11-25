document.addEventListener('DOMContentLoaded', function() {
    // Add load-in class on load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); // Delay to ensure smooth transition

    document.querySelectorAll('.transition-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            document.body.classList.add('fade-out'); // Add the fade-out class to body

            const href = this.getAttribute('href');
            setTimeout(() => {
                window.location.href = href; // Redirect to the link after the animation
            }, 500); // Match this duration with the CSS transition duration
        });
    });
});
