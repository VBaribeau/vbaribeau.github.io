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
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		fill(100, 200, 100);
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	for (i = 0; i < touches.length; i++) {
		strokeWeight(5);
		fill(175, 255, 100);
		ellipse(touches[i].x, touches[i].y, 50, 50);
		strokeWeight(1);
		fill(0);
		textSize(25);
		text(floor(touches[i].x), touches[i].x, touches[i].y);
		text(floor(touches[i].y), touches[i].x + 100, touches[i].y);

	}
}