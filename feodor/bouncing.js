
let ball
let HUE =0;
let SAT = 150
let reverse


function setup() {
var canvas = createCanvas(1080,720);
canvas.parent('p5sketch')
colorMode(HSB,360);
ball = new Balls()
background(0,350)
frameRate(120)


}

function draw() {




    HUE += 3.5
    if(HUE >= 360){HUE = 0}
    SAT += 1.23
    if(SAT >= 360){SAT = 100}


    ball.move()
    ball.display()
}


class Balls{
    constructor(){
        this.x = 500
        this.y = 500
        this.diameter = 10
        this.xspeed = 7;
        this.yspeed = 7;
    }
    move() {
        let change = random(0.5,5)*random(0.5,1.25)
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x >= width - this.diameter+1 || this.x <= this.diameter-1){
            this.xspeed = -this.xspeed;
            if(this.xspeed > 0){this.xspeed +=change}
            if(this.xspeed < 0){this.xspeed -=change}

            

            if(this.xspeed > 40){this.xspeed = random(-10,10)}
           // this.xspeed = this.xspeed * cos(random(PI *2))
           if(this.x > 1120 || this.x < -40){this.x=540}

        }
        if (this.y >= height - this.diameter+1 || this.y <= this.diameter-1) {
            this.yspeed = -this.yspeed ;
            if(this.yspeed > 0){this.yspeed +=change}
            if(this.yspeed < 0){this.yspeed -=change}

            

            if(this.yspeed > 40){this.yspeed = random(-10,10)}
          //  this.yspeed = this.yspeed * sin(random(PI *2))
            if(this.y > 760 || this.y < -40){this.y=370}
    
        }


      }
    
      display() {
        stroke(HUE,300,360)
        fill(HUE,300,360)
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
}