class Player {

    // Sets Player attributes relative to canvas
    // Without this, for example, the player might go "slower" on bigger screens, or be larger on smaller screens.
    constructor(canvas) {
        this.canvas = canvas;

        // Size of the player relative to the canvas
        // If ratio of the play area changes, this must be changed manually.
        // TODO: add automatic adjustment
        this.width = canvas.width * 0.05;
        this.height = canvas.height * 0.08;

        // Starting location - right in the middle
        this.x = canvas.width * 0.5 - ( 0.5 * this.width);
        this.y = canvas.height * 0.5 - ( 0.5 * this.height);

        this.speed = canvas.width * 0.01;
    }

    // Updates movement
    update(keys) {

        if (keys.left) this.x -= this.speed;
        if (keys.right) this.x += this.speed;
        if (keys.up) this.y -= this.speed;
        if (keys.down) this.y += this.speed;
        
        // Prevents player from going out of bounds
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y))
    }
    
    // Draws the player according to current attributes
    // This needs to be done after the update, otherwise the position would not seem to change.
    render(context) {

        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "#FF0000";
        context.fill();
        context.closePath();

    }
}