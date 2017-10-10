function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
}

function touchStarted() {
 background(255);
 textSize(40);
 text(touches[0].x, 100, 100);
 text(touches[0].y, 200, 100);
}