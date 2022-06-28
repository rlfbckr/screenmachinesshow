// how to set lifetime?  -> "removing object from array" https://youtu.be/tA_ZgruFF9k // using `splice()`
// create Graphic -> more of planet object at other place !!

let planet, planet2, planet3, planet4, planet5, planet6, planet7, planet8, planet9, planet10;
let maxPlanet = 5;

let rotation = 0;
let col = 255;
let size = 250;
let ang;
let w = 1;
let h = 3;
let polygonNum1 = 4;
let polygonNum2 = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //  createCanvas(1600, 900);
    background(255);
    let size = 5;
    planet = new Star();
    planet2 = new Star();
    planet3 = new Star();
    planet4 = new Star();
    planet5 = new Star();
    planet6 = new Star();
    planet7 = new Star();
    planet8 = new Star();
    planet9 = new Star();
    planet10 = new Star();
}

function draw() {
    frameRate(30);
    planet.show();
    planet2.show();
    planet3.show();
    planet4.show2();
    planet5.show2();
    planet6.show2();
    planet7.show2();
    planet8.show();
    planet9.show2();
    planet10.show2();
}

class Star {
    constructor(r, g, b, hue) {
        this.r = random(186, 210);
        this.g = random(120, 226);
        this.b = random(150, 240);
        this.hue = 10;
        this.x = cos(ang);
        this.y = sin(ang) * size;
        this.w = 100;
    }

    show(x, y) {
        noFill();
        stroke(this.r, this.g, this.b, 10);
        strokeWeight(1);
        translate(750, 250);
        rotation = rotation * random(-20, 20);
        beginShape();
        translate(this.w * -1 - 500, h * -1 - 100);
        for (ang = 0; ang < 360; ang += random(polygonNum1, polygonNum2)) {
            push();
            this.x = cos(ang + rotation) * size;
            this.y = sin(ang + rotation) * size;
            vertex(this.x + width / 4, this.y);
        }
        endShape();
    }


    show2(x1, y2) {
        noFill();
        stroke(this.b, this.r, this.g, 30);
        strokeWeight(1);
        translate(windowWidth - 300, 150);
        rotation = rotation * random(-20, 20);
        beginShape();
        translate(this.w * -1 - 1200, h * -1 - 100);
        for (ang = 0; ang < 360; ang += random(polygonNum1, polygonNum2)) {
            push();
            this.x = cos(ang + rotation) * size;
            this.y = sin(ang + rotation) * size;
            vertex(this.x + width / 4, this.y);
        }
        endShape();
    }
}