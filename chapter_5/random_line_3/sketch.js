let x = 0;
let y = 0;
let canvas;

function setup() {
  canvas = createCanvas(600, 600);
    canvas.parent('sketch');
  background(0);
  colorMode(HSB);
}

function draw() {
  stroke(random(0, 255), 255, 255);
  strokeWeight(8);    

let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        x++;             //if that number is less than 0.5, move the x co-ordinate
} else { 
   y++;                  //otherwise, move the y co-ordinate
    }
    
  point(x, y);           //draw the point at the new position
    
    
}