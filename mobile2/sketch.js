//***************************************************
var stars = [];
var maxStars = 50;
//***************************************************
var s1, ax, ay, vx, vy, px, py;
var b, w, c, vMultiplier, g, r;
//***************************************************
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	ax = 0;
	ay = 0;
	vx = 0;
	vy = 0;
	px = windowWidth / 2;
	py = windowHeight / 2;
	s1 = 70;
	s2 = s1 / 6.66;
	s3 = s1 / 4.2;
	g = 0.5;
	r = s1 / 2;
	b = 1;
	w = 255;
	c = 1;
	for (var i = 0; i < maxStars; i++) {
		stars[i] = new Star();
	}
}
//***************************************************
function draw() {
	background(b);
	//***************************************************
	for (var i = 0; i < maxStars; i++) {
		drawStar(stars[i].X, stars[i].Y, stars[i].size);
	}
	//***************************************************
	fill(w);
	textSize(15);
	text("FinaleSwitch", 10, 15);
	text("Rx: " + floor(rotationX), 10, 30);
	text("Ry: " + floor(rotationY), 10, 45);
	Marble();
}
//***************************************************
function Marble() {
	vMultiplier = 0.01;
	ax = rotationY * vMultiplier;
	vx += ax;
	px += vx;
	ay = rotationX * vMultiplier;
	vy += ay;
	py += vy;
	fill(0, 201, 255);
	ellipse(px, py, s1, s1);
	fill(0, 255, 128);
	ellipse(px - s2, py - s2, r, r);
	fill(33, 190, 111);
	ellipse(px + s3, py + s3, s1 / 4, r / 2);
	if (px > windowWidth - r) {
		px = windowWidth - r;
		vx = -vx * g;
	}
	if (px < 0 + r) {
		px = 0 + r;
		vx = -vx * g;
	}
	if (py > windowHeight - r) {
		py = windowHeight - r;
		vy = -vy * g;
	}
	if (py < 0 + r) {
		py = 0 + r;
		vy = -vy * g;
	}
}
//***************************************************
function deviceShaken() {
	b = b + c;
	if (b >= 255 || b <= 0) {
		c = -c;
	}
	w = 255 - b;
}
//***************************************************
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//***************************************************
function Star() {
	this.size = random(5, 10);
	this.X = random(0 + this.size / 2, windowWidth - this.size / 2);
	this.Y = random(0 + this.size / 2, windowHeight - this.size / 2);
}
//*******************************
function drawStar(x, y, s) {
	fill(w);
	ellipse(x, y, s, s);
}
//******************************************************************************