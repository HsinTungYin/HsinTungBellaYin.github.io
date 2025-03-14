// Assignment 4: P5 + Arrays
// References:
// 1. p5.js Array Reference: https://p5js.org/reference/p5/Array/
// 2. Repeating with Loops: https://p5js.org/tutorials/repeating-with-loops/
// 3. Random Poetry Example: https://p5js.org/examples/listing-data-with-arrays-random-poetry/


let particles = []; //p5.js Array Reference
let colors = ["#e74c3c", "#9b59b6", "#3498db", "#2ecc71", "#f1c40f", "#34495e"];// Array of colors
let words = ["Flow" , "Drift" , "Rise" , "Glow" , "Fade" , "Echo" , "Shimmer" , "Sway" , "Melt" , "Breathe" , "Shift" , "Soar" , "Dissolve" , "Glide" , "Vanish" , "Linger" , "Whisper" , "Cascade" , "Surge" , "Ember"]; // Array for random poetry
let button;

function setup() {
  createCanvas(600, 500);
  button = createButton("Add Particles");
  button.position(30, 500);
  button.mousePressed(addParticles);
}

function draw() {
  background("#000");
  
  for (let i = particles.length - 1; i >= 0; i--) { // Loop through the particles array
    particles[i].update();
    particles[i].display();
        if (particles[i].lifespan <= 5) {
      particles.splice(i, 1); //Using Array.splice()
    }
  }
  let info = ["               Particles:", particles.length].join(""); // Using Array.join() 
  fill("#FFFFE0");
  textSize(16);
  text(info,30, 470);
}

function addParticles() {
  for (let i = 0; i < 1; i++) { // Looping through array to generate particles
    let word=random (words) //from Random Poetry Example
    let color =random (colors) //from Random Poetry Example
    let p = new Particle(random(width), random(height), color, word);//from Random Poetry Example
    particles.push(p); //Using Array.push())
  }
}

class Particle { //from Repeating with Loops
  constructor(x, y, colors, word) {
    this.x = x;
    this.y = y;
    this.size = random(10, 30); //from Random Poetry Example
    this.lifespan = 255;
    this.col = colors;
    this.word = word;
  }
  
  update() {
    this.y -= 1;
    this.lifespan -= 2 //fade out 
  }
  
  display() {
    fill(random(colors)); //from Random Poetry Example

    ellipse(this.x, this.y, this.size);
    
    
    fill(250);
    textSize(13);
    textAlign(CENTER);
    text(this.word, this.x, this.y - this.size / 2  );
  }
}
