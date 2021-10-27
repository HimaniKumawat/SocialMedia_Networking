var r = 0;
var content1 = [];
content1 = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG'];
var content_arr=[];
var bg = 20;
var line_x1, line_y1, line_lengthx, line_lengthy = 0;
var r, g, b;
var info = false;
let button, radio;
var font_size;
var infoButton_size, ib_radius, ib_xpos, ib_ypos, d;
var oct_size, content_size;
var min_csize, max_csize;
var oct_posx, oct_posy;
var button_posy, button_posx;

//responsive size
var size_w = screen.width;
var size_h = screen.height;
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
    oct_size = 300;
    content_size = 500;
    min_csize = 80;
    max_csize = 190;
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

  //Responsive position
  if(size_w > 1200){//desktop
    if(size_h>1024){//big screens

    }
    else{ //tablets/ipad/desktop
        oct_posx = windowWidth-windowWidth;
        oct_posy = windowHeight-windowHeight-60;
        button_posy = windowHeight-120;
        button_posx = windowWidth/2-170;
        font_size = '24px';
        infoButton_size = 50;
        ib_radius = '25px'
        ib_xpos = windowWidth - 400;
        ib_ypos = windowHeight - windowHeight+80;
    }
  }
  else if(size_w < 1200){
    if(size_h>1024){//ipad

    }
    else{//phones
      oct_posx = windowWidth-windowWidth;
      oct_posy = windowHeight-windowHeight-170;
      button_posy = windowHeight-300;
      button_posx = windowWidth/2-295;
      font_size = '50px';
      infoButton_size = 60;
      ib_radius = '40px';
      ib_xpos = windowWidth - 200;
      ib_ypos = windowHeight - windowHeight+100;
    }
  }

  background(bg);
  translate(windowWidth/2,windowHeight/2)
  push();
  rotate(r);
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
  radio.style('font-size', font_size)
  radio.style('checked','2');
  radio.style('color','#ffffff')
  radio.style('border-color', '#ffffff')
  radio.position(button_posx, button_posy);
  radio.selected('1');

  //info button color
  r = 50;
  g = 50;
  b = 50;
  strokeWeight(2);
}


function draw() {

  d = dist(mouseX, mouseY, ib_xpos, ib_ypos);

  //information button
  var col = color(r,g,b);
  button = createButton('i');
  button.position(ib_xpos,ib_ypos);
  button.style('color','#ffffff')
  button.style('font-size', font_size)
  button.style('border-style', 'groove');
  button.style('border-color', '#ffffff');
  button.style('background-color', col);
  button.style('border-radius', ib_radius);
  button.size(infoButton_size,infoButton_size);
  button.touchStarted(infoButton);
  button.mousePressed(infoButton);

//Record the reaction and animation
  var reaction = radio.value();
  // console.log(reaction);
  // if(reaction == 2){
  //   // console.log('Like');
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Information button event
function infoButton(){
  if (d < infoButton_size) {
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
