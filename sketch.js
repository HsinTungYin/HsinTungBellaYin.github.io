// Previous Sketch: Moving Ball Animation
let sketch1 = (p) => {
    let x = 0;
    let y = 0;
  
    p.setup = () => {
      p.createCanvas(900, 350);
    };
  
    p.draw = () => {
      p.background(204,229,255);
      p.circle(x, y, 50);
      x += 7;
      x = x % 1000;
      y += 5;
      y = y % 800;
    };
  };
  
  new p5(sketch1, 'sketch1-container');
  
  // New Update Sketch: Interactive Color Circles
  let sketch2 = (p) => {
    let circles = [];
  
    p.setup = () => {
      p.createCanvas(900, 350);
      p.background(255);
    };
  
    p.draw = () => {
      p.background(255,228,225);
      for (let c of circles) {
        p.fill(c.color);
        p.noStroke();
        p.circle(c.x, c.y, c.size);
        c.x += p.random(-1, 1);
        c.y += p.random(-1, 1);
      }
    };
  
    p.mousePressed = () => {
      circles.push({
        x: p.mouseX,
        y: p.mouseY,
        size: p.random(20, 60),
        color: p.color(p.random(255), p.random(255), p.random(255))
      });
    };
  };
  
  new p5(sketch2, 'sketch2-container');  