var hr,min,sec
var ho,ma,sc;

function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
 
  hr=hour()
  min=minute()
  sec=second()
  
  sc=map(sec,0,60,0,360)
  ma=map(min,0,60,0,360)
  ho=map(hr%12,0,12,0,360)

  translate(200,200)
  rotate(-90)

  push()
  rotate(sc)
  stroke(15,60,255)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke(255,62,128)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ho)
  stroke(254,255,73)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(15,60,255)
  arc(0,0,300,300,0,sc)

  stroke(255,62,128)
  arc(0,0,280,280,0,ma)

  stroke(254,255,73)
  arc(0,0,260,260,0,ho)

}