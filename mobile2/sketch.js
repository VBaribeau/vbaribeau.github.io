var ax, ay, vx, vy, px, py, vMultiplier, s, g;
var value;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	px = windowWidth / 2;
	py = windowHeight / 2;
	s = 100;
	g = 0.3;
	value = 75;
}

function draw() {
	background(255, 0, value);
	textSize(15);
	text("Test2.3", 10, 15);
	text("Rx: " + rotationX, 10, 30);
	text("Ry: " + rotationY, 10, 45);
	text("Rz: " + rotationZ, 10, 60);
	Marble();
}

function Marble() {
	vMultiplier = 0.05;
	ax = rotationY * vMultiplier;
	vx += ax;
	px += vx;
	ay = rotationX * vMultiplier;
	vy += ay;
	py += vy;
	fill(150);
	ellipse(px, py, s, s);
	fill(100);
	ellipse(px - 15, py - 15, s / 2, s / 2);
	fill(75);
	ellipse(px + 25, py + 25, s / 4, s / 4);
	if (px > windowWidth - s / 2) {
		px = windowWidth - s / 2;
		vx = -vx * g;
	}
	if (px < 0 + s / 2) {
		px = 0 + s / 2;
		vx = -vx * g;
	}
	if (py > windowHeight - s / 2) {
		py = windowHeight - s / 2;
		vy = -vy * g;
	}
	if (py < 0 + s / 2) {
		py = 0 + s / 2;
		vy = -vy * g;
	}
}

function deviceShaken() {
	value = value + 1;
	if (value > 255) {
		value = 75;
	}
}