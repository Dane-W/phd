let col = 0;
let inc = 1;
let a = 0;
let b = 0;
let showInstruction = true;



function setup() {
    
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);

 
}

function draw() {
    
    
  if (showInstruction) {     
    noStroke();
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text('hold down the mouse button to draw  alongside the computer. \n \n Both of you will contribute to the drawing as long as you are entangled.', width*0.5, height*0.5);
                       }


//if the mouse button is pressed, clear the instructions and begin drawing while it is pressed.
     if (mouseIsPressed) {
       if (showInstruction) {
         background(0);
          }
        showInstruction = false;
     

           stroke(col, 255, 255);
        strokeWeight(3);
         
        fissure();
     } else {
              background(0, 0, 0, 0.03); 
     }

}





function fissure() {

    let x = mouseX;
    let y = mouseY;

  
     let rdm = random(0, 1);  //pick a random number between 0 and 1
    if (rdm > 0.5) {
        a++;              //if that number is less than 0.5, move the x co-ordinate
        } else { 
            b++;                  //otherwise, move the y co-ordinate
        }
    
    let offsetX = x + a;
    let offsetY = y + b;
    
  point(offsetX, offsetY);           //draw the point at the new position
    
col = col + inc;         //change the colour (hue) of the point
    
    if (col > 255 || col < 0) {
       inc = inc*-1;
    }
    
    
    //if the line goes off the screen, return it to the position of the mouse
    if (offsetX > width || offsetY > height) { 
    a = 0;
    b = 0;
    col = 0;

  }
}




function mouseReleased() { //when the mouse is released, reset the offset
    a = 0;
    b = 0;


}