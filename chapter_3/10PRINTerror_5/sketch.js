let x = 0;
let y = 0;
let spacing = 10;
let col = 0;
let inc = 5;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    noFill();
    ellipseMode(CENTER);
}

function draw() {
    //choose which type of ellipse to draw
    stroke(col, 255, 255);
    if (random(1) < 0.50) {
        ellipse(x, y, spacing, spacing);    
    } else {
        rect(x, y, spacing, spacing);
    }
    
    //move into position to draw the next circle
    x = x + spacing;
    
    if (x >= width) {
        x = 0;
        y = y + spacing;
        col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc*-1;
        }
    }
    //if the screen is filled, reset the position and fade the canvas
    if (y >= height) {
        background(0);
        x = 0;
        y = 0;
    }
    
    
}