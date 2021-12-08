var rotate_r = 0;
var cnv;
var clear_setup = false;
var content_misleading = [];
var content_corrected = [];
var background_images = [];

content_misleading = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/Headline_1.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/netflix_fake.jpg',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/plastic_fake.jpg',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/facebook_misleading.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/tourism_misleading.JPG'];

content_corrected = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/headline_1_fixed.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/newsheadline_fized.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/plastic.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/facebook_fixed.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/tourism_fixed.JPG'];

background_images = ['https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background1.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background2.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background3.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background4.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background5.JPG',
'https://raw.githubusercontent.com/HimaniKumawat/SocialMedia_Networking/main/Content/background6.JPG'];

var contentmis_arr=[];
var contentcor_arr=[];
var bg_imagesarr=[];
var bg = 20;
var line_x1, line_y1, line_lengthx, line_lengthy = 0;
var r, g, b;
var s = 0;
var img;
var info = false;
let button, reaction;
var radio;
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
var seconds_time = 120;  //seconds
var color_start = '#ffffff';
var arr_sx=[];
var arr_sy=[];
var highlight_circlex = 0;
var highlight_circley = 0;
var radio_selection = false;
var message = ["Misinformation can be in anyform. It can be content with misleading headlines or one sided infomration...","Information is turned and twisted to get more attention. Every like, comment or share spreads it to other people...", "Not just restricted to text, images can also be used to maniplulate your decisions, which is why 'thinking' before reacting is important...","Out of the 5 obvious options that were presented to you, before interacting with any of those you should always look at other sources and then decide whether to like, comment, share or report...","Ignoring doesn't spread the information but the best option to reduce the spread is to report whenever you come across one."]

function preload(){
  for(var c = 0; c<content_misleading.length; c++){
    contentmis_arr[c]=loadImage(content_misleading[c]);
  }
  for(var m = 0; m<content_corrected.length; m++){
    contentcor_arr[m]=loadImage(content_corrected[m]);
  }
  for(var bi = 0; bi<background_images.length; bi++){
    bg_imagesarr[bi]=loadImage(background_images[bi]);
  }

}

function network(){
  translate(windowWidth/2,windowHeight/2)
  push();
  rotate(rotate_r);
  structure_network(oct_posx,oct_posy, oct_size,8)
  pop();
}


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(bg);
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);

  initialize();

  if(clear_setup == false){

    background(bg);
    network();  //formatting
    img = contentmis_arr[0];

    //Reaction Buttons
    radio = createRadio();
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

    //timer button
    timer_button = createButton('Start')
    timer_button.position(timer_buttonx,timer_buttony)
    timer_button.size(timer_buttonsize,timer_buttonsize);
    timer_button.style('color','#222222')
    timer_button.style('font-size', timefont_size);
    timer_button.style('border-color', '#ffffff');
    timer_button.style('border-radius', timer_radius);
    timer_button.style('background-color', color_start);
    // timer_button.touchStarted(timer);
    timer_start = true;
    timer_button.mousePressed(timerCountdown);

    //Analysis button
    var col = color(r,g,b);
    button = createButton('Results Overview');
    button.position(timer_buttonx-60,timer_buttony+20);
    button.style('color','#ffffff')
    button.style('font-size', font_size)
    button.style('border-style', 'groove');
    button.style('border-color', '#ffffff');
    button.style('background-color', col);
    button.style('border-radius', ib_radius);
    button.size('200px','100px');
    button.hide();
    // if(radio.value() == 1){
    //   if(info == false){
    //     r = 50;
    //     g = 50;
    //     b = 50;
    //   }
    //   // button.touchStarted(infoButton);  //not working properly
    //   button.mousePressed(infoButton);
    // }
    // else{
    //   r = 120;
    //   b = 120;
    //   g = 120;
    //   info = false;
    // }

    //next post
    nextbutton = createButton('>');
    nextbutton.position(next_xpos+5,next_ypos);
    nextbutton.style('color','#ffffff')
    nextbutton.style('font-size', font_size)
    nextbutton.style('border-style', 'groove');
    nextbutton.style('border-color', '#ffffff');
    nextbutton.style('background-color', col);
    nextbutton.style('border-radius', '25px');
    nextbutton.size(infoButton_size,infoButton_size);
    nextbutton.mousePressed(imageChange);

    //next post
    prevbutton = createButton('<');
    prevbutton.position(next_xpos-60,next_ypos);
    prevbutton.style('color','#ffffff')
    prevbutton.style('font-size', font_size)
    prevbutton.style('border-style', 'groove');
    prevbutton.style('border-color', '#ffffff');
    prevbutton.style('background-color', col);
    prevbutton.style('border-radius', '25px');
    prevbutton.size(infoButton_size,infoButton_size);
    // prevbutton.mousePressed(previmageChange);

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
    nextbutton.style('border-radius','25px'); // ib_radius
    nextbutton.size(infoButton_size,infoButton_size);
    nextbutton.mousePressed(imageChange);
    pop();

    push();
    noFill();
    translate(windowWidth/2,windowHeight/2)
    stroke('white');
    // rotate(rotate_r);
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
        content_size = 290;
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
    // network();
    structure_network(oct_posx+50,oct_posy, oct_size,8)
    pop();
  }
}


