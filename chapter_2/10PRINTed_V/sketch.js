let x = 0;
let y = 0;
let spacing = 10;
let col = 0;
let inc = 5;
let sweight = 6;
let weightinc = 0.02;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
}

function draw() {
  
  //line properties
    stroke(col, 255, 255);
    fill(col, 255, 255);
     strokeWeight(sweight);
     strokeCap(PROJECT);
     strokeJoin(MITER);
  
  //choose which type of line to draw
    
    if (random(1) < 0.50) {
        line(x, y, x + spacing, y + spacing); 
    } else {
        line(x, y + spacing, x + spacing, y);
    }
    
  //change position to draw the next line, and incrementally change the line's colour and thickness
    x = x + spacing;
    //sweight = sweight + weightinc;
          col = col + inc;
        if (col > 255 || col < 0) {
            inc = inc * -1;
        }
    
    if (x >= width) {
        x = 0;
        y = y + spacing;
    }
    
  //if the canvas is full, reset the position and clear the canvas  
    if (y >= height) {
        y = 0;
      background(0);
    }
    
//change the incrementation of the thickness of the line
    if (sweight > 8 || sweight < 0.5) {
        weightinc = weightinc * -1;
    }
}