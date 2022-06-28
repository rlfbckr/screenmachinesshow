/*********************
// Waves
// Description: Draws mouse interactive waves on the screen
// Credit: @reona396 https:// www.openprocessing.org/sketch/521545
// Try it: https://editor.p5js.org/hello-p5/sketches/ry6K_c9zE
*********************/

var waves = []; // array to store the waves
var waveNumber = 30;

function setup() {
    //  canvas = createCanvas(500, 500);
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    // create a new bunch of waves
    for (var i = 0; i < 30; i++) {
        waves.push(new Wave());
    }
}

function draw() {
    clear();
    for (var i = 0; i < waveNumber; i++) {
        waves[i].display();
    }
}

function Wave() {
    this.yoffA = random(10);
    this.yoffB = this.yoffA;
    this.yRandom = random(-width / 120, width / 120); // randomly change the height of the wave
    this.color = random(360);
    this.display = function() {
        this.xoffA = 0;
        this.xoffB = 0;
        fill(this.color, 80, 100, 50); // randomize color
        // Draw the shape
        beginShape();
        // Waveshape for the top
        for (var xA = 0; xA <= width; xA += 10) {
            var yA = map(noise(this.xoffA, this.yoffA), 0, 1, 0, height) + this.yRandom;
            vertex(xA, yA);
            this.xoffA += 0.05;
        }
        // Waveshape for the bottom
        for (var xB = width; xB >= 0; xB -= 10) {
            var yB = map(noise(this.xoffB, this.yoffB), 0, 1, 0, height) + this.yRandom;
            vertex(xB, yB);
            this.xoffB += 0.05;
        }
        // make the shape move each frame
        this.yoffA += 0.01;
        this.yoffB += 0.01;
        endShape(CLOSE);
    };
}

function mouseMoved() {
    var mouseDistance = map(mouseX, 0, width * 2, 0, 30) // measure distance of the mouse from the side of the page
    waveNumber = mouseDistance // use the distance to determine the number of waves on the screen
}