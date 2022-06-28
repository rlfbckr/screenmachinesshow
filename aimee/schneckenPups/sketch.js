let resolution = 200;
let radius = 100;
let noiseamp = 200;
let offset = 2;

function setup() {
    createCanvas(windowWidth, windowHeight); // Zeichenfläche
    noiseDetail(2.9, 0);
    background(255, 0, 0, 0); // hintergrundfarbe

}

function draw() {
    //hintergrund
    fill(200, 200, 255, 180);
    stroke(150, 200, 255, 180)


    beginShape();
    for (var angle = 0; angle < TWO_PI; angle += TWO_PI / resolution) {
        radius = 200 + (noise(millis() * 0.02) * 80);
        var noiseval = map(noise(250 + cos(angle + (millis() * 0.0002)), 100 + sin(angle + (millis() * 0.0002)), millis() * 0.003), 0, 2, -noiseamp, noiseamp);
        var x = (map(noise(millis() * 0.0002, 500), 0, 1, -100, 400) + (width / 3)) + (cos(angle) * (radius + noiseval));
        var y = (map(noise(millis() * 0.00002, 0), 0, 1, -200, 200) + (height / 3)) + (sin(angle) * (radius + noiseval));
        vertex(x, y);
    }
    endShape(CLOSE)
}