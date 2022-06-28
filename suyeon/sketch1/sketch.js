
// how to set lifetime?  -> "removing object from array" https://youtu.be/tA_ZgruFF9k // using `splice()`
// create Graphic -> more of planet object at other place !!

let planet, planet2, planet3,planet4,planet5,planet6;

let rotation = 0;
let col = 255;
let size = 250;
let ang;
let w = 1;
let h = 3;
let polygonNum1 = 4;
let polygonNum2 = 20;
let polygonNum3 = 4;
let polygonNum4 = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  let size = 5;
  planet = new Star();
  planet2 = new Star();
  planet3 = new Seed();
  planet4 = new Seed();
}

function draw() {
  frameRate(50);
  planet.show();
  planet2.show();
  planet3.display();
  planet4.display();
}

class Star {
  constructor(r, g, b, hue) {
    this.r = random(50, 200);
    this.g = random(120, 205);
    this.b = random(200, 210);
    this.hue = 10;
    this.x = cos(ang);
    this.y = sin(ang) * size;
    this.w = 100;
  }

  show(x, y) {
    noFill();
    stroke(this.r, this.g, this.b, 10);
    strokeWeight(1);
    translate(750, 250);
    rotation = rotation * random(-20, 20);
    beginShape();
    frameRate(1);
    translate(this.w * -1 - 400, h * -1 - 100);
    for (ang = 0; ang < 360; ang += random(polygonNum1, polygonNum2)) {
      push();
      this.x = cos(ang + rotation) * size;
      this.y = sin(ang + rotation) * size;
      vertex(this.x, this.y);
    }
    endShape();
  }
}

class Seed {
  constructor(r,g,b) {
    this.r = random(240, 250);
    this.g = random(128, 160);
    this.b = random(0, 122);
    this.hue = 10;
    this.x = cos(ang);
    this.y = sin(ang) * size;
    this.w = 100;
  }

  display(x,y) {
    noFill();
    stroke(this.r, this.g, this.b, 10);
    strokeWeight(1);
    translate(windowWidth-(width /3), height / 2);
  //  translate(this.w * random(-1, 2), h * random(-3, 4)); //movement
    rotation = rotation *random(-20,20);
    beginShape();
    frameRate(5);
    translate(this.w * (-1)-400, h * (-1)-100);
    for (ang = 0; ang < 360; ang += random(polygonNum3, polygonNum4)) {
      push();
      this.x = cos(ang+rotation) * size;
      this.y = sin(ang+rotation) * size;
      vertex(this.x, this.y);
    }
    endShape();
  }
}
