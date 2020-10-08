let x = 0;
let y = 0;
let spacing = 10;
let col = 0;
let inc = 5;
let sweight = 0.5;
let weightinc = 0.02;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    //rectMode(CENTER);
}

function draw() {
    stroke(col, 255, 255);
    fill(col, 255, 255);
    
    if (random(1) < 0.50) {
        strokeWeight(sweight);
        strokeCap(PROJECT);
        strokeJoin(MITER);
        line(x, y, x + spacing, y + spacing);    
    } else {
        strokeWeight(sweight);
        strokeCap(PROJECT);
        strokeJoin(MITER);
        line(x, y + spacing, x + spacing, y);
    }
    
    x = x + spacing;
    sweight = sweight + weightinc;
    
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
        fill(0, 0, 0, 0.35);
        noStroke();
        rect(0, 0, width, height);
    }
    

    if (sweight > 4 || sweight < 0.5) {
        weightinc = weightinc * -1;
    }
    
    
}