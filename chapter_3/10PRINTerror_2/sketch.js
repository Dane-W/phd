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
    
    //shape properties
    stroke(col, 255, 255);
    
    //choose which type of ellipse to draw

    if (random(1) < 0.50) {
        ellipse(x, y, x + spacing, y + spacing);    
    } else {
        ellipse(x, y + spacing, x + spacing, y);
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
        y = 0;
        fill(0, 0, 0, 0.2);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
    }
    
    
}