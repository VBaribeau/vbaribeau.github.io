
document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
 background(255);
 
 for(var i=0;i<touches.length;i++){
  rect(touches[i].x,touches[i].y,150,150);
  }
}

function touchStarted() {
 background(255);
 textSize(40);
 text(touches[0].x, 100, 100);
 text(touches[0].y, 200, 100);
}