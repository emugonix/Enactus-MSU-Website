var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    const ctaSection = document.querySelector('.cta h2');

    function checkVisibility(){
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            ctaSection.classList.add("visible");
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Run once to check if already in view
})