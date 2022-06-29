var time = 0;
var radius = 500;
var speed = 1;
var xpos_last = 0;
var ypos_last = 0;

var lastchange = 0;
var x_drift = 0.9;
var y_drift = 1.1;
var r = 255;
var g = 255;
var b = 255;
var r_goto = 255;
var g_goto = 255;
var b_goto = 255;
var change_intervall = 3000;



function setup() {
    createCanvas(windowWidth, windowHeight);
    //   createCanvas(1400 * 0.7, 1000 * 0.7);
    background(0);
    frameRate(120);
    textSize(12);
    //colorMode(HSB, 360, 255, 255);
}

function draw() {
    var xpos = (width / 2) + (sin(time * x_drift) * radius);
    var ypos = (height / 2) + (cos(time * y_drift) * radius);

    noStroke();
    fill(0);


    stroke(r, g, b);
    //stroke(r,g,b,random(20,100));


    if (xpos_last != 0 && ypos_last != 0) {
        line(ypos_last, ypos_last, xpos, ypos);
    }

    time = time + speed;
    xpos_last = xpos;
    ypos_last = ypos;

    if ((millis() - lastchange) > change_intervall) {
        //  background(0);
        x_drift = random(0.5, 1.2);
        y_drift = random(0.5, 1.2);
        r = random(100, 255);
        g = random(100, 255);
        b = random(100, 255);
        radius = random(10, windowWidth + 500);
        speed = random(0.2, 2);
        xpos_last = 0;
        ypos_last = 0;
        lastchange = millis()
    }


}

function mouseClicked() {
    background(0);
}