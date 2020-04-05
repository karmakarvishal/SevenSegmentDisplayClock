let display_h1,display_h2,display_m1,display_m2,display_s1,display_s2,
		h1,h2,m1,m2,s1,s2;

let nums = [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B]
let index = 0;
function setup() {
    createCanvas(1200,400);
    frameRate(1);
    display_h1 = new sevenSegment(createVector(0,40),0)
    display_h2 = new sevenSegment(createVector(200,40),0)
    display_m1 = new sevenSegment(createVector(400,40),0)
    display_m2 = new sevenSegment(createVector(600,40),0)
    display_s1 = new sevenSegment(createVector(800,40),0)
    display_s2 = new sevenSegment(createVector(1000,40),0)
}

function draw() {
  background(0);
  let time = new Date();

  if(time.getSeconds() < 10)
  {
      s1=0;
      s2=time.getSeconds();
  }
  else
  {
      s1 = Number(String(time.getSeconds()).charAt(0));
      s2 = Number(String(time.getSeconds()).charAt(1));
  }



  if(time.getMinutes() < 10)
  {
      m1 = 0;
      m2 = time.getMinutes();
  }
  else
  {
      m1 = Number(String(time.getMinutes()).charAt(0));
      m2 = Number(String(time.getMinutes()).charAt(1));
  }


  if(time.getHours < 10)
  {
      h1 = 0;
      h2 = time.getHours();
  }
  else
  {
      h1 = Number(String(time.getHours()).charAt(0));
      h2 = Number(String(time.getHours()).charAt(1));
  }

  display_h1.show(h1);
  display_h2.show(h2);
  display_m1.show(m1);
  display_m2.show(m2);
  display_s1.show(s1);
  display_s2.show(s2);

  stroke(255,0,0);
  strokeWeight(20);
  point(400,160);
  point(400,220);
  point(800,160);
  point(800,220);
  stroke(0);
  strokeWeight(0);

  
}

