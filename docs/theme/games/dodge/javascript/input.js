
// Listens for inputs and raises flags that are checked on every frame
class InputHandler {
    constructor() {
        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.addEventListener("keydown", (event) => {
            this.handleKeyDown(event);
        });
        
        document.addEventListener("keyup", (event) => {
            this.handleKeyUp(event);
        });
    }
    
    handleKeyDown(event) {
        switch (event.key) {
            // Movement keys
            case "a":
            case "ArrowLeft":
                this.keys.left = true;
                break;
            case "d":
            case "ArrowRight":
                this.keys.right = true;
                break;
            case "w":
            case "ArrowUp":
                this.keys.up = true;
                break;
            case "s":
            case "ArrowDown":
                this.keys.down = true;
                break;
        }
    }
    
    handleKeyUp(event) {
        switch (event.key) {
            case "a":
            case "ArrowLeft":
                this.keys.left = false;
                break;
            case "d":
            case "ArrowRight":
                this.keys.right = false;
                break;
            case "w":
            case "ArrowUp":
                this.keys.up = false;
                break;
            case "s":
            case "ArrowDown":
                this.keys.down = false;
                break;
        }
    }
}