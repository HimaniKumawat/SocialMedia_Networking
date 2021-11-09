var r = 0;
var cnv;
var clear_setup = false;
var content_misleading = [];
var content_corrected = [];
content_misleading = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/WhatsApp%20Image%202021-10-29%20at%2012.42.52%20PM.jpeg',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/netflix_fake.jpg',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/plastic_fake.jpg'];
content_corrected = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/headline_1_fixed.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/left_right_center.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/newsheadline_fized.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/plastic.JPG']
var contentmis_arr=[];
var contentcor_arr=[];
var bg = 20;
var line_x1, line_y1, line_lengthx, line_lengthy = 0;
var r, g, b;
var s = 0;
var img;
var info = false;
let button, radio, reaction;
var reaction_arr = [];
var font_size;
var infoButton_size, ib_radius, ib_xpos, ib_ypos, d;
var oct_size, content_size;
var min_csize, max_csize;
var oct_posx, oct_posy;
var button_posy, button_posx, stroke_arc, arc_size;
var timer_buttonx, timer_buttony, timer_button,count1, count, seconds, timefont_size, timer_radius;
var timeline = 1;
var timer_start = false;
var timervalue = 0;
var seconds_time = 60;
var color_start = '#ffffff';



function preload(){
  for(var c = 0; c<content_misleading.length; c++){
    contentmis_arr[c]=loadImage(content_misleading[c]);
  }
  for(var m = 0; m<content_corrected.length; m++){
    contentcor_arr[m]=loadImage(content_corrected[m]);
  }

}

function setup() {

  cnv = createCanvas(windowWidth, windowHeight);
  background(bg);
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);
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

  if(size_w > 1200){//desktop
    if(size_h>1024){//big screens

    }
    else{ //tablets/ipad/desktop
      oct_posx = windowWidth-windowWidth;
      oct_posy = windowHeight-windowHeight-60;
      button_posy = windowHeight-120;
      button_posx = windowWidth/2-220;
      font_size = '24px';
      infoButton_size = 50;
      ib_radius = '25px';
      ib_xpos =  250;
      ib_ypos = windowHeight - windowHeight+80;
      timer_buttonx = windowWidth - 350;
      timer_buttony = windowHeight - windowHeight+80;
      timefont_size = '22px';
      timer_radius = '50px';
      timer_buttonsize = infoButton_size+20;
      arc_posx=timer_buttonx+35;
      arc_posy= timer_buttony+35;
      stroke_arc = 3;
      arc_size = timer_buttonsize+20;
      next_xpos = windowWidth - 345;
      next_ypos = windowHeight - 440;
    }
  }
  else if(size_w < 1200){
    if(size_h>1024){//ipad

    }
    else{//phones
      oct_posx = windowWidth-windowWidth;
      oct_posy = windowHeight-windowHeight-100;
      button_posy = windowHeight-300;
      button_posx = windowWidth/2-400;
      font_size = '45px';
      infoButton_size = 60;
      ib_radius = '40px';
      ib_xpos = 150;
      ib_ypos = windowHeight - windowHeight+150;
      timer_buttonx = windowWidth - 300;
      timer_buttony = windowHeight - windowHeight+120;
      timefont_size = '42px';
      timer_radius = '60px';
      timer_buttonsize = infoButton_size+60;
      arc_posx=timer_buttonx+60;
      arc_posy= timer_buttony+60;
      stroke_arc = 5;
      arc_size = timer_buttonsize+40;
      next_xpos = windowWidth - 200;
      next_ypos = windowHeight - 1000;
    }
  }

  // console.log(oct_size, size_h)
  // frameRate(60);
  if(clear_setup == false){
    //Responsive position
    background(bg);
    translate(windowWidth/2,windowHeight/2)
    push();
    rotate(r);
    structure_network(oct_posx,oct_posy, oct_size,8)
    pop();
    img = contentmis_arr[0];


    //Reaction Buttons
    radio = createRadio();
    // radio.class("radioButton");
    // radio.style('display', 'inline-block')
    radio.option(1, 'Ignore');
    radio.option(2, 'Like');
    radio.option(3, 'Comment');
    radio.option(4, 'Share');
    radio.option(5, 'Report');
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
    angleMode(DEGREES)

    timer_button = createButton('Start')
    timer_button.position(timer_buttonx,timer_buttony)
    timer_button.size(timer_buttonsize,timer_buttonsize);
    timer_button.style('color','#222222')
    timer_button.style('font-size', timefont_size);
    timer_button.style('border-color', '#ffffff');
    timer_button.style('border-radius', timer_radius);
    timer_button.style('background-color', color_start);
    // timer_button.touchStarted(timer);
    timer_button.mousePressed(timerCountdown);
    // console.log(timer_start);

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

    if(radio.value() == 1){
      if(info == false){
        r = 50;
        g = 50;
        b = 50;
      }
      // button.touchStarted(infoButton);  //not working properly
      button.mousePressed(infoButton);
    }
    else{
      r = 120;
      b = 120;
      g = 120;
      info = false;
    }

    nextbutton = createButton('>');
    nextbutton.position(next_xpos,next_ypos);
    nextbutton.style('color','#ffffff')
    nextbutton.style('font-size', font_size)
    nextbutton.style('border-style', 'groove');
    nextbutton.style('border-color', '#ffffff');
    nextbutton.style('background-color', col);
    nextbutton.style('border-radius', ib_radius);
    nextbutton.size(infoButton_size,infoButton_size);
    nextbutton.mousePressed(imageChange);

  }
  else{
    push();
    background(bg);
    translate(windowWidth/2,windowHeight/2)
    s = 0;
    dot = 0;
    img = contentcor_arr[0];
    r,g,b = 50;
    col = color(r,g,b);
    nextbutton = createButton('>');
    nextbutton.position(next_xpos,next_ypos);
    nextbutton.style('color','#ffffff')
    nextbutton.style('font-size', font_size)
    nextbutton.style('border-style', 'groove');
    nextbutton.style('border-color', '#ffffff');
    nextbutton.style('background-color', col);
    nextbutton.style('border-radius', ib_radius);
    nextbutton.size(infoButton_size,infoButton_size);
    nextbutton.mousePressed(imageChange);
    pop();

    // push();
    // rotate(r);
    // console.log("setup results");
    // angleMode(RADIANS);
    // structure_network(oct_posx,oct_posy, oct_size,8)
    // pop();


    push();
    noFill();
    translate(windowWidth/2,windowHeight/2)
    stroke('white');
    rotate(r);
    // a=0;
    angleMode(RADIANS);
    console.log("Draw Network");

    //responsive size
    var size_w = screen.width;
    var size_h = screen.height;
    if(size_w > 1200){//desktop
      if(size_h>1024){//big screens

      }
      else{ //tablets/ipad/desktop
        oct_size = 190;
        content_size = 250;
        min_csize = 50;
        max_csize = 100;
        font_size = 20;
        gap = 35;
        yt = 200;
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
        font_size = 50;
        gap = 65;
        yt = 130;
      }
    }
    structure_network(oct_posx,oct_posy, oct_size,8);
    pop();
  }
}


