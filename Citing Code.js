// Assignment 2: Citing Code
// Tutorials Used:
// P5.js Clock - https://p5js.org/examples/calculating-values-clock/
// P5.js Color Wheel - https://p5js.org/examples/repetition-color-wheel/


// --- Clock Tutorial ---

// Variables for Clock
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(710, 710); // Change (710, 400) to (710, 710) => large square canvas
  angleMode(DEGREES); // Set angle mode to degrees
  colorMode(HSB); // Use HSB color mode for color transitions
  stroke(255);

  // Set radius for each clock hand based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.4;
  clockDiameter = radius * 1.7;
}

function draw() {
  // My Extension: Map seconds to angles, and match background color to the point on the color wheel
  let secondAngle = map(second(), 0, 60, 0, 360);
  let bgHue = secondAngle % 360; // Match the background hue to the second hand position
  background(bgHue, 85, 90); // Set background hue to match second hand



  // --- Color Wheel Tutorial ---
  push(); 
  noStroke();
  translate(width / 2, height / 2); // Move origin to center

  // Draw colorful circles in a wheel pattern
  for (let angle = 0; angle < 360; angle += 30) {
    push();
    rotate(angle-90); // My Extension: rotate 90 degrees counterclockwise to match the color
    translate(clockDiameter / 2, 0); // Color wheel will display around the clock
    fill(angle, 85, 90);
    circle(0, 0, 50);
    pop();
  }
  
  // My Extension: Add one more cycle to fill the whole circle
  for (let angle = 15; angle < 360; angle += 30) {
    push();
    rotate(angle-90); // My Extension: rotate 90 degrees counterclockwise to match the color
    translate(clockDiameter / 2, 0); // Color wheel will display around the clock
    fill(angle, 85, 90);
    circle(0, 0, 50);
    pop();
  }
  
  // --- Clock Tutorial ---

  // Calculate angles for each hand
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(2); // Change the stroke from 1 to 2
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(3); // Change the stroke from 2 to 3
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand: 
  push();
  strokeWeight(5); // Change the stroke from 4 to 5
  rotate(hourAngle+minute()*0.5); // My Extension: Hour hand will rotate according to every minute
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around the clock
  push();
  strokeWeight(5); // Change the stroke from 2 to 5
  for (let ticks = 0; ticks < 60; ticks++) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();


  // My Extension: Digital Clock Display in the center
  fill(0, 0, 100); // White color for digital time
  textSize(50); // Set text size
  textAlign(CENTER, CENTER); // Center-align the text
  style="font-family:Georgia"


  // Format the time as HH:MM:SS
  let h = nf(hour(), 2); // Pad with zero if necessary
  let m = nf(minute(), 2);
  let s = nf(second(), 2);
  let currentTime = h + ':' + m + ':' + s;

  text(currentTime, 0, 0); // Display time at the center
  pop(); // Restore previous transformation state
}