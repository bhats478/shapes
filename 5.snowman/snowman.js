//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  fill("lightblue");
  stroke("lightblue");
  rect(0,0,300,500);

  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(150,350,200,200);

  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(150,210,150,150);

  fill("white");
  strokeWeight(3);
  stroke("grey");
  ellipse(150,100,125,125);

  fill("orange")
  stroke("orange")
  triangle(150,150,140,120,160,120);

  fill("black");
  strokeWeight(3);
  stroke("black");
  ellipse(125,100,15,15);

  fill("black");
  strokeWeight(3);
  stroke("black");
  ellipse(175,100,15,15);
}
