var hr_angle,sec_angle,h,m,s;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

   h = hour();
text('Current hour:\n' + h, 5, 50);

   m = minute();
text('Current minute: \n' + m, 5, 100);

  s = second();
text('Current second: \n' + s, 5, 150);

hr_angle=map(h,0,60,0,3600)
sec_angle=map(s,0,60,0,3600);



push();
rotate(sec_angle);
stroke(255,0,0);
strokeWeight(7);
line(200,200,300,300);
pop();

push();
rotate(sec_angle);
stroke(0,255,0);
strokeWeight(7);
line(200,200,300,300);
pop();



angleMode(DEGREES);
  drawSprites();
}