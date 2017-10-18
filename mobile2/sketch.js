var ax, ay, vx, vy, px, py, vMultiplier, s1, s2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	px = windowWidth / 2;
	py = windowHeight / 2;
	s1 = 100;
	s2 = 50;
}

function draw() {
	background(255);
	textSize(40);
	text("Rx: " + rotationX, 100, 100);
	text("Ry: " + rotationY, 100, 150);
	text("Rz: " + rotationZ, 100, 200);
	Marble();
}

function Marble() {
	fill(150);
	vMultiplier = 0.01;
	ax = rotationY * vMultiplier;
	vx += ax;
	px += vx;
	ay = rotationX * vMultiplier;
	vy += ay;
	py += vy;
	ellipse(px, py, s1, s1);
	fill(100);
	ellipse(px - 15, py - 15, s2, s2);
	if (px <= windowWidth - s1 / 2) {
		vx = 0;
	} else if (py <= windowHeight - s1 / 2) {
		vy = 0;
	} else if (px >= 0 + s1 / 2) {
		vx = 0;
	} else if (py >= 0 + s1 / 2) {
		vy = 0;
	}
}