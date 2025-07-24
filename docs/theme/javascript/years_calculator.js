// Calculates the number of years since a given start year
// This is used to dynamically update the number of years since starting studies in IT

function calculateYearsFromStart(startYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

// Returns the number of years since 2018, which is when my studies in IT started
function getStudyYears() {
    return calculateYearsFromStart(2018);
}

// This script runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const studyYears = getStudyYears();
    const studyYearsElements = document.querySelectorAll(".study-years");
    
    studyYearsElements.forEach(element => {
        element.textContent = studyYears;
    });
});