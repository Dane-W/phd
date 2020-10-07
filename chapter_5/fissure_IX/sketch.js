let x = 0;
let y = 0;
let col = 0;
let inc = 1;
let prevX = 0;
let prevY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
}

function draw() {
    stroke(col, 255, 255);
    strokeWeight(3);    

    //choose a random number between 0 and 1. If it is less than 0.5, move the x-coordinate, otherwise move the y-coordinate
    if (random(1) < 0.5) {
        x = x + 4;
        y = y - 2;    
    }   else {
        x = x - 2;
        y = y + 4;
    } 

    
    //draw the line using the new co-ordinates
    line(prevX, prevY, x, y); 
    
    //change the colour (hue) of the line
    col = col + inc;
    prevX = x;
    prevY = y;
//    x = x+ 5;
//    y = y + 5;
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    //if the line reaches the edge of the canvas, start from the top-left corner again.
    if (x > width || y > height) { 
        col = 0;
        x = 0;
        y = 0;
        prevX = 0;
        prevY = 0;
    }
}