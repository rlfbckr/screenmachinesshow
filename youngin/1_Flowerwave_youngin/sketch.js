let ranges;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
background(255);
 mountains();
}

function mountains() {

  noFill();
  ranges = 150;
  strokeWeight(1);
  for (let i = 0; i < ranges; i++) {
    let palet = map(i, 0, ranges, 100, 200);
    stroke(random(150,200), palet, random(50, 150),100);
    beginShape();
    for (let x = -width ; x < width +100; x += 20) {
      let n = noise(x *0.002+random(0.01,0.002), i * 0.005, millis() * 0.0002);
      let y = map(n, 0, 1, height/5, height);
      curveVertex(x, y-50);
    }
    endShape();
  }
}
