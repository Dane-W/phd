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
    ellipseMode(CENTER);
}

function draw() {
    stroke(col, 255, 255);
    if (random(1) < 0.50) {
        line(x, y, x + spacing, y + spacing);    
    } else {
        line(x, y + spacing, x + spacing, y);
    }
    
    x = x + spacing;
    
    if (x >= width) {
        x = 0;
        y = y + spacing;
        col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc * -1;
        }
    }
    
    if (y >= height) {
        y = 0;
        fill(0, 0, 0, 0.3);
        noStroke();
        
        rect(0, 0, windowWidth, windowHeight);
    }
    
    
}