let x1, x2, x3, x4, y1, y2, y3, y4;
let col = 0;
let inc = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  x1 = windowWidth/2;
  x2 = windowWidth/2;
  x3 = windowWidth/2;
  x4 = windowWidth/2;
  y1 = windowHeight/2;
  y2 = windowHeight/2;
  y3 = windowHeight/2;
  y4 = windowHeight/2;
}

function draw() {
  stroke(col, 255, 255);
  strokeWeight(3);    
  fissure1();
  fissure2();
  fissure3();
  fissure4();

    
}

function fissure1() {
 let rdm = random(0, 1);  //pick a random number between 0 and 1
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
        x1 = 400;
        y1 = 400;
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
        x2 = 400;
        y2 = 400;
    }
}
    
function fissure3() {
    let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        x3++;             //if that number is less than 5, move the x co-ordinate
} else { 
   y3--;                  //otherwise, move the y co-ordinate
    }
    
  point(x3, y3);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x3 > width || y3 > height) {
        col = 0;
        x3 = 400;
        y3 = 400;
    }
}
    
function fissure4() {
    let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        x4--;             //if that number is less than 5, move the x co-ordinate
} else { 
   y4++;                  //otherwise, move the y co-ordinate
    }
    
  point(x4, y4);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0 ) {
       inc = inc*-1;
    }
    
    if (x4 > width || y4 > height) {
        col = 0;
        x4 = 400;
        y4 = 400;
    }
}