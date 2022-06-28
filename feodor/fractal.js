let angle = 0
let z = -400
let offset = 100
let fade =0
let fade2 = 100
let angle2 =0
let u =400
var rev = false;
var rev2 = false;

function setup() {
  createCanvas(800, 800, WEBGL);
  rectMode(CENTER)
  colorMode(HSB,100)

  
}

function draw() {
  background(0);
  noFill()
  strokeWeight(2)

    angle += 0.02
    angle2 -= 0.01
    fade += 0.1;
    fade2 -= 0.1;

    //push();
    for (let i = 0; i < 50; i++) {
    translate(0, 0, z)
    rotateZ(angle)
      
    col = color(fade, 80,70)
    col2 = color(fade2,80,70)

    if (fade>100){fade=0;}

    stroke(col);
    rect(0, 0, 100, 100)
    stroke(col2);
    ellipse(0,0,40,40)
    if (fade2<0){fade2=100;}

    if (rev == false){z += 0.1}
    
    if (z >= width-200 || rev == true) {
      rev = true;
      z -= 0.1 
      if(z <= -400){rev = false} 
    }
  }
  //pop();
  //push();
  for (let x = 0; x < 50; x++) {
    translate(0, 0, u)
    rotateZ(angle2)
    
    /*col = color(fade, 80,70)
    col2 = color(fade2,80,70)
    if (fade>100){fade=0;}*/
    stroke(col2);
    rect(0, 0, 110, 110)
    stroke(col);
    ellipse(0,0,90,90)
    //if (fade2<0){fade2=100;}

    //var inc = 0.01
    if(rev2==false){
      u -= 0.1 //+ inc
      //inc += inc*2
    }
    if (u <= 0 || rev2 == true) {
      rev2 = true;
      u += 0.1
        
      if(u >= 600){rev2 = false} 
    }
  }
  //pop();

}