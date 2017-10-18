var s1, ax, ay, vx, vy, px, py;
var s2, ax2, ay2, vx2, vy2, px2, py2, r2;
var s3, ax3, ay3, vx3, vy3, px3, py3;
var value, vMultiplier, g;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	px = windowWidth / 2;
	py = windowHeight / 2;
	r = s1 / 2;
	ax2 = 0;
	ay2 = 0;
	vx2 = 0;
	vy2 = 0;
	px2 = windowWidth / 2;
	py2 = windowHeight / 2;
	s1 = 75;
	s2 = s1 / 6.66;
	s3 = s1 / 4.2;
	g = 0.3;
	value = 75;
}

function draw() {
	background(255, 0, value);
	textSize(15);
	text("Test2.3", 10, 15);
	text("Rx: " + floor(rotationX), 10, 30);
	text("Ry: " + floor(rotationY), 10, 45);
	text("Rz: " + floor(rotationZ), 10, 60);
	Marble();
	Marble2();
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
	ellipse(px, py, s1, s1);
	fill(75);
	ellipse(px + s3, py + s3, s1 / 4, s1 / 4);
	if (px > windowWidth - s1 / 2) {
		px = windowWidth - s1 / 2;
		vx = -vx * g;
	}
	if (px < 0 + s1 / 2) {
		px = 0 + s1 / 2;
		vx = -vx * g;
	}
	if (py > windowHeight - s1 / 2) {
		py = windowHeight - s1 / 2;
		vy = -vy * g;
	}
	if (py < 0 + s1 / 2) {
		py = 0 + s1 / 2;
		vy = -vy * g;
	}
}

function Marble2() {
	vMultiplier = 0.05;
	ax2 = rotationY * vMultiplier;
	vx2 += ax2;
	px2 += vx2;
	ay2 = rotationX * vMultiplier;
	vy2 += ay2;
	py2 += vy2;

	fill(100);
	ellipse(px2 - s2, py2 - s2, s1 / 2, s1 / 2);

	if (px2 > px + r) {
		px2 = px + r;
		vx2 = -vx2 * g;
	}
	if (px2 < px - r) {
		px2 = px - r;
		vx2 = -vx2 * g;
	}
	if (py2 > py + r) {
		py2 = py + r;
		vy2 = -vy2 * g;
	}
	if (py2 < py - r) {
		py2 = py - r;
		vy2 = -vy2 * g;
	}
}




function deviceShaken() {
	value = value + 1;
	if (value > 255) {
		value = 75;
	}
}