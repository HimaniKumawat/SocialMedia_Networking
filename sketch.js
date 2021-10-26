var r = 0;
var content1 = [];
content1 = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG'];
var content_arr=[];
var positiony = 0;
var positionx = 0;
var bg = 20;
var line_x1, line_y1, line_lengthx, line_lengthy = 0;
var x, y, radius,d = 0;
var r, g, b;
var m_size;
var info = false;

function preload(){
  content_arr[0]=loadImage(content1[0]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  // frameRate(5);
  positionx = windowWidth-windowWidth;
  var m = map(0,0,windowHeight,-5,100)
  positiony = windowHeight-windowHeight-m;
  //circular button
  x = windowWidth-100;
  y = 80;
  radius = 500;
  background(bg);
  translate(windowWidth/2,windowHeight/2)
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

  //set the starting color to a dark gray
  r = 50;
  g = 50;
  b = 50;
  strokeWeight(2);
}



function draw() {
  m_size = map(radius,0,windowWidth,100,30)
  // console.log(m_size)
  var m_xpos = map(windowWidth,0,windowWidth,windowWidth-10,windowWidth-160);
  var m_ypos = map(windowHeight,0,windowHeight,100,200);
  d = dist(mouseX, mouseY, m_xpos, m_ypos);
  //if the mouse is over the circle
  if (d < m_size) {
    //turn the fill on for 'mouse over' effect
    stroke(225);
    strokeWeight(9);
    fill(r,g,b);
    // console.log("over");
  }
  else{ //if it isn't over the circle
    //set the fill to (r,g,b) for 'mouse over' effect
    stroke(220);
    strokeWeight(1);
    fill(r,g,b);
  }

  ellipse(m_xpos, m_ypos, m_size, m_size);
  push();

  textSize(m_size-14);
  fill(255)
  strokeWeight(2)
  text("i",m_xpos-6,m_ypos+22)
  pop();
  console.log(info);
  // noLoop();
}

function mousePressed(){

  if (d < m_size) {
    // info=true;
    //set the red, green, and blue variables to a random value
    if(info == true){
      r = 50;
      g = 50;
      b = 50;
      info = false;
    }
    else if(info==false){
      r = 80;
      g = 80;
      b = 80;
      info = true;
    }
  }
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
