/*
  Ralf Baecker 2021

  original Schotter by Georg Nees ~1960
  http://www.medienkunstnetz.de/werke/schotter/

*/

var w = 12;
var h = 19;
var s = 0.001;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}

function draw() {
    background(0);
    noFill();
    stroke(255);
    push();
    translate((width / 2) - (w * 4 * 5), (height / 2) - (h * 5 * 4));
    for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
            push();
            translate((x + 0.5) * 10 * 4, (y + 0.5) * 10 * 4);
            translate(map(noise(x, y, (millis() * s)), 0, 1, -y * 0.9, y * 0.9), map(noise(x, y, (millis() * s)), 0, 1, -y * 0.9, y * 0.0));
            rotate(map(noise(x, y, s * millis()), 0, 1, -y * 0.15, y * 0.15));
            rect(0, 0, 10 * 4, 10 * 4);
            pop();
        }
    }
    pop();
}