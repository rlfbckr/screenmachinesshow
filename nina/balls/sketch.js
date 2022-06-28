var bugs = [];

function setup() {
    //   createCanvas(750, 500);
    createCanvas(windowWidth, windowHeight);

    // Create objects
    for (var i = 0; i < 50; i++) {
        bugs.push(new Jitter());
    }
}

function draw() {
    background(255, 0);
    for (var i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
    }
}


function Jitter() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 70);

    this.speed = 2;

    this.move = function() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

    this.display = function() {
        noStroke();

        fill(random(160), random(255), random(255));
        ellipse(this.x - 12, this.y + 19, this.diameter, this.diameter);

    }
}