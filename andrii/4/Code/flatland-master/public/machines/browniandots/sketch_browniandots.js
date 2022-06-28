/*
   Brownian.dot Machine Demo
*/

var flatlandConfig = {
    server: "https://flatland.hfk-bremen.de",
    land: 'default',
    updateIntervall: 40,
    spawnIntervall: 1000,
    debug: true,
    clearscreen: true,
    backgroundcolor: [255, 255, 255],
    backgroundblend: 0.5
}

var machineConfig = {
    name: 'browniandots',
    maxCount: 100,
    minSize: 20,
    maxSize: 150,
    lifetime: 10000,
    color1: [0, 0, 255],
    color1Opacity: 0.1,
    color2: [255, 255, 0],
    color2Opacity: 0.1,
    pendown: true
    

}

class Machine extends defaultMachine {
    setup() {
        // initialize your machine
        this.noix = random(0,1000);
        this.noiy = random(0,1000);
        this.speed = random(2,6);
         this.setPenDown();
        this.setType(MachineType.RECT);
        this.setStroke(255, 255, 255,0);
        this.setLifetime(random(0,machineConfig.lifetime));
    }
    move() {
        // how does your machine move 
        this.setFill(
            lerp(machineConfig.color2[0], machineConfig.color1[0], this.getLifetime()),
            lerp(machineConfig.color2[1], machineConfig.color1[1], this.getLifetime()),
            lerp(machineConfig.color2[2], machineConfig.color1[2], this.getLifetime())
        );
        this.setRotation( PI+random(-0.3,0.3) );
        this.setPosition(this.pos.x + map(noise(this.noix+frameRate()/100),1,0,-5,5), this.pos.y + map(noise(this.noiy+frameRate()/100),1,0,-1,1));
        this.setSize(map(this.age(), 0, machineConfig.lifetime, machineConfig.maxSize, machineConfig.minSize));

    }

}
// --------------------------------------------------------------
//let socket
let gui;
let flatland;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    flatland = new Flatland(); // connect to the flatland server
    initGui();
    initSocketIO(flatlandConfig.server);
}
function draw() {
    flatland.update(); // update + draw flatland
}
