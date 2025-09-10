function setup() {
  createCanvas(950,642);
  background(0);

  fill(3,15,73);
  ellipse(200, 360, 700, 700);

  fill(0);
  ellipse(300, 360, 600, 600);
  
  fill(0);
  ellipse(100, 160, 400, 400);
  
  push();
  noStroke();
  rotate(PI / -4);
  fill(0);
  rect(-460, 410, 50, 100);
  pop();

  push();
  noStroke();
  rotate(PI / -4);
  fill(0);
  ellipse(-380, 310, 20, 400);
  pop();

push();
  beginShape();
  translate (100, 510);
  scale (2.3);
  rotate(PI / -1.2);
  vertex(30, 20);
  fill (3,15,73);
  bezierVertex(80, 10, 60, 70, 40, 75);
  bezierVertex(50, 70, 70, 20, 30, 20);
  endShape();
  pop();

  push();
  noStroke();
  rotate(PI / -6);
  fill(3,15,73);
  rect(-180, 520, 60, 180);
  pop();

  push();
  beginShape();
  noStroke();
  translate (247, 670);
  scale (2.9);
  rotate(PI / -1.1);
  vertex(30, 20);
  fill (0);
  bezierVertex(80, 10, 60, 70, 40, 75);
  bezierVertex(50, 70, 70, 20, 30, 20);
  endShape();
  pop();

  push();
  noStroke();
  rotate(PI / -5);
  fill(3,15,73);
  rect(-180, 520, 60, 180);
  pop();

  push();
  beginShape();
  noStroke();
  translate (247, 670);
  scale (2.9);
  rotate(PI / -1.1);
  vertex(30, 20);
  fill (0);
  bezierVertex(80, 10, 60, 70, 40, 75);
  bezierVertex(50, 70, 70, 20, 30, 20);
  endShape();
  pop();

  ellipse(680, 430, 80, 120);
  fill(3,15,73);
  noStroke();
  ellipse(-35, 290, 200, 200);

  ellipse(680, 430, 80, 120);
  fill(0);
  noStroke();
  ellipse(-38, 290, 160, 160);

  push();
  noStroke();
  rotate(PI / -5);
  fill(3,15,73);
  rect(-170, 290, 80, 220);
  pop();

  ellipse(680, 430, 80, 120);
  fill(3,15,73);
  noStroke();
  ellipse(70, 295, 40, 40);
  

  push();
  noStroke();
  rotate(PI /-5);
  fill(3,15,73);
  rect(-245, 260, 125, 55);
  pop();

  

 //hair
  
  push();
  noStroke();
  rotate(PI / -6);
  fill(255);
  rect(-90, 500, 45, 300);
  pop();

  push();
  noStroke();
  rotate(PI / -6);
  fill(0);
  rect(-75, 500, 13, 300);
  pop();
 
  push();
  noStroke();
  rotate(PI / -6);
  fill(255);
  rect(100, 750, 35, 300);
  pop();

  push();
  noStroke();
  rotate(PI / -5);
  fill(255);
  rect(260, 750, 80, 350);
  pop();

  push();
  noStroke();
  rotate(PI / -5);
  fill(0);
  rect(259, 790, 28, 100);
  pop();

  

  //window sheen


  push();
  noStroke();
  rotate(PI / -22);
  fill(255);
  rect(80, 120, 65, 555);
  pop();

  push();
  noStroke();
  rotate(PI / -22);
  fill(0);
  rect(141, 120, 8, 555);
  pop();

  //vertical white

  
  push();
  noStroke();
  rotate(PI / -150);
  fill(255);
  rect(165, 115, 950, 55);
  pop();

  //horizontal white

  push();
  rotate(PI / -140);
  fill (152,30,20);
  rect (-20, 0, 980, 120);
  pop();

  //red
  push();
  scale(1)
  push();
  noStroke();
  rotate(PI / -140);
  fill (255);
  rect (180, 162, 980, 20);
  pop();

  //horizontal white pt 2


  push();
  translate (295, 130);
  scale(1.5);
  rotate(PI / 1.6);
  fill(0);
  beginShape();
  vertex(30, 20);
  bezierVertex(80, 0, 80, 75, 30, 75);
  bezierVertex(50, 80, 60, 25, 30, 20);
  endShape();
  pop();

  
//crescent

  
  push();
  rotate(PI / -22);
  fill(0);
  rect(145, 139, 5, 30);
  pop();
  
  //fixing crecent

  push();
  noStroke();
  rotate(PI / -22);
  fill(255);
  rect(150, 140, 7, 20);
  pop();

  //fixing crecent 2

  push();
  noStroke();
  rotate(PI / -20);
  fill(255);
  rect(200, 180, 30, 20);
  pop();

  //fixing crecent 3

  
  push();
  noStroke();
  rotate(PI / -140);
  fill (255);
  rect (215, 163, 980, 18);
  pop();

  //crecent clean up

  push();
  rotate(PI / -140);
  fill (0);
  rect (-20, 40, 980, 18);
  pop();
  pop();
  //black line 1

  push();
  rotate(PI / -140);
  fill (0);
  rect (-20, 100, 980, 13);
  pop();

  //black line 2

  push();
  rotate(PI / -140);
  fill (0);
  rect (-20, 120, 980, 9);
  pop();

  //black line 3

  push();
  noStroke();
  rotate(PI / -22);
  fill(0);
  rect(350, 600, 40, 120);
  pop();



}

function draw() {
  fill(0);
  ellipse(680, 430, 80, 120);
  fill(0);
  noStroke();
  ellipse(745, 563, 23, 40);

  
}
