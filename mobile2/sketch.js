//***************************************************
var stars = [];
var maxStars = 50;
//***************************************************

var s1, ax, ay, vx, vy, px, py;
var b, w, vMultiplier, g, r, u, d, check1, check2;

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
	w = 254;
	u = 1;
	d = 1;
	check1 = false;
	check2 = false;
	for (var i = 0; i < maxStars; i++) {
		stars[i] = new Star;
	}

}

function draw() {
	background(b);
	Ifs();
	//***************************************************
	for (var i = 0; i < maxStars; i++) {
		drawStar(stars[i].X, stars[i].Y, stars[i].size);
	}

	//***************************************************
	fill(w);
	textSize(15);
	text("-!Final!-", 10, 15);
	text("Rx: " + floor(rotationX), 10, 30);
	text("Ry: " + floor(rotationY), 10, 45);
	Marble();
}

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
	ellipse(px - s2, py - s2, s1 / 2, s1 / 2);
	fill(33, 190, 111);
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




//***************************************************
function deviceShaken() {
	b = b + u;
	if (b >= 255) {
		check1 === true;
	}
	if (b <= 0) {
		check1 === false;
	}
	w = w + d;
	if (w <= 0) {
		check2 === true;
	}
	if (w >= 255) {
		check2 === false;
	}
}
//***************************************************
function Ifs() {
	if (check1 === true) {
		u = -1;
	}
	if (check2 === true) {
		d = -1;
	}
	if (check1 === false) {
		u = 1;
	}
	if (check2 === false) {
		d = 1;
	}
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
	x = x++;
	ellipse(x, y, s, s);
}
//******************************************************************************