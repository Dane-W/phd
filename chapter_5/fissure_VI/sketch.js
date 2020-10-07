let x = 0;
let y = 0;
let col = 0;
let inc = 1;
let prevX = 0;
let prevY = 0;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
    canvas.parent("sketch");
}

function draw() {
    //line properties
    stroke(col, 255, 255);
    strokeWeight(3);    
    
    //pick a random number between 0 and 1, if it is less than 0.5, move the x-co-ordinate, otherwise move the y-co-ordinate
    if (random(1) > 0.5) {
        x++;             
    } else { 
        y++;                 
    }
    
    //draw a line using the new co-ordinates
    line(x, y, prevX, prevY);
    
    //change the colour (hue) of the line
    col = col + inc;
    
    //if colour exceeds limits, reverse direction of incrementation
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    //if a line goes off the edge of the canvas, reset the colour and co-ordinates
    if (x > width || y > height) { 
        col = 0;
        x = 0;
        y = 0;
    }
}