let mousey;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  frameRate(300);
}
function draw() {
  background(20);
  noStroke();
  fill(random(0, 255), random(100), random(160), random(125, 255));

  let spacing = map(mouseX, 0, windowWidth, 10, 100);
  for (let x = 10; x < width; x += spacing) {
    for (let y = 10; y < height; y += spacing) {
      circle(x, y, random(2, 20));
    }
  }
}
