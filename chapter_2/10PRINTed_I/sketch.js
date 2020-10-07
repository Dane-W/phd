let x = 0;
let y = 0;
let spacing = 20;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0);
}

function draw() {
    
    // line properties
    stroke(255);
    strokeWeight(2);
    
    // choose a random number to determine what line is to be drawn
    if (random(1) < 0.50) {
        line(x, y, x + spacing, y + spacing);  //back slash "/" 
    } else {
        line(x, y + spacing, x + spacing, y);  //forward slash "\"
    }
    
    // move into position to draw the next line
    x = x + spacing;
    
    if (x > width) {
        x = 0;
        y = y + spacing;
    }
    
    // if the screen is filled, reset and erase the canvas
    if (y > height) {
        y = 0;
        background(0); 
    }
}