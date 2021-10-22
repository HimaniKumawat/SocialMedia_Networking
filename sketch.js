function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(20);
  translate(width/2,height/2)
  push();
  rotate(-60);
  polygon(0,0,300,5)
  pop();
  
  stroke(60);
  strokeWeight(2);
  rect(0,-15,200,200)
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