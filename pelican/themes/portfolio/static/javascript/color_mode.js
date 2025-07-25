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

    // Apply theme to document
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        
        // Update switch state
        const toggleSwitch = document.querySelector('#themeSwitch');
        if (toggleSwitch) {
            toggleSwitch.checked = theme === 'dark';
        }
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

        // Set up switch event listener
        const toggleSwitch = document.querySelector('#themeSwitch');
        if (toggleSwitch) {
            toggleSwitch.addEventListener('change', toggleTheme);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();