//***************************************************
var balls = [];
var maxBalls;
//***************************************************

var s1, ax, ay, vx, vy, px, py;
var b, w, vMultiplier, g, r;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//***************************************************
	maxBalls = 100;
	for (var i = 0; i < maxBalls; i++) {
		balls[i] = new Ball();
	}
	//***************************************************
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
	b = 0;
	w = 255;
}

function draw() {
	background(b);
	//***************************************************
	for (var i = 0; i < maxBalls; i++) {
		balls[i] = new Ball();
	}
	//***************************************************
	fill(w);
	textSize(15);
	text("Final2.5.5", 10, 15);
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
	b = b + 2;
	if (b >= 255) {
		b = 0;
	}
	w = w - 2;
	if (w <= 0) {
		w = 255;
	}
}
//***************************************************
function Ball() {
	this.couleur = w;
	this.posx = random(0, windowWidth);
	this.posy = random(0, windowHeight);
	this.taille = random(5, 10);
	ellipse(this.posx, this.posy, this.taille, this.taille);
}
//***************************************************
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//***************************************************