let x = 0;
let y = 0;
let col = 0;
let inc = 1;
let canvas;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent('sketch');
  background(0);
  colorMode(HSB);
}

function draw() {
  stroke(col, 255, 255);
  strokeWeight(6);    

let rdm = random(0, 9);  //pick a random number between 0 and 9
    if (rdm > 5) {
        x++;             //if that number is less than 5, move the x co-ordinate
} else { 
   y++;                  //otherwise, move the y co-ordinate
    }
    
  point(x, y);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x > width || y > height) {
        noLoop();
    }
    
}