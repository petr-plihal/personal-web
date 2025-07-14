// Script to dynamically generate project cards from an associative array

// The projects data with project details
const projectsData = [
    {
        name: "Informační systém pro uměleckou školu",
        description: "Týmový projekt (3 členové). Návrh a implementace informačního systému pro správu výpůjček zařízení ateliéry umělecké školy. Zaměření na UX, možnost správy uživatelů (role -- oprávnění, přihlašování, registrace).",
        technologies: ["Flask", "SQL", "MySQL", "HTML", "CSS"],
        githubUrl: "https://github.com/petr-plihal/IIS_projekt",
        demoUrl: "https://github.com/petr-plihal/IIS_projekt"
    },
    {
        name: "Webová aplikace pro správu RPG skupin",
        description: "Týmový projekt (4 členové). Průzkum trhu, validace návrhu a výsledné aplikace se skutečnými potenciálními zákazníky. Návrh a implementace databáze. Backend v Django. Frontend ve Vue. Koordinace průběhu vývoje v Trellu. Dokumentace průběhu projektu v Latexu.",
        technologies: ["Django", "Vue.js", "Trello", "SQL", "MySQL", "LaTeX", "Python"],
        githubUrl: "https://github.com/petr-plihal/ttrpg-group-manager",
    },
    {
        name: "Databáze pro praktického lékaře",
        description: "Týmový projekt (2 členové). Navrhli jsme relační DB (ERD), poté ji implementovali včetně testovacích dat, triggerů, procedur, pohledů a indexů v SQL pro Oracle databázi. Pro dokumentaci jsme použili Latex. Řešení jsem sám rozšířil o Dockerfile.",
        technologies: ["SQL", "Oracle DB", "LaTeX", "Docker"],
        githubUrl: "https://github.com/petr-plihal/doctor-office-db",
    },
    {
        name: "WiFi metronom s webovým rozhraním",
        description: "Mikroprocesorová aplikace, hostující malý web server s rozhraním pro \"metronom\", který se připojí na danou WiFi síť. Implementace MCU využívala přerušení, časovače, pulzní šířkovou modulaci, validaci vstupů. Webové rozhranní validovalo rozsahy vstupů a bránilo např. double submission při užívání. Součástí řešení je uživatelská příručka pro zprovoznění a používání.",
        technologies: ["C/C++", "HTML", "Arduino", "PlatformIO", "ESP32", "LaTeX"],
        githubUrl: "https://github.com/petr-plihal/wifi-metronome",
    },
    {
        name: "Klientská aplikace pro chat server",
        description: "Aplikace pro zasílání a získávání zpráv z chatového serveru. Využívá sockety a ruční konstrukci TCP packetů pro nešifrovanou komunikaci s chatovým serverem. Implementace využívá OOP s některými návrhovými vzory.",
        technologies: ["C/C++", "Wireshark"],
        githubUrl: "https://github.com/petr-plihal/chat-client-ipk25",
    },
/* TODO: Add details once the project is public */
/*     {
        name: "Kompletní SW produkt - kalkulačka",
        description: "Týmový projekt (4 členové). Kromě implementace logiky a GUI jsme řešili i [zde doplň co jste řešili, např. testování, verze, dokumentace].", // Popis z CV byl TODO, tak ho doplň
        technologies: ["Python", "Tkinter", "Pygame"], // Technologie z Excelu
        githubUrl: "https://github.com/petr-plihal/IVS_projekt_2",
        demoUrl: ""
    }, */
];

// Function to load projects and create HTML elements dynamically
function loadProjects() {
    const projectsContainer = document.getElementById("projects-container");

    projectsData.forEach(project => {
        // Container for project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Title of the project
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.name; // Nastavíme text z dat
        projectCard.appendChild(projectTitle);

        // Description of the project
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        projectCard.appendChild(projectDescription);

        // List of technologies used in the project
        const techList = document.createElement("ul");
        project.technologies.forEach(tech => {
            const techItem = document.createElement("li");
            techItem.textContent = tech;
            techList.appendChild(techItem);
        });
        projectCard.appendChild(techList);

        // GitHub link
        const githubLink = document.createElement("a");
        githubLink.classList.add("project-link");
        githubLink.target = "_blank";
        githubLink.href = project.githubUrl;
        githubLink.textContent = "GitHub Repo";
        projectCard.appendChild(githubLink);

        // Demo link (if available)
        if (project.demoUrl) {
            const demoLink = document.createElement("a");
            demoLink.classList.add("project-link");
            demoLink.target = "_blank";
            demoLink.href = project.demoUrl;
            demoLink.textContent = "Demo";
            projectCard.appendChild(demoLink);
        }

        // Append the project card to the projects container
        projectsContainer.appendChild(projectCard);
    });
}

// Call loadProjects after the DOM is fully loaded - to ensure the container exists before trying to append children
document.addEventListener("DOMContentLoaded", () => {
    loadProjects();

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