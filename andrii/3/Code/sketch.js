// let ugol = 0;


// function setup() {
//    noiseSeed(50)
//   createCanvas(windowWidth, windowHeight);
//   noFill();
//   strokeWeight(1);
//   background(255);
// }

// let noi = 0;
// let pp = 1;

// let uwelichenie =0;

// function draw() {
//   translate(width / 2, height / 2);
//    rotate(PI*frameCount/1000)

//   ugol += 0.005;
//   pp += 0.002;
//   uwelichenie += 0.18;


//   beginShape();
//   // translate(width / 2, height / 2);
//    rotate(PI/1000);
//   for (let i = 0; i < TWO_PI; i +=0.01) {

//     stroke(map(uwelichenie,0,1000,0,255),
//     map(uwelichenie,1000,2000,0,255),
//     map(uwelichenie,2000,3000,0,255),
//     map(uwelichenie,0,400,0,30));


//     let xofs = sin(i) + pp;
//     let yofs = cos(i) - pp;
//     let radius = map(noise(xofs, yofs), 0, 1, 0, uwelichenie);
//     let x = cos(i) * radius;
//     let y = sin(i) * radius;

//     vertex(x+sin(ugol)*100, y+cos(ugol)*100);
   
//     noi += 0.01;


//   }
//   endShape(CLOSE);
//   if (uwelichenie <= 0) {
//     noLoop();
//   }
//   // rect(0,0,50,50);

// }



let ugol = 0;


function setup() {
   noiseSeed(25);
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
  background(255);
}

let noi = 0;
let pp = 1;

let uwelichenie =0;

function draw() {
  translate(width / 2, height / 2);
  rotate(PI*frameCount/200)
for(let i =0;i<5;i++){
  ugol += 0.005;
  pp += 0.002;
  uwelichenie += 0.18;


  beginShape();
  // translate(width / 2, height / 2);
   rotate(PI/1000);
  for (let i = 0; i < TWO_PI; i += 0.01) {

    stroke(map(uwelichenie,0,1000,0,255),
    map(uwelichenie,1000,2000,0,255),
    map(uwelichenie,2000,3000,0,255),
    50);


    let xofs = sin(i) + pp;
    let yofs = cos(i) - pp;
    let radius = map(noise(xofs, yofs), 0, 1, 0, uwelichenie);
    let x = cos(i) * radius;
    let y = sin(i) * radius;

    vertex(x+sin(ugol)*100, y+cos(ugol)*100);
   
    noi += 0.01;


  }
  endShape(CLOSE);
  if (uwelichenie <= 0) {
    noLoop();
  }
   

}}