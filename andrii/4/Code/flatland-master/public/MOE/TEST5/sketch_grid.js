/*
   global grid example
*/

var flatlandConfig = {
    server: "https://flatland.hfk-bremen.de",
    land: 'testland',
    updateIntervall: 30,
    spawnIntervall: 100,
    debug: false,
    clearscreen: false,
    backgroundcolor: [255, 255, 255],
    backgroundblend: 0.5
}

var machineConfig = {
    name: 'strukcture',
    maxCount: 5,
    minSize: 2,
    maxSize: 50,
    lifetime: 10000, // forever...!
    color1: [255, 0, 255],
    color1Opacity: 0.1,
    color2: [0, 255, 255],
    color2Opacity: 0.1,
    pendown: false
}



// ---------------------------------------------------------------
class Machine extends defaultMachine {
    setup() {

        this.setType(MachineType.CIRCLE);
        this.setSize(random(1, 10));
        this.setLifetime(1000);
        this.setStroke(random(255), random(255), random(255), 128);
        this.setFill(random(255), random(255), random(255), 128);
        this.setPenDown();

        this.xs = random(-0.01, 0.01);
        this.rad = random(30, 70);
        this.amplit = 20;
        this.milrandom = (1, 1000)

        this.myownvariable_centerx = grid[index].x;
        this.myownvariable_centery = grid[index].y;
        index = (index + 1) % grid.length;
    }
    move() {
        this.radik = random(100);
        // how does your machine move 
        if (this.radik <= 30) {
            this.setPosition(this.myownvariable_centerx + sin(millis() / 100) * this.milrandom % this.amplit,
                this.myownvariable_centery);
        } else if (this.radik <= 60 && this.radik >= 30) {
            this.setPosition(this.myownvariable_centerx + 15 + sin(millis() / this.milrandom % this.amplit),
                this.myownvariable_centery + sin(millis() * this.xs) * this.rad);

        } else {
            this.setPosition(this.myownvariable_centerx + 30 + sin(millis() / this.milrandom % this.amplit),

                this.myownvariable_centery + sin(millis() * this.xs) * this.rad);

        }


    }
}
// --------------------------------------------------------------



let gui;
let flatland;

// my own  gloabal variables
let index = 0;
let grid = [];
let maxpoints = 15; // wieviele punkte
let margin = 200; // wieviel rand (open, unten, rechts, links)

// local stuff
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // create a global grid 
    for (var y = 0; y < maxpoints; y++) {
        for (var x = 0; x < maxpoints; x++) {
            var v = createVector(
                map(x, 0, maxpoints - 1, -(width / 3.5) + margin, (width / 3.5) - margin),
                map(y, 0, maxpoints - 1, -(height / 2) + margin, (height / 2) - margin)
            );
            console.log(v.x + ' ' + v.y);
            grid.push(v);
        }
    }
    machineConfig.maxCount = grid.length;

    flatland = new Flatland(); // connect to the flatland server
    initGui();
    initSocketIO(flatlandConfig.server);
}

function draw() {
    flatland.update(); // update + draw flatland

}