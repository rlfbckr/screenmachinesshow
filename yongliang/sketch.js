var resize;
let zahl = 50;
let nid = 0;
let flowers = [];
let maxage = 10000;
let last_birth = 0;
let birth_interval = 600;

function setup() {
  rectMode(RADIUS);
  //setAttributes("antialias", true);
  createCanvas(windowWidth, windowHeight, WEBGL);
  //background(255, 200, 80);
  background(25, 0, 255);
  frameRate(60);
  noStroke();
  //noFill();
  //flower = new flower(200, 100, 3);
  //let flower = [];
  for (let i = 0; i < zahl; i++) {
    flowers[i] = new flower(random(width), random(height), random(2, 4));
  }
}

function draw() {
  for (let i = 0; i < zahl; i++) {
    flowers[i].show();
  }

  if (flowers.length < zahl && millis() - last_birth > birth_interval) {
    flowers.push(new flower());
    last_birth = millis();
  }
  	for (var key in flowers) {
		if (flowers[key].delete == true) {
			flowers.splice(key, 1);
		}
	}
}

class flower {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.x = 1500;
    this.xpos_target = random(-width / 2, width / 2);
    this.ypos_target = random(-height / 2, height / 2);

    this.delete = false;
    this.size = random(50, 100);
  }

  show() {
    fill(this.x / 5.2, 28, 255, 180);
    push();
    translate(this.xpos, this.ypos);

    if (this.x >= -200) {
      this.x = this.x - 5;
    }

    rotate(this.x / random(3));

    scale(0.01 * this.size);
    translate(this.x, 0, 0);
    rect(
      width / 2,
      height / 2,
      this.x - this.x / random(20, 40),
      this.x - 499,
      1000
    );
    fill(this.x / 5.2, 28, 0, random(200, 255));
    pop();

    var myage = millis() - this.born;
    //fill(this.color);
    fill(255, map(myage, 0, maxage, 255, 0));
    if (myage >= maxage) {
      this.delete = true; // mark for deleting
    }
    ellipse(this.xpos, this.ypos, this.size);
    let speed = 0.4; 
    
    this.xpos = this.xpos * speed + this.xpos_target * (1 - speed);
    this.ypos = this.ypos * speed + this.ypos_target * (1 - speed);
    if (dist(this.xpos, this.ypos, this.xpos_target, this.ypos_target) < 2) {

      let jump = 5;
      let where = random(0, 360);
      this.xpos_target = constrain(
        this.xpos_target + sin(radians(where)) * jump,
        -width / 2,
        width / 2
      );
      this.ypos_target = constrain(
        this.ypos_target + cos(radians(where)) * jump,
        -height / 2,
        height / 2
      );
    }
    fill(255);
    //text(myage, this.xpos, this.ypos);
  }
}