function draw() {

  if(clear_setup == false){

    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx,oct_posy,content_size+30,content_size+20);
    pop();

      button.mousePressed(resultButton);

    d = dist(mouseX, mouseY, ib_xpos, ib_ypos);
    //Record the reaction and animation
    // if(radio.value() == 1){
    //   if(info == true){
    //     reaction = "More information";
    //   }
    //   else{
    //     reaction = "Ignore";
    //   }
    // }
    // else{
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
      else if(radio.value()==1){
        reaction = "Ignore";
      }
    // }

    // if(radio.value() == 1){
    //   if(info == false){
    //     r = 50;
    //     g = 50;
    //     b = 50;
    //     col = color(r,g,b);
    //     button.style('background-color', col);
    //   }
    //   // button.touchStarted(infoButton);  //not working properly
    //   button.mousePressed(infoButton);
    // }
    // else{
    //   r = 120;
    //   b = 120;
    //   g = 120;
    //   info = false;
    //   col = color(r,g,b);
    //   button.style('background-color', col);
    // }
    // console.log(reaction);


    if(s<=content_misleading.length){
      console.log(reaction_arr);
      // console.log(s);
      // if(radio.value() == 1){
      //   if(info == true){
      //     reaction_arr[s] = "More Information";
      //   }
      //   else{
      //     reaction_arr[s]="Ignore";
      //   }
      // }
      // else{
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
        else if(radio.value() == 1){
          reaction_arr[s]="Ignore";
        }
      // }
    }

    if(s==0){
      prevbutton.hide();
    }
    else{
      prevbutton.show();
      prevbutton.mousePressed(previmageChange);
    }

    if(radio.value() >= 1){

      // if(radio.value()>=1){
        highlight_circlex = 250;
        highlight_circley = 130;

      // }
      // else if (radio.value()==3) {
      //   highlight_circlex = arr_sx[radio.value()]+rx1+800;
      //   highlight_circley = arr_sy[radio.value()]+ry1+50;
      //
      //   fill(255);
      //   noStroke();
      //   text("i",highlight_circlex-5, highlight_circley+16);
      // }
      // else if (radio.value()==4) {
      //   highlight_circlex = arr_sx[radio.value()]+rx1+1000;
      //   highlight_circley = arr_sy[radio.value()]+ry1+500;
      //
      //   fill(255);
      //   noStroke();
      //   text("i",highlight_circlex-5, highlight_circley+16);
      // }
      var dis = dist(mouseX,mouseY,highlight_circlex, highlight_circley);
      if(dis < (r+5)/2){
        image(contentcor_arr[s],250,350,content_size+80,content_size+120);
      }
      else{
        fill(bg);
        noStroke();
        rect(250,350,content_size+80,content_size+120)
      }
      noFill();
    }
    else{
      noFill();
      noStroke();
    }
    fill(255,0,0);
    stroke(bg);
    ellipse(highlight_circlex, highlight_circley-12,timer_buttonsize,timer_buttonsize);

    fill(255);
    noStroke();
    text("i",highlight_circlex-5, highlight_circley+7);
    textSize(50);
    noStroke();
    fill(bg);
    rect(0,0,20,40)
    // console.log(radio_selection)
    if(radio_selection == true){
      radio.selected("1");
      radio_selection = false;
      // console.log(radio.selected())
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
      noStroke();
      // console.log(s);
      text(reaction_arr[space],-480, -yt+ space*gap)
      pop();
    }

    // console.log(dot);
    fill(255);
    ellipse(-510,-yt-8+ dot, 10,10) //highlights result reaction
    pop();
    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx+60,oct_posy+10,content_size+50,content_size+70);
    pop();

    // noFill();
    fill(bg);
    stroke(230);
    rect(400,450,300,220)
    fill(230);
    noStroke();
    textSize(20);
    textWrap(WORD);
    text(message[s],405,360,260)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function previmageChange(){
  s = s-2;
  // dot = dot - 36;
  imageChange()
  if(clear_setup==true){
    dot = dot-36;
  }
}

//Image change
function imageChange(){
  if(clear_setup == false){
    console.log("Image change");
    radio_selection = true;
    push();
    translate(windowWidth/2,windowHeight/2)
    bg_img = bg_imagesarr[int(random(0,bg_imagesarr.length))]
    image(bg_img,0,0,windowWidth,windowHeight);
    pop();

    s = s+1;
    img = contentmis_arr[s];
    if(s == contentmis_arr.length-1){
      button.show();
      nextbutton.hide();
      timer_button.hide();
      // resultButton();
    }
    else{
      nextbutton.show();
      timer_button.show();
      button.hide();
    }
  }
  else {
    // console.log("Image change Corrected");
    s = s+1;
    // console.log(s)
    dot = dot + 36;
    img = contentcor_arr[s];
    if(s == contentcor_arr.length-1){
      // s=0;
      nextbutton.hide();
      // dot = 0;
      img = contentcor_arr[s];
    }
  }
}

//result page
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
  if(timervalue>=0 && timer_start == true){
    var val = setInterval(function() {
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
        console.log("Timer end");
        clearInterval(val);
        // clear_setup = true;
        results();
        // clear_setup = true;
        // setup_run = true;
      }
    }, 1000);
  }
  else{
    console.log("else timer");
    // timer_start = false
    // results();
    // clear_setup = true;
  }
}

//Information button event
function resultButton(){
  results();
  clear_setup = true;
}

//network design behind post
function structure_network(x, y, radius, npoints) {
  // console.log("x- "+x+" y- "+y+" r- "+radius);

  let angle = TWO_PI / npoints;
  var num = 0
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;

    arr_sx[num]=sx;
    arr_sy[num]=sy;
    num++;

    vertex(sx, sy);
    stroke(120);
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
        if(highlight >= 3){
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

function initialize(){
  //responsive size
  var size_w = screen.width;
  var size_h = screen.height;
  if(size_w > 1200){//desktop
    if(size_h>1024){//big screens

    }
    else{ //tablets/ipad/desktop
      oct_size = 180;
      content_size = 270;
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
      ib_radius = '2px';
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
}
