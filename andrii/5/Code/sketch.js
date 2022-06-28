function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseSeed(89);
  for (let i = 0; i < 100; i++) {
    str[i] = new Schtern();
  }
}

function draw() {
  background(255);
  let c = (sin(frameCount / 500) + 1) * 177;
  let c2 = (sin(frameCount / 500 + PI / 3 * 4) + 1) * 177;
  let c3 = (sin(frameCount / 500 + PI / 3 * 2) + 1) * 177;

  for (let i = 0; i < 30; i++) {

  
    str[i].ruh();
    for (let j = 0; j < 30; j++) {
      if (dist(str[i].x, str[i].y, str[j].x, str[j].y) < 300) {
        let dis = dist(str[i].x, str[i].y, str[j].x, str[j].y);
        strokeWeight(map(dis, 0, 300, 2, 0))
        stroke(map(dis, 0, 300, 0, c), c2, map(dis, 0, 300, c3, 255));
        line(str[i].x, str[i].y, str[j].x, str[j].y);
      }

    }
  }
}
let str = [100];

class Schtern {
  constructor() {
    this.x = -100;
    this.y = -100;
    this.xs = random(200, 100);
    this.ys = random(100, 200);
  }
  ruh() {
    this.x = map(noise(frameCount / this.xs / 3), 0, 1, -300, width + 300);
    this.y = map(noise(frameCount / this.ys / 3), 0, 1, -200, height + 200);

  }

}