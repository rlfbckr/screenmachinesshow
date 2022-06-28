
let myBots = [];


function setup() {
  createCanvas(windowWidth, windowHeight); // wie gross ist die zeichenfläche
  for (var i = 0; i < 500; i++) {
    myBots.push(new Bot(random(0, width), height));
  }
  background(255, 255, 255);
}

function draw() {
  background(250, 250, 255,10);
  for (var i = 0; i < myBots.length; i++) {
    myBots[i].update();
    if (myBots[i].alive == 0) {
      myBots.splice(i, 1);
      myBots.push(new Bot(random(0, width), height));
    }
    myBots[i].draw();

  }
}

class Bot {
  constructor(x, y) {
    // initalisierung
    this.pos = createVector(x, y);
    this.speed = random(0.1, 5);
    this.color = color(random(250), random(200), random(100));
    this.size = random(50, 0);
    this.alive = 1;
  }

  update() {
    // verhalten
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-3, 2);
    this.pos.y = this.pos.y - this.speed;
    if (this.pos.y < -10) {
      this.alive = 0;
    }

  }

  draw() {
    // aussehen
    noStroke(); //(205);
    fill(this.color, 200);
    ellipse(this.pos.x, this.pos.y, this.size, this.size)
  }
}



