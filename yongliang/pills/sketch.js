let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // wie gross ist die zeichenfläche
  for (var i = 0; i < 200; i++) {
    flowers.push(new flower(random(0, width), height));
  }
  background(0, 0, 255);
  frameRate(20)
}

function draw() {
  background(0, 0, 255, 10);
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].draw();
    flowers[i].update();
    if (flowers[i].alive == 0) {
      flowers.splice(i, 1);
      flowers.push(new flower(random(0, width), height));
    }
    
  }
}

class flower {
  constructor(x, y) {
    // initalisierung
    this.pos = createVector(x, y);
    this.speed = random(0.1, 5);
    this.color = color(random(255), random(255), random(255));
    this.size = random(2, 50);
    this.alive = 1;
    this.x = 1500;
  }

  update() {
    // verhalten
    this.pos.x = this.pos.x + random(-2, 2);
    this.pos.y = this.pos.y + random(-1, 1);
    this.pos.y = this.pos.y - this.speed;
    if (this.pos.y < -20) {
      this.alive = 0;
    }
  }

  draw() {
    // aussehen / zeichen
    /* noStroke(); //(255);
    fill(this.color, 128);
    // noFill();
    ellipse(this.pos.x, this.pos.y, this.size, this.size)*/

    fill(this.x / 5.2, 28, 255, 180);
    push();
    translate(this.pos.x, this.pos.y);

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
  }
}
