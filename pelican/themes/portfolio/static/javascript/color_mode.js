(function() {
    'use strict';

    // Get stored theme or default to light
    function getStoredTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    // Store theme preference
    function setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    // Update theme icon
    function updateThemeIcon(theme) {
        const themeIcon = document.querySelector('#themeIcon');
        if (themeIcon) {
            // Add rotation animation
            themeIcon.classList.add('rotating');
            
            setTimeout(() => {
                if (theme === 'dark') {
                    themeIcon.className = 'bi bi-sun-fill theme-icon';
                } else {
                    themeIcon.className = 'bi bi-moon-fill theme-icon';
                }
                
                // Remove rotation class after animation
                setTimeout(() => {
                    themeIcon.classList.remove('rotating');
                }, 150);
            }, 150);
        }
    }

    // Apply theme to document
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        updateThemeIcon(theme);
    }

    // Toggle between themes
    function toggleTheme() {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setStoredTheme(newTheme);
        applyTheme(newTheme);
    }

    // Initialize theme on page load
    function initTheme() {
        const storedTheme = getStoredTheme();
        applyTheme(storedTheme);

        // Set up button event listener
        const toggleButton = document.querySelector('#themeToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();