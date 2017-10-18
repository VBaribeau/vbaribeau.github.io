var ax, ay, vx, vy, px, py, vMultiplier, s;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	px = windowWidth / 2;
	py = windowHeight / 2;
	s = 100;
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
	ellipse(px, py, s, s);
	fill(100);
	ellipse(px, py, s, s);
	if (px <= windowWidth - s / 2) {
		vx = 0;
	} else if (py <= windowHeight - s / 2) {
		vy = 0;
	}
}