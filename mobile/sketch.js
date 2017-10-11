document.ontouchmove = function(event) {
	event.preventDefault();

	var pos1, pos2;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	stroke(0);
	strokeWeight(5);
	pos1 = 100;
	pos2 = 40;
}

function draw() {
	background(255);
	fill(100, 200, 100);
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		pos1 = pos1 + pos2;
		textSize(40);
		text(touches[i].x, 100, pos1);
		text(touches[i].y, 200, pos1);
		vertex(touches[i].x, touches[i].y);
	}
	endShape(CLOSE);
	fill(175, 255, 100);
	for (var j = 0; j < touches.length; j++) {
		ellipse(touches[j].x, touches[j].y, 50, 50);
	}
}
