/// click on bubble  - mousepressed + dist()
// keep score - variable
// add new bubbles when there is only one left?
// time limit - variable
// move - method
// bubbles bounce off edges - method
// bubbles bounce off each other - ??
// pop bubble - filter? 
// p5.vector

var bubbles = [];
var score = 0;
var timeRemaining = 30;

function createBubbles(numberOfBubbles){
    for(var i = 0; i < numberOfBubbles; i++){
        var bubble = {
            radius: 25,
            x: random(25,width-25),
            y: random(25,height-25),
            colour: 'blue',
            draw: function(){
                fill(this.colour);
                circle(this.x, this.y, this.radius);
            }
        };
        bubbles.push(bubble);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    // create a bubble
    createBubbles(15);
}


function draw(){
    background(100);
    //draw the bubbles
    for(bubble of bubbles){
        bubble.draw();
    }
    fill(0);
    text(score, 20, 20);
}

function mousePressed(){
    // if we click on a bubble, pop it and increase the score
    for(bubble of bubbles){
        var distance = dist(mouseX, mouseY, bubble.x, bubble.y);
        if(distance < bubble.radius){
            score++;
        }
    }
    // if  there is one bubble, add more
    if(bubbles.length <= 1){
        createBubbles(7);
    }
}