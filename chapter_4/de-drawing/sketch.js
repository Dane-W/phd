

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}


function draw() {
    
    lines();
    erase_lines();
    erase_lines();
    erase_lines();
    
    
}

function lines() {
    
    var distance_left = random(width);
    var distance_top = random(height);
    
    stroke(random(255), random(255), random(255));
        line(0, distance_top, width, distance_top);   //horizontal straight lines
        line(distance_left, 0, distance_left, width); //Vertical straight lines
}

function erase_lines() {
    
    var distance_left = random(width);
    var distance_top = random(height);
    
    stroke(0);
        line(0, distance_top, width, distance_top);   //horizontal straight lines
        line(distance_left, 0, distance_left, width); //Vertical straight lines
}