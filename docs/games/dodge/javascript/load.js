function addScriptTag(scriptName) {

    // Construct path to the script
    scriptPrefix = "javascript/";
    scriptPostfix = ".js";
    fullScriptName = scriptPrefix + scriptName + scriptPostfix;

    // Create the script element with script path as src attribute
    const newScript = document.createElement("script");
    newScript.setAttribute("src", fullScriptName);
    document.body.appendChild(newScript);
    
    // Check if script loading failed
    newScript.onerror = () => {
        console.error("Couldn't find script: " + fullScriptName);
        loadFailed = true;
    };
}

function loadGameScripts() {

    console.log("Loading scripts");

    addScriptTag("player");
    addScriptTag("input");
    addScriptTag("game");

}

loadGameScripts();