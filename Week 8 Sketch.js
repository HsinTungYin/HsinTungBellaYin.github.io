// fireworks!!!!
// origin point
// speed 
// timing

// a bunch of shapes
// radius
// colour
// drop
// fading

// removed embers

var fireworks = [];

function createEmbers(){
    var originx = random(width);
    var originy = random(height);
    for(var i = 0; i < 30; i++){
        var ember = {
            x: originx,
            y: originy,
            xspeed: random(-2,2),
            yspeed: random(-2,2),
            colour: 0,
            draw: function(){
                //stroke
                strokeWeight(2);
                stroke(this.colour);
                point(this.x,this.y);
                this.update();
            },
            update: function(){
                this.x += this.xspeed;
                this.y += this.yspeed;
            },
        };
        fireworks.push(ember);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    createEmbers();
}

function draw(){
    background('skyblue');
    strokeWeight(1);
    text(fireworks.length, 20,20);
    for(ember of fireworks){
        ember.draw();
    }
    if(frameCount % 30 === 0){
        createEmbers();
    }
    // remove any embers that are off screen
}