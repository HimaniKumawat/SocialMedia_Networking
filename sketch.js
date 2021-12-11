var rotate_r = 0;
var cnv;
var clear_setup = false;
var content_misleading = [];       //Content images
var content_corrected = [];        //Corrected content images
var background_images = [];        //Background images

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
var message = ["Misinformation can be in anyform. It can be content with misleading headlines or one sided information...","Information is turned and twisted to get more attention. Every like, comment or share spreads it to other people...", "Not just restricted to text, images can also be used to maniplulate your decisions, which is why 'thinking' before reacting is important...","Out of the 5 obvious options that were presented to you, before interacting with any of those you should always look at other sources and then decide whether to like, comment, share or report...","Ignoring doesn't spread the information but the best option to reduce the spread is to report whenever you come across one."]


//Preload all the images
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


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(bg);
  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);

  initialize(); //Defining all the variables

  if(clear_setup == false){   //Activity screens

    background(bg);
    network();  //formatting
    img = contentmis_arr[0];

    //Reaction Radio Buttons
    radio = createRadio("Radio");
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

    //next/previous button color
    r = 50;
    g = 50;
    b = 50;
    strokeWeight(2);
    angleMode(DEGREES)

    //timer button - Start
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


    //next post button
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

    //previous post button
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
  else{   //Analysis page
    push();
    background(bg);
    translate(windowWidth/2,windowHeight/2)
    s = 0;                                        //Post image counter
    dot = 0;                                      //Reaction marker
    img = contentcor_arr[0];
    r,g,b = 50;
    col = color(r,g,b);

    //Next button
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
    stroke(180);
    angleMode(RADIANS);
    // console.log("Draw Network");

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

    //image formatting
    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx,oct_posy,content_size+30,content_size+20);
    pop();

    button.mousePressed(resultButton);      //Result overview

    d = dist(mouseX, mouseY, ib_xpos, ib_ypos);       //for hover effect


    //Record the reaction
    if(s<=content_misleading.length){
      // console.log(reaction_arr);
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

    if(s==0){             //First post
      prevbutton.hide();
    }
    else{
      prevbutton.show();
      prevbutton.mousePressed(previmageChange);
    }

    //More information button formatting
    if(radio.value() >= 1){
      highlight_circlex = next_xpos+30;
      highlight_circley = windowHeight - windowHeight+280;

      noFill();
      stroke(bg)
      ellipse(highlight_circlex, highlight_circley-12,timer_buttonsize+10,timer_buttonsize+10);

      if (radio.value()>=2 && radio.value()<=4) {        //highlight
        noFill();
        stroke(255)
        ellipse(highlight_circlex, highlight_circley-12,timer_buttonsize+10,timer_buttonsize+10);
      }
      else{
        noFill();
        stroke(bg)
        ellipse(highlight_circlex, highlight_circley-12,timer_buttonsize+10,timer_buttonsize+10);
      }

      var dis = dist(mouseX,mouseY,highlight_circlex, highlight_circley);
      if(dis < (r+5)/2){      //Hover effect
        image(contentcor_arr[s],windowWidth - 1286,windowHeight-391,content_size+80,content_size+120);      //hover image
      }
      else{
        fill(bg);
        noStroke();
        rect(windowWidth - 1286,windowHeight-391,content_size+80,content_size+120)
      }
      noFill();
    }
    else{
      noFill();
      noStroke();
    }

    fill(255,0,0);
    stroke(bg);
    ellipse(highlight_circlex, highlight_circley-12,timer_buttonsize,timer_buttonsize);    //More information button

    fill(255);
    noStroke();
    textSize(50);
    text("i",highlight_circlex-5, highlight_circley+7);
    noStroke();
    fill(bg);
    rect(0,0,20,40)

    fill(200);
    noStroke();
    textSize(12)
    text("Hover for more information!",highlight_circlex+100, highlight_circley-25,100);

    fill(200);
    noStroke();
    textSize(12)
    text("Click to start the timer!",highlight_circlex+ 90, highlight_circley-178,80);

    if(timervalue > 0){
      fill(bg);
      noStroke();
      rect(highlight_circlex+1075, highlight_circley-25,80,80);
      fill(200);
      text("Timer Started!",highlight_circlex+1075, highlight_circley-20,80);
    }

    if(s == contentmis_arr.length-1){
      fill(bg);
      noStroke();
      rect(highlight_circlex+1075, highlight_circley-25,80,80);
    }

    //Clearing radio selections after every image change
    if(radio_selection == true){
      var ele = document.getElementsByName("Radio");
      // console.log(ele);
      for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
      }
      radio_selection = false;
    }

  }
  else{                                        //Analysis page
    // clear();
    push();
    translate(windowWidth/2,windowHeight/2)
    clear_setup = true;

    //Reset setup and run
    if(setup_run == true){
      setup();
      console.log("Run setup");
      setup_run = false;
    }

    //Hide all the buttons
    button.hide();
    timer_button.hide();
    radio.hide();
    // console.log(reaction_arr);

    //Show all the user reactions
    for(var space = 0; space<content_misleading.length; space++){
      push();
      fill(240);
      textSize(font_size)
      noStroke();
      text(reaction_arr[space],-480, -yt+ space*gap)
      pop();
    }

    // console.log(dot);
    fill(255);
    ellipse(-510,-yt-8+ dot, 10,10)         //highlights result reaction
    pop();
    push();
    translate(windowWidth/2,windowHeight/2)
    image(img,oct_posx+60,oct_posy+10,content_size+50,content_size+70);
    pop();

    // Message box
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


//Image change
function imageChange(){
  if(clear_setup == false){
    // console.log("Image change");
    radio_selection = true;                //clear radio selections
    push();
    translate(windowWidth/2,windowHeight/2)
    bg_img = bg_imagesarr[int(random(0,bg_imagesarr.length))]  //Background image
    image(bg_img,0,0,windowWidth,windowHeight);
    pop();

    s = s+1;
    img = contentmis_arr[s];
    if(s == contentmis_arr.length-1){        //Hiding next button in last post

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
    s = s+1;
    dot = dot + 36;
    img = contentcor_arr[s];

    //End text
    if(s == contentcor_arr.length-1){
      nextbutton.hide();
      noFill();
      stroke(190)
      rect(windowWidth-300,windowHeight-415,80,30)
      text("END",windowWidth-320,windowHeight-408)
      img = contentcor_arr[s];
    }
    else{
      fill(bg);
      noStroke();
      rect(windowWidth-300,windowHeight-415,90,40)
      nextbutton.show();
    }
  }
}


//Previous image function
function previmageChange(){
  s = s-2;
  imageChange()
  if(clear_setup==true){
    dot = dot-72;
  }
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
      }
      else{
        timer_start = false;
        console.log("Timer end");
        clearInterval(val);
        results();
      }
    }, 1000);
  }
}


//network design behind post
function structure_network(x, y, radius, npoints) {
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

    //Circles and lines from each vertex
    if(sx<0 && sy<0){
      rx1 = random(10,-90);
      ry1 = random(0,-70);
      r = random(min_csize-5,max_csize-2)
      line(sx,sy,sx+rx1,sy+ry1);
      push();
      if(clear_setup == true){
        var highlight = int(random(0,5));
        if(highlight <= 2){
          stroke(random(180,200));
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
          stroke(random(180,200));
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
        if(highlight >= 4){
          stroke(random(180,200));
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
          stroke(180,200);
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


//Defining each variable
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
      oct_posx = windowWidth-windowWidth-80;
      oct_posy = windowHeight-windowHeight-60;
      button_posy = windowHeight-120;
      button_posx = windowWidth/2-300;
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
      next_ypos = windowHeight - 320;
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


//Circle network format
function network(){
  translate(windowWidth/2,windowHeight/2)
  push();
  rotate(rotate_r);
  structure_network(oct_posx,oct_posy, oct_size,8)
  pop();
}

//Result overview button event
function resultButton(){
  results();
  clear_setup = true;
}

//result page
function results(){
  console.log("results");
  clear_setup = true;
  setup_run = true;
}
