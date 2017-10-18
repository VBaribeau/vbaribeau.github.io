var ax, ay, vx, vy, px, py, vMultiplier;

function setup() {
	createCanvas(windowWidth, windowHeight);
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
	fill(150, 150, 150);
	vMultiplier = 0.01;
	ax = rotationY x vMultiplier;
	vx += ax;
	px += vx;
	ay = rotationX x vMultiplier;
	vy += ay;
	py += vy;
	ellipse(px, py, 100, 100);
}