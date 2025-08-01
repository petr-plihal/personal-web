// Add event listener to toggle project visibility
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("show-all-projects");
    const container = document.getElementById("projects-container");
    const fade = document.querySelector(".projects-fade");
    btn.addEventListener("click", () => {
        container.classList.toggle("expanded");
        fade.classList.toggle("hidden");
        if (container.classList.contains("expanded")) {
            btn.textContent = "Skrýt projekty";
        } else {
            btn.textContent = "Zobrazit vše";
        }
    });
});