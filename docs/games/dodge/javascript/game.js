// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it

class Game {

    // Sets target canvas and 2d context, creates objects
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d"); // 2D rendering for canvas

        this.player = new Player(this.canvas);
        this.inputHandler = new InputHandler();
        
        this.gameLoop = this.gameLoop.bind(this); // TODO: Why?
        this.gameLoop();
    }
    
    // Infinite game loop, calls "itself" (not recursion)
    gameLoop() {
        // Clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Process inputs, Update
        this.player.update(this.inputHandler.keys);
        
        // Render
        this.player.render(this.context);
        
        // Loop infinitely
        requestAnimationFrame(this.gameLoop);
    }
}

// Run the game after all is loaded
window.addEventListener('load', () => {
    new Game();
});