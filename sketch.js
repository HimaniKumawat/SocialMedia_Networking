var r = 0;
var content1 = [];
content1 = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG'];
var content_arr=[];

function preload(){
      content_arr[0]=loadImage(content1[0]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  frameRate(5);
}

function draw() {
  background(20);
  // r = r + 0.1;
  translate(width/2,height/2)
  push();
  // console.log(r)
  rotate(r);
  polygon(-100,-300,350,8)
  pop();

  push();
  image(content_arr[0],-100,-300,650,600);
  // stroke(60);
  // strokeWeight(2);
  // rect(0,0,550,550)
  pop();
  noLoop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);

    push();
    stroke(255);
    fill(255);
    line(sx,sy, sx+100, sy+500)
    pop();
  }
  endShape(CLOSE);
}
