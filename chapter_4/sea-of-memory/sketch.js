let mobilenet;
let video;
let label = '';
let label2 = '';
let label3 = '';
let conf;
let prob = '';



function modelReady() {
    console.log('Model ready');
    mobilenet.predict(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        //console.log(results);
    label = results[0].className;
    label2 = results[1].className;
    label3 = results[2].className;
    prob = results[0].probability;

    
    //createP(label);
    //createP(prob);
    mobilenet.predict(video, gotResult);
}
}

function setup() {
  
//frameRate(30); //slow down the framerate for a smoother effect. 
  createCanvas(700, 700);
  background(0);
  video = createCapture(VIDEO);
    video.hide();
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
    
}

function draw() {
    background(0, 0.9);
    conf = map(prob, 0, 1, 0, 255);
    
    //image(video, 0, 0); //Displays webcam output on canvas
    
    fill(conf);
    textSize(20);
    text(label, random(0, width-200), random(0, height-30));
    text(label2, random(0, width-200), random(0, height-30));
    text(label3, random(0, width-200), random(0, height-30));
}