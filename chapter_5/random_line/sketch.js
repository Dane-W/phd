let x = 0;
let y = 0;
let canvas;

function setup() {
  canvas = createCanvas(600, 600);
    canvas.parent('sketch');
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(5);
let rdm = random(0, 10);   //pick a random number between 0 and 10
    if (rdm > 5) {
        x++;               //if that number is less than 5, move the x co-ordinate
} else { 
   y++;                    //otherwise, move the y co-ordinate
    }
    
  point(x, y);             //draw the point at the new position
    
//if (x > width || y > height) {
//background(0);
//    x = 0;
//    y = 0;
//}
}