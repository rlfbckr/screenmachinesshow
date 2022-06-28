let ranges;
let esize;
let rotation = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
background(255);
  Wavie();
}

function Wavie() {

 noFill();
  ranges =35;
  strokeWeight(random(1,3));
  rotation = rotation + random(-5,3);
  for (let j = 0; j < ranges; j++) {
    let palet = map(j, 0, ranges, 100,random(height/2,height));
    for(let k=0; k<ranges;k++){
      xpos = map(k,0,ranges,100,random(height/2,height));
      ypos = palet;
      var radius = random(10, 20);
      var x = sin(radians(xpos + rotation)) * radius;
      var y = cos(radians(ypos+ rotation)) * radius;
      randomSeed(2);
      if(rotation<200 || rotation>=700  ){
       stroke(random(10,250),random(150,200),palet,50);
       
     } else if(rotation>200 || rotation >=800){
       stroke(palet,random(0,200),random(50,100),50);
     }
     line(xpos+x*2, ypos+y,width-ypos+y,height-xpos+x);
    }
  

  } 
}
