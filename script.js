// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('navLinks');
    
    // Only run menu code if nav element exists
    if (navLinks) {
        // Toggle menu functions
        window.showMenu = function() {
            navLinks.style.right = '0';
        };
        
        window.hideMenu = function() {
            navLinks.style.right = '-200px';
        };
        
        // Close menu when clicking on a nav link (mobile)
        const navLinksList = document.querySelectorAll('.nav-links ul li a');
        navLinksList.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 700) {
                    hideMenu();
                }
            });
        });
    }
    
    // CTA Animation (only if element exists)
    const ctaSection = document.querySelector('.cta h2');
    if (ctaSection) {
        function checkVisibility() {
            const rect = ctaSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                ctaSection.classList.add('visible');
            }
        }
        
        window.addEventListener('scroll', checkVisibility);
        checkVisibility();  // Run once to check if already in view
    }
})