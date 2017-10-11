document.ontouchmove = function(event) {
	event.preventDefault();

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	stroke(0);
	strokeWeight(5);
}

function draw() {
	background(255);
	fill(100, 200, 100);
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		textSize(40);
		text(touches[i].x, 100, 100);
		text(touches[i].y, 200, 100);
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	fill(175, 255, 100);
	for (var j = 0; j < touches.length; j++) {
		ellipse(touches[j].x, touches[j].y, 50, 50);
	}
}
