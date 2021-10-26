var r = 0;
var content1 = [];
content1 = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG'];
var content_arr=[];
var positiony = 0;
var positionx = 0;
var bg = 20;
var line_x1, line_y1, line_lengthx, line_lengthy = 0;
function preload(){
      content_arr[0]=loadImage(content1[0]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  frameRate(5);
  positionx = width-width-50;
  positiony = height-height-300;
}

function draw() {
  background(bg);
  // r = r + 0.1;
  translate(width/2,height/2)
  push();
  // console.log(r)
  rotate(r);
  polygon(positionx,positiony,350,8)
  pop();

  push();
  image(content_arr[0],positionx,positiony,650,600);
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
    console.log("sx= "+sx+" sy= "+sy);

    stroke(255);
    fill(255);
    if(sx<0 && sy<0){
      rx1 = random(10,-150);
      ry1 = random(0,-150);
      r = random(100,250)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx<0 && sy>0){
      rx1 = random(70,-100);
      ry1 = random(20,200);
      r = random(100,250)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy>0){
      console.log(sx + " "+ sy)
      rx1 = random(70,200);
      ry1 = random(20,200);
      r = random(100,250)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy<0){
      rx1 = random(90,200);
      ry1 = random(50,-200);
      r = random(100,250)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
  }
  endShape(CLOSE);
}

// function network(x1,y1,vertex_a){
//   push();
//   fill(bg)
//   var r = random(150,200);
//   ellipse(x1+105, y1+410,r,r);
//   line_x1= x1+100+r/2;
//   line_y1=y1+410+r/2;
//   // for(var j = 0; j < random(4,9); j++){
//   //
//   //     line(line_x1,line_y1, x1+line_lengthx, y1+line_lengthy);
//   //     line_lengthx = random(95,150);
//   //     line_lengthy = random(500,550);
//   //     var r2 = random(20,50);
//   //     ellipse(x1+line_lengthx,y1+line_lengthy,r2,r2);
//   // }
// pop();
// }
