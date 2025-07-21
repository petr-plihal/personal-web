// Get real navbar height and set property to use it for page padding
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navbarHeight = navbar.offsetHeight;
    
    // Set CSS custom property with the actual navbar height
    document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
});