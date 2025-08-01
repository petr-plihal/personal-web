document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('show-all-projects');
    const projectCollapses = document.querySelectorAll('.project-collapse');
    
    if (showButton && projectCollapses.length > 0) {
        const showText = showButton.querySelector('.show-text');
        const hideText = showButton.querySelector('.hide-text');
        
        // Listen for collapse events on any of the collapsible elements
        projectCollapses.forEach(element => {
            element.addEventListener('show.bs.collapse', function() {
                showText.classList.add('d-none');
                hideText.classList.remove('d-none');
            });
            
            element.addEventListener('hide.bs.collapse', function() {
                showText.classList.remove('d-none');
                hideText.classList.add('d-none');
            });
        });
    }
});