function draw() {

  if(clear_setup == false){
    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx,oct_posy,content_size+18,content_size);
    pop();

    d = dist(mouseX, mouseY, ib_xpos, ib_ypos);
    //Record the reaction and animation
    if(radio.value() == 1){
      if(info == true){
        reaction = "More information";
      }
      else{
        reaction = "Ignore";
      }
    }
    else{
      if(radio.value()==2){
        reaction = "Like";
      }
      else if(radio.value()==3){
        reaction = "Comment";
      }
      else if(radio.value()==4){
        reaction = "Share";
      }
      else if(radio.value()==5){
        reaction = "Report";
      }
    }

    if(radio.value() == 1){
      if(info == false){
        r = 50;
        g = 50;
        b = 50;
        col = color(r,g,b);
        button.style('background-color', col);
      }
      // button.touchStarted(infoButton);  //not working properly
      button.mousePressed(infoButton);
    }
    else{
      r = 120;
      b = 120;
      g = 120;
      info = false;
      col = color(r,g,b);
      button.style('background-color', col);
    }
    // console.log(reaction);


    if(s<=content_misleading.length){
      // console.log(reaction_arr);
      // console.log(s);
      if(radio.value() == 1){
        if(info == true){
          reaction_arr[s] = "More Information";
        }
        else{
          reaction_arr[s]="Ignore";
        }
      }
      else{
        if(radio.value() == 2){
          reaction_arr[s]="Like";
        }
        else if(radio.value() == 3){
          reaction_arr[s]="Comment";
        }
        else if(radio.value() == 4){
          reaction_arr[s]="Share";
        }
        else if(radio.value() == 5){
          reaction_arr[s]="Report";
        }
      }
    }
  }
  else{
    // clear();
    push();
    translate(windowWidth/2,windowHeight/2)
    clear_setup = true;
    if(setup_run == true){
    setup();
    console.log("Run setup");
    setup_run = false;
    }

    button.hide();
    timer_button.hide();
    // nextbutton.hide();
    radio.hide();
    // console.log(reaction_arr);

    for(var space = 0; space<content_misleading.length; space++){
      push();
      fill(240);
      textSize(font_size)
      // console.log(s);
      text(reaction_arr[space],-400, -yt+ space*gap)
      pop();
    }

    // console.log(dot);
    ellipse(-420,-yt-8+ dot, 10,10)
    pop();
    // image(contentcor_arr[0],-300,-150,250,250);
    // image(contentcor_arr[1],-300,150,250,250);

    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx+50,oct_posy+20,content_size+50,content_size+55);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//image change
