/* ***************************************************************************************************************** */
/* ************************************************************ 60 SEK******************************************** */
/* ***************************************************************************************************************** */

let xn = 1;
let xnoffs = 0.01;

let ugolx = 0;
let ugoly = 0;

let xoff = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}


let cislo = 1;

function draw() {
  let c = (sin(frameCount / 500) + 1) * 177;
  let c2 = (sin(frameCount / 500 + PI / 3 * 4) + 1) * 177;
  let c3 = (sin(frameCount / 500 + PI / 3 * 2) + 1) * 177;

   background(255,35);
  
  if (cislo < 700) {
    cislo += 0.4;
  }



  translate(width / 2, height / 2);
  /*  rotate(PI /2); */
 



  xoff += 0.005;

  for (let u = 0; u < cislo *2; u += 1) {
    fill(map(c, 177, 0, 50, 0), map(c2, 177, 0, 50, 0), map(c3, 177, 0, 50, 0), random(255));
 


    let x = sin(u) * map(noise(xoff), 0, 1, 0,random(700));
    let y = cos(u) * map(noise(xoff + 10), 0, 1, 0, 600);
    ellipse(x, y, random(10), random(10));
  }
  for (let u = 0; u < cislo; u += 1) {
    fill(c, c2, c3, random(255));
    let x2 = sin(u) * map(noise(xoff + 0.2), 0, 1, 0, random(500));
    let y2 = cos(u) * map(noise(xoff + 10 + 0.2), 0, 1, 0,400);
    ellipse(x2, y2, random(25), random(25));
  }

    // text(int(cislo),-500,-300);
  //   text(int(frameRate()),-500,-350);
  print(23);
}





stroke((sin(frameCount / 100) + 1) * 177, (sin(frameCount / 100 + PI / 3 * 4) + 1) * 177, (sin(frameCount / 100 + PI / 3 * 2) + 1) * 177, (350) / 350 * 255);























// let xn = 1;
// let xnoffs = 0.01;

// let ugolx = 0;
// let ugoly = 0;

// let xoff = 1;


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
// }

// let farbe = 255;
// let farbegeschw =1;
// let cislo =1;

// function draw() {

//   background(255, 25);
//   farbe -= farbegeschw;
//   // if(farbe<=0||farbe>=255){
//   //   farbegeschw *=-1;
//   // }
//   cislo +=0.08;

//   translate(width / 2, height / 2);
//   ugolx += 0.03;
//   ugoly += 0.03;
//   xoff += 0.005;

//   for (let u = 0; u < cislo; u += 1) {
//     fill(random(250), 0, 0, 120);
//     let y = cos(u) * map(noise(xoff + 10), 0, 1, 0, 600);
//     let x = sin(u) * map(noise(xoff), 0, 1, 0, random(800));
//     ellipse(x, y, random(10), random(10));
//     fill(0, 0, random(255), random(255));
//     let x2 = sin(u) * map(noise(xoff + 0.2), 0, 1, 0, random(700));
//     let y2 = cos(u) * map(noise(xoff + 10 + 0.2), 0, 1, 0, 500);
//     ellipse(x2, y2, random(25), random(25));
//   }

// // text(cislo,-300,-300);
// // text(frameRate(),-300,-250);
// print(23);
// }