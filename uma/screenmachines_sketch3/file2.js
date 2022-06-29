let myBots = [];
let gravitation;
let friction = 1;
let lastspawn = 0;
let spring = 0.05;

var h = 360;
var s = 100;
var b = 100;

var hT = 0;
var sT = 0;
var bT = 0;

var r = 80

var isNoise = true;


function setup() {
    createCanvas(windowWidth, windowHeight);

    //  createCanvas(1400*0.7,1000*0.7);
    colorMode(HSB, 360, 100, 100);
    // randomSeed(1);
    for (var i = 0; i < 20; i++) {
        bot = new Bot(random(0, width), random(0, height), random(2, 80));
        myBots.push(bot);
    }
}

function draw() {
    hT = hT + random(0.01, 0.02);
    sT = sT + random(0.01, 0.3);
    bT = bT + random(0.01, 0.2);

    if ((millis() - lastspawn) > 10000) {
        bot = new Bot(random(0, width), 0, random(10, 40), random(255));
        myBots.push(bot);
        lastspawn = millis();
    }
    //background(255);
    for (var i = 0; i < myBots.length; i++) {
        myBots[i].update(); // verhalten
        myBots[i].checkCollions();
        //myBots[i].collide();
        myBots[i].age();
        if (!myBots[i].alive) {
            myBots.splice(i, 1); // alten bot löschen
        } else {
            myBots[i].draw();
        }
    }
}

class Bot {
    constructor(x, y, size, color) {
        // initalisierung
        this.position = createVector(x, y);
        this.velocity = createVector(random(-5, 5), random(-5, 5));
        this.birthtime = millis();
        this.color = 0;
        this.size = size;
        this.alive = 1;
        this.lifetime = random(1000, 2000);
    }
    age() {
        return millis() - this.birthtime;
    }

    checkCollions() {
        for (let i = 0; i < myBots.length; i++) {
            if (this != myBots[i]) {
                let distance = dist(this.position.x, this.position.y, myBots[i].position.x, myBots[i].position.y);
                let minimale_distance = ((this.size / 2) + (myBots[i].size / 2));
                if (distance <= minimale_distance) {

                    let dx = myBots[i].position.x - this.position.x;
                    let dy = myBots[i].position.y - this.position.y;
                    let a = atan2(dy, dx);
                    this.velocity.mult(-1);
                    myBots[i].velocity.mult(-1);
                    let tx = this.position.x + cos(a) * (minimale_distance * 1.1);
                    let ty = this.position.y + sin(a) * (minimale_distance * 1.1);
                    myBots[i].position.x = tx;
                    myBots[i].position.y = ty;

                }
            }
        }
    }

    collide() {
        for (let i = 0; i < myBots.length; i++) {
            // console.log(others[i]);
            let dx = myBots[i].position.x - this.position.x;
            let dy = myBots[i].position.y - this.position.y;
            let distance = sqrt(dx * dx + dy * dy);
            let minDist = ((this.size / 2) + (myBots[i].size / 2));
            //   console.log(distance);
            //console.log(minDist);
            if (distance <= minDist) {
                //console.log("2");
                let angle = atan2(dy, dx);
                let targetX = this.x + cos(angle) * minDist;
                let targetY = this.y + sin(angle) * minDist;
                let ax = (targetX - this.position.x) * spring;
                let ay = (targetY - this.position.y) * spring;
                this.vx -= ax;
                this.vy -= ay;
                this.position.vx += ax;
                this.position.vy += ay;
            }
        }
    }



    update() {
            this.velocity.add(gravitation);
            this.position.add(this.velocity);

            // einfallswinkel = ausfallswinkel
            if ((this.position.x - this.size / 2) <= 0) {
                this.position.x = (this.size / 2);
                this.velocity.x *= -friction;
            }
            if ((this.position.x + this.size / 2) >= width) {
                this.position.x = width - (this.size / 2);
                this.velocity.x *= -friction;
            }
            if ((this.position.y - this.size / 2) <= 0) {
                this.position.y = (this.size / 2);
                this.velocity.y *= -friction;
            }
            if ((this.position.y + this.size / 2) >= height) {
                this.position.y = height - (this.size / 2);
                this.velocity.y *= -friction;

            }
        }
        // this.position.x = constrain(this.position.x, 0,width);
        // this.position.y = constrain(this.position.y, 0,height);
        /*
        if (this.age() > this.lifetime) {
          this.alive = 0;
        }
        */


    draw() {
        this.size = r;
        r = r + random(0.003, 0.005);

        if (isNoise) h = map(noise(hT), 0, 1, -100, 500);
        else h = random(360);
        s = map(noise(sT), 0, 1, 70, 120);
        b = map(noise(bT), 0, 1, 70, 120);

        noStroke();
        fill(h, s, b);
        ellipse(this.position.x, this.position.y, this.size, this.size);
        //rect(this.position.x, this.position.y,this.size,this.size);
        /*
              push();
            translate(this.position.x, this.position.y);
            rotate(millis()*0.001);
            beginShape();
            vertex(this.size/2,-this.size/2);
            vertex(this.size/2,this.size/2);
            vertex(-this.size/2,0);
            endShape(CLOSE);
            pop();
            */
    }

}

function keyPressed() {
    if (keyCode == 32) {
        isNoise = !isNoise;
    }
}

function keyPressed() {
    if (keyCode == 13) {
        background(255)
    }
}