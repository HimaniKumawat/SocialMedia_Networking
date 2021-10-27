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
var radio;
var font_size;
var infoButton_size, b_radius, b_xpos, b_ypos;
var oct_size;
var content_size;
var min_csize;
var max_csize;
var oct_posx;
var oct_posy;
var button_posy;
var button_posx;

//responsive
var size_w = screen.width;
var size_h = screen.height;
// console.log("w "+size_w+" h "+size_h);
if(size_w > 1200){//desktop
  if(size_h>1024){//big screens

  }
  else{ //tablets/ipad/desktop
      oct_size = 150;
      content_size = 250;
      min_csize = 50;
      max_csize = 100;
  }
}
else if(size_w < 1200){
  if(size_h>1024){//ipad

  }
  else{//phones
    oct_size = 280;
    content_size = 450;
    min_csize = 80;
    max_csize = 170;
  }
}

function preload(){
  content_arr[0]=loadImage(content1[0]);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
  if(size_w > 1200){//desktop
    if(size_h>1024){//big screens

    }
    else{ //tablets/ipad/desktop
        oct_posx = windowWidth-windowWidth;
        oct_posy = windowHeight-windowHeight-105;
        button_posy = windowHeight-140;
        button_posx = windowWidth/2-170;
        font_size = '24px';
        infoButton_size = 50;
        b_radius = '25px'
    }
  }
  else if(size_w < 1200){
    if(size_h>1024){//ipad

    }
    else{//phones
      oct_posx = windowWidth-windowWidth;
      oct_posy = windowHeight-windowHeight-170;
      button_posy = windowHeight-300;
      button_posx = windowWidth/2-170;
      font_size = '20px';
      infoButton_size = 60;
      b_radius = '30px';
      b_xpos = windowWidth - 200;
      b_ypos = windowHeight - windowHeight+100;
    }
  }
  //info button
  x = windowWidth-500;
  y = 80;
  radius = 100;
  background(bg);
  translate(windowWidth/2,windowHeight/2)
  push();

  rotate(r);
  // var s_size = map(width,width,10,4,5)
  // console.log(s_size)
  structure_network(oct_posx,oct_posy, oct_size,8)
  pop();

  push();
  image(content_arr[0],oct_posx,oct_posy,content_size+18,content_size);
  pop();

  //Reaction Buttons
  radio = createRadio();
  // radio.class("radioButton");
  // radio.style('display', 'inline-block')
  radio.option(1, 'Ignore');
  radio.option(2, 'Like');
  radio.option(3, 'Comment');
  radio.option(4, 'Share');
  // // radio.style('width', 'windowWidth/2');
  radio.style('font-size', font_size)
  radio.style('checked','2');
  radio.style('color','#ffffff')
  radio.style('border-color', '#ffffff')
  radio.position(button_posx, button_posy);
  radio.selected('1');

  //set the starting color to a dark gray
  r = 50;
  g = 50;
  b = 50;
  strokeWeight(2);
}


function draw() {
  m_size = map(windowWidth,0,1800,100,200);
  // console.log(m_size)
  var m_xpos = map(x,0,windowWidth,windowWidth-10,windowWidth-300);
  var m_ypos = map(0,0,windowHeight,80,170);

  //information button
  var col = color(r,g,b);
  button = createButton('i');
  button.position(b_xpos,b_ypos);
  button.style('color','#ffffff')
  button.style('font-size', font_size)
  button.style('border-style', 'groove');
  button.style('border-color', '#ffffff');
  button.style('background-color', col);
  button.style('border-radius', b_radius);
  button.size(infoButton_size,infoButton_size);
  button.touchStarted(infoButton);
  button.mousePressed(infoButton); //Touch is not working properly because of this

  // console.log(radio.selected())
  var reaction = radio.value();
  // console.log(reaction);
  if(reaction == 2){
    console.log('Like');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Information button event
function infoButton(){
  if (d < m_size) {
    if(info == false){
      r = 80;
      g = 80;
      b = 80;
      info = true;
      // console.log("on");
    }
    else if(info == true){
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
    // console.log("sx= "+sx+" sy= "+sy);

    stroke(255);
    fill(255);
    if(sx<0 && sy<0){
      rx1 = random(10,-150);
      ry1 = random(0,-100);
      r = random(min_csize-5,max_csize)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx<0 && sy>0){
      rx1 = random(70,-150);
      ry1 = random(20,150);
      r = random(min_csize-5,max_csize+2)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy>0){
      // console.log(sx + " "+ sy)
      rx1 = random(70,100);
      ry1 = random(20,150);
      r = random(min_csize+20,max_csize-5)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy<0){
      rx1 = random(90,150);
      ry1 = random(50,-30);
      r = random(min_csize+10,max_csize-5)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
  }
  endShape(CLOSE);
}
