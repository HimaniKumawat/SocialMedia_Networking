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
let button;
let radio;

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
  x = windowWidth-500;
  y = 80;
  radius = 500;
  background(bg);
  translate(windowWidth/2,windowHeight/2)
  push();
  // console.log(r)
  rotate(r);
  structure_network(positionx,positiony,350,8)
  pop();

  push();
  image(content_arr[0],positionx,positiony,650,600);
  pop();

  //Reaction Buttons
  radio = createRadio();
  radio.style('display', 'inline-block')
  radio.option(1, 'Ignore');
  radio.option(2, 'Like');
  radio.option(3, 'Comment');
  radio.option(4, 'Share');
  radio.style('width', 'windowWidth/2');
  radio.style('font-size', '45px')
  radio.style('height', 'windowHeight-100');
  radio.style('color','#ffffff')
  radio.style('border-color', '#ffffff')
  radio.position(windowWidth/2-250, windowHeight-200);

  //set the starting color to a dark gray
  r = 50;
  g = 50;
  b = 50;
  strokeWeight(2);
}



function draw() {
  m_size = map(radius,0,windowWidth,100,30)
  // console.log(m_size)
  var m_xpos = map(x,0,windowWidth,windowWidth-10,windowWidth-300);
  var m_ypos = map(0,0,windowHeight,150,200);


  //information button
  var col = color(r,g,b);
  button = createButton('i');
  button.position(m_xpos,m_ypos);
  button.style('color','#ffffff')
  button.style('font-size', '35px')
  button.style('border-style', 'groove');
  button.style('border-color', '#ffffff');
  button.style('background-color', col);
  button.style('border-radius', '12px');
  button.size(m_size,m_size);
  button.touchStarted(infoButton);
  button.mousePressed(infoButton); //Touch is not working properly because of this
}

//Information button event
function infoButton(){
  if (d < m_size) {
    if(r<=50){
      r = 80;
      g = 80;
      b = 80;
      info = true;
      // console.log("on");
    }
    else if(r>=50){
      r = 50;
      g = 50;
      b = 50;
      info = false;
      // console.log("off");
    }
  }
}

//network design behind post
function structure_network(x, y, radius, npoints) {
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
