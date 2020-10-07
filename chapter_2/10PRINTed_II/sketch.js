let x = 0;
let y = 0;
let spacing = 10;
let col = 0;
let inc = 5;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
}

function draw() {
    
    // line properties
    stroke(col, 255, 255);
    
    // choose a random number to determine which type of line is drawn
    if (random(1) < 0.50) {
        line(x, y, x + spacing, y + spacing);    
    } else {
        line(x, y + spacing, x + spacing, y);
    }
    
    // move into position to draw the next line
    x = x + spacing;
    if (x > width) {
        x = 0;
        y = y + spacing;
        
        // change the colour with each new line
        col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc*-1;
        }
    }
    
    // if the screen is full, reset position and erase the canvas
    if (y > height) {
        y = 0;
        background(0);
    }
}