function imageChange(){
    if(clear_setup == false){
  console.log("Image change");
  s = s+1;
  img = contentmis_arr[s];
  if(s == contentmis_arr.length){
    results();
    clear_setup = true;
  }
}
else {
  // console.log("Image change Corrected");
  s = s+1;
  // console.log(s)
  dot = dot + 36;
  img = contentcor_arr[s];
  if(s == contentcor_arr.length){
    s=0;
    dot = 0;
    img = contentcor_arr[s];
  }
}
}

function results(){
  // noLoop();
  console.log("results");
  // redraw();
  // cnv.reset();
  // clear();
  clear_setup = true;
  setup_run = true;
  // console.log("Results");
}
//timer
function timerCountdown() {
  color_start = '#222222';
  timer_button.style('background-color', color_start);
  timer_start = true;
  setInterval(function() {
    if (timervalue < seconds_time) {
      timervalue++;
      // console.log(timervalue);
      seconds = map(timervalue,0,seconds_time,0,360);
      push();
      stroke('white')
      strokeWeight(stroke_arc)
      noFill();
      arc(arc_posx,arc_posy,arc_size,arc_size,0,seconds);
      pop();
    }else{
      timer_start = false;
    }
  }, 1000);
}

//Information button event
function infoButton(){

  if (d < infoButton_size) {
    if(info == false){
      r = 80;
      g = 80;
      b = 80;
      info = true;
      console.log(info+" on");
    }
    else if(info == true){
      r = 50;
      g = 50;
      b = 50;
      info = false;
      console.log(info+ "off");
    }
  }
  col = color(r,g,b);
  button.style('background-color', col);
}

//network design behind post
function structure_network(x, y, radius, npoints) {

  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    // console.log(sx);
    vertex(sx, sy);
    stroke(160);
    fill(255);
    if(sx<0 && sy<0){
      rx1 = random(10,-150);
      ry1 = random(0,-100);
      r = random(min_csize-5,max_csize)
      line(sx,sy,sx+rx1,sy+ry1);
      push();
      if(clear_setup == true){
        var highlight = int(random(0,5));
        if(highlight <= 3){
          stroke(random(210,255));
          noFill();
          ellipse(sx+rx1-5, sy+ry1-10,r+15,r+15);
        }
      }
      pop();
      fill(bg);
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx<0 && sy>0){
      rx1 = random(70,-150);
      ry1 = random(20,150);
      r = random(min_csize-5,max_csize+2)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      push();
      if(clear_setup == true){
        var highlight = int(random(0,5));
        if(highlight >= 2){
          stroke(random(210,255));
          noFill();
          ellipse(sx+rx1-5, sy+ry1-10,r+9,r+9);
        }
      }
      pop();
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy>0){
      // console.log(sx + " "+ sy)
      rx1 = random(70,100);
      ry1 = random(20,150);
      r = random(min_csize+20,max_csize-5)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      push();
      if(clear_setup == true){
        var highlight = int(random(0,5));
        if(highlight >= 3){
          stroke(random(210,255));
          noFill();
          ellipse(sx+rx1-5, sy+ry1-10,r+10,r+10);
        }
      }
      pop();
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
    else if(sx>0 && sy<0){
      rx1 = random(90,150);
      ry1 = random(50,-30);
      r = random(min_csize+10,max_csize-5)
      line(sx,sy,sx+rx1,sy+ry1);
      fill(bg);
      push();
      if(clear_setup == true){
        var highlight = int(random(0,5));
        if(highlight <= 3){
          stroke(255);
          noFill();
          ellipse(sx+rx1-5, sy+ry1-10,r+17,r+17);
        }
      }
      pop();
      ellipse(sx+rx1-5, sy+ry1-10,r,r);
    }
  }
  endShape(CLOSE);
}
