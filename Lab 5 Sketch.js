let animal;

function preload() {
  animal = loadJSON("Lab 5 Animal.json");
}

function setup() {
  createCanvas(800, 800);
  background(255);
  drawAnimal();
}

function drawAnimal() {
  noStroke();

  //* Elephant *
  // Head
  fill(150);
  ellipse(animal.head.x, animal.head.y, animal.head.size);

  // Ear
  fill(150);
  ellipse(animal.ear.x, animal.ear.y, animal.ear.size);
  ellipse(animal.earr.x, animal.earr.y, animal.earr.size);

  // Trunk
  fill(150);
  rect(animal.trunk.x, animal.trunk.y, animal.trunk.w, animal.trunk.h, 10);
  
  fill (255);
  rect(animal.line1.x, animal.line1.y, animal.line1.w, animal.line1.h, 10);
  rect(animal.line2.x, animal.line2.y, animal.line2.w, animal.line2.h, 10);

  // Eye
  fill(0);
  ellipse(animal.eye.x, animal.eye.y, animal.eye.size);

  // Eye ball
  fill(255);
  ellipse(animal.ball.x, animal.ball.y, animal.ball.size);

  // Eye
  fill(0);
  ellipse(animal.eyee.x, animal.eyee.y, animal.eyee.size);
  
  // Eye ball
  fill(255);
  ellipse(animal.balll.x, animal.balll.y, animal.balll.size);

  
  //* Bear *
  // Head
  fill(160,82,45);
  ellipse(animal.Head.x, animal.Head.y, animal.Head.size);
  
  //Face
  fill(222,184,135);
  ellipse(animal.Face.x, animal.Face.y, animal.Face.size);
  
  // Ear
  fill(160,82,45);
  ellipse(animal.Ear.x, animal.Ear.y, animal.Ear.size);
  ellipse(animal.Earr.x, animal.Earr.y, animal.Earr.size);
  
  // Eye
  fill(255);
  ellipse(animal.Eye.x, animal.Eye.y, animal.Eye.size);
  
  // Eye ball
  fill(0);
  ellipse(animal.Ball.x, animal.Ball.y, animal.Ball.size);
  
  // Eye
  fill(255);
  ellipse(animal.Eyee.x, animal.Eyee.y, animal.Eyee.size);
    
  // Eye ball
  fill(0);
  ellipse(animal.Balll.x, animal.Balll.y, animal.Balll.size);
  
  //Nose
  fill(88,57,39);
  ellipse(animal.Nose.x, animal.Nose.y, animal.Nose.size);

  //Mouth
  fill(205,92,92);
  ellipse(animal.Mouth.x, animal.Mouth.y, animal.Mouth.size);
} 