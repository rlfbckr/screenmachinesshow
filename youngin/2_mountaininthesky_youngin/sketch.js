let ranges;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
 mountains();
}

function mountains() {

 noFill();
  ranges = 80;
  strokeWeight(0.5);
  for (let i = 0; i < ranges; i++) {
    let palet = map(i, 0, ranges, 50, 200);
    beginShape();
    for (let x = -width ; x < width+150; x +=50) {
      let n = noise(x *0.004+random(0.01,0.002), i * 0.005, millis() * 0.001); // 0.001<
      let y = map(n, 0, 1, height/5, height);
      stroke( palet, random(50, 180),random(50,250),100);
      curveVertex(x,y-50);
    }
    endShape();
  }
}
