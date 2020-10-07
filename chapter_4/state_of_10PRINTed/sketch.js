let x = 0;
let y = 0;
let col = 0;
let inc = 5;

//GUI variables
let controls = {
    spacingChange: 10,
    strokeWeight: 1,
    shape: 1, 
};

function setup() {
    
    //Canvas & properties
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    ellipseMode(CENTER);
    noFill();
    
    //GUI
    let gui = new dat.GUI();
    gui.closed = true;
    gui.add(controls, 'spacingChange').name("Size").min(1).max(40).step(1).listen;
    gui.add(controls, 'strokeWeight').name("Thickness").min(1).max(7).step(1).listen;
    gui.add(controls, 'shape').name("Shape").min(1).max(5).step(1).listen;
    gui.add(this, 'resetSketch').name("Reset");
    //gui.add(this, 'back').name("Back to series");
    gui.add(this, 'sourceCode').name("Source code");
    
    
}

//GUI links

function back() { 
    window.location.href = "http://www.daneworrallo.com/digitalartwork/10printed";
}

function sourceCode() { 
    window.location.href = "https://github.com/Dane-W/State-of-10PRINTed";
}

//drawing dialoginal lines
function drawLine() {
    if (random(1) < 0.50) {
        line(x, y, x + controls.spacingChange, y + controls.spacingChange);    
        } else {
        line(x, y + controls.spacingChange, x + controls.spacingChange, y);
        }
}

//drawing horizontal or vertical lines
function drawLine2() {
    if (random(1) < 0.50) {
        line(x, y + controls.spacingChange, x + controls.spacingChange, y + controls.spacingChange);    
        } else {
        line(x + controls.spacingChange, y, x + controls.spacingChange, y + controls.spacingChange);
        }
}

//drawing triangles
function drawTriangle() {
    if (random(1) < 0.50) {
        triangle(x, y, x + controls.spacingChange, y + controls.spacingChange, x + controls.spacingChange, y);    
        } else {
        triangle(x + controls.spacingChange, y + controls.spacingChange, x, y + controls.spacingChange, x, y);
    }
}


//drawing '+' and '-'
function drawPlusMinus() {
    textSize(16);
    textAlign(CENTER, CENTER);
    if (random(1) < 0.50) {
        text('+', x + controls.spacingChange/2, y + controls.spacingChange/2);
        } else {
        text('-', x + controls.spacingChange/2, y + controls.spacingChange/2);
    }
}

//draw 'noughts and crosses'
function drawNoughtsCrosses() {
    if (random(1) < 0.50) {
        line(x, y, x + controls.spacingChange, y + controls.spacingChange);
        line(x, y + controls.spacingChange, x + controls.spacingChange, y);
        } else {
        ellipse(x + controls.spacingChange/2, y + controls.spacingChange/2, controls.spacingChange, controls.spacingChange)
    }
}


//reset sketch
function resetSketch() {
    x = 0;
    y = 0;
    col = 0;
    background(0);
}


function draw() {
    
    // line properties
    stroke(col, 255, 255);
    strokeWeight(controls.strokeWeight);
    
    
    // choose the type of shape to draw
    if (controls.shape == 1) {
    drawLine();
    } 
    else if (controls.shape == 2) {
    drawLine2();
    }
    else if (controls.shape == 3) {
    drawTriangle();
    }
    else if (controls.shape == 4) {
    drawPlusMinus();
    }
    else if (controls.shape == 5) {
    drawNoughtsCrosses();
    }


    
    // move into position to draw the next line
    x = x + controls.spacingChange;
    
    if (x > width) {
        x = 0;
        y = y + controls.spacingChange;
        
    // change the colour with each new line
    col = col + inc;
    if (col > 255 || col < 0) {
        inc = inc*-1;
        }
    }
    
    // if the screen is full, reset position and erase the canvas
    if (y > height) {
        y = 0;
        background(0);
    }
}