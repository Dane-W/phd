let col = 0;
let inc = 1;
let x1, y1, x2, y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
    x1 = windowWidth/2;
    y1 = windowHeight/2;
    x2 = windowWidth/2;
    y2 = windowHeight/2;
}

function draw() {
  stroke(col, 255, 255);
  strokeWeight(3);    
  fissure1();
  fissure2(x2, y2);

    
}

function fissure1() {
 let rdm = random(0, 1);    //pick a random number between 0 and 1

    if (rdm > 0.5) {
        x1--;             //if that number is less than 5, move the x co-ordinate
} else { 
   y1--;                  //otherwise, move the y co-ordinate
    }
    
  point(x1, y1);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x1 < 0 || y1 < 0) {
        col = 0;
        x1 = windowWidth/2;
        y1 = windowHeight/2;
    }   
}

function fissure2() {
    let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        x2++;             //if that number is less than 5, move the x co-ordinate
} else { 
   y2++;                  //otherwise, move the y co-ordinate
    }
    
  point(x2, y2);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x2 > width || y2 > height) {
        col = 0;
        x2 = windowWidth/2;
        y2 = windowHeight/2;
    }
}