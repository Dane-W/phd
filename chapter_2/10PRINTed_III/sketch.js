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
    
    //line properties
    stroke(col, 255, 255);
    
    //determine which line to draw
    if (random(1) < 0.50) {
        line(x, y, x + spacing, y + spacing);    
    } else {
        line(x, y + spacing, x + spacing, y);
    }
    
    //move into position to draw the next line and change the colour
    x = x + spacing;
    col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc*-1;
        }
    
    if (x >= width) {
        x = 0;
        y = y + spacing;   
    }
    
    
    //if the canvas is full, reset the position and slightly fade the drawn lines
    if (y >= height) {
        y = 0;
        fill(0, 0, 0, 0.2);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
    }
}