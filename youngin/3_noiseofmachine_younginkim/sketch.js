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
  ranges = 200;
  strokeWeight(1);
  for (let i = 0; i < ranges; i++) {
    let palet = map(i, 0, ranges, 50, 150);
    beginShape();
    for (let x = -width ; x < width+150; x +=50) {
      let n = noise(x *0.002+random(0.01,0.005), i * 0.008, millis() * 0.0003);
      let y = map(n, 0, 1, height/5, height);
      if(x<width/2){
      stroke(random(50,150),random(50,200),random(50,200),100);
      }
      else if(x>=width/2){
         stroke(palet,random(50,100),random(50,150),50)
        
      }
      
      rect(x, y-50,50,50);

    }
    endShape();
  }
}
