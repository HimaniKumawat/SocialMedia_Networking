var r = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  frameRate(5);
}

function draw() {
  background(20);
  // r = r + 0.1;
  translate(width/2,height/2)
  push();
  // console.log(r)
  rotate(r);
  polygon(0,0,350,8)
  pop();

  push();
  stroke(60);
  strokeWeight(2);
  rect(0,0,550,550)
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
