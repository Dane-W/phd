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
    prevX = windowWidth/2;
}

function draw() {
  stroke(col, 255, 255);
  strokeWeight(3);    

let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        x++;             //if that number is less than 5, move the x co-ordinate
} else { 
   y++;                  //otherwise, move the y co-ordinate
    }
    
  line(prevX, prevY, x, y);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x > width*2 ) { 
        col = 0;
        x = 0;
        y = 0;
        prevX = windowWidth/2;
        prevY = 0;
        background(0);
    }                   //if the line goes off the edge of the canvas, start in the top-left corner again.
    
}