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
    //rectMode(CENTER);
}

function draw() {
    
    //choose which type of rectangle to draw
    stroke(col, 255, 255);
    if (random(1) < 0.50) {
        arc(x, y, x + spacing, y + spacing, 0, HALF_PI);    
    } else {
        arc(x, y + spacing, x + spacing, y, 0, HALF_PI);
    }
    
    //change position of next rectangle drawn, and the colour
    x = x + spacing;
    
    if (x >= width) {
        x = 0;
        y = y + spacing;
        col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc*-1;
        }
    }
    
    //if screen is filled, fade the image and begin again
    if (y >= height) {
        y = 0;
        fill(0, 0, 0, 0.2);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        noFill();
    }
}