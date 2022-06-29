var rand = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(0.4);	
}

function draw() {
	background(255);
	for (y = 0; y < 7; y++) {
		for (x = 0; x < 12; x++) {
			drawA(map(x, 0, 12, rand, width - rand), map(y, 0, 6, rand, height - rand));
		}
	}
}


function drawA(xpos, ypos) {
	stroke(0);
	//strokeWeight(3);
	strokeWeight(2.8);

	for (var viertel = 0; viertel < random(50, 60); viertel = viertel + 10) {
	}

	var viertel = 25;

	var x_ul = random(xpos, xpos + viertel);
	var y_ul = random(ypos, ypos - viertel);
	var x_q = random(xpos, xpos + viertel);
	var y_q = random(ypos, ypos - viertel);
	var x_ur = random(x_ul, x_ul + viertel);
	var y_ur = random(y_ul, y_ul + viertel);

	line(xpos, ypos, x_ul, y_ul);
	line(x_ul, y_ul, x_ur, y_ur);
	line(x_ul, y_q, x_q, y_q);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}