document.ontouchmove = function(event) {
	event.preventDefault();
	var iSize;
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
	fill(175, 255, 100);
	for (var j = 0; j < touches.length; j++) {
		ellipse(touches[j].x, touches[j].y, 50, 50);
		strokeWeight(1);
		fill(0);
		textSize(25);
		text(touches[i].x, floor(touches[i].x), floor(touches[i].y));
		text(touches[i].y, floor(touches[i].x) + 100, floor(touches[i].y));

	}
}