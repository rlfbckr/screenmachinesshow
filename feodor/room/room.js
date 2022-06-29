var margin = 50;
var maxX = 20;
var maxY = 15;
let posX, posY, posZ;
var time = 0;
var speed = 0;
var radius = 50
var HUE = 0;
var SAT = 0;


function setup() {
    //	var canvas = createCanvas(1080, 720,WEBGL);
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('p5sketch');
    colorMode(HSB, 360);
    rectMode(CENTER);
    //	noLoop();
    room = new Boxes();
    bee = new Mover();

}

function draw() { // wird dauernd im loop aufgerufen
    background(0, 350);
    fill(50, 50, 150);
    translate(-540, -360);
    maxX = mouseX / 54;
    maxY = mouseY / 55;



    push();
    translate(width / 2, height / 2);
    room.move();
    room.display();


    bee.move();
    bee.display();
    pop();


}
class Boxes {
    move() {

        rotateX(frameCount * 0.005);
        rotateY(frameCount * 0.005);

    }
    display() {
        noFill();
        stroke(0, 0, 360);
        box(400);
    }

}
class Mover {

    move() {
        this.posX = cos(speed * noise(1.5, 3)) * (radius + 100);
        this.posY = sin(speed * noise(1.5, 3)) * (radius + 100);
        this.posZ = (cos(speed) + sin(speed)) / noise(1.5 / 2.2) * (radius - 12);
        translate(this.posX, this.posY, this.posZ);
        speed += 0.02;


    }
    display() {
        HUE = map(this.posX, -140, 140, 0, 350);
        SAT = map(this.posY, -140, 140, 100, 360);
        //if(HUE < 0){HUE = -HUE}
        noStroke();
        //stroke(360,0,0)
        fill(HUE, SAT, 360);
        sphere(40);
    }
}