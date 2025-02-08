var blueBrick = {
    x: 0,
    y: 0,
    w: 80,
    h: 80,
    xSpeed: 5,
    ySpeed: 8,
    colour: '#63C5DA',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
var yellowBrick = {
    x: 20,
    y: 80,
    w: 70,
    h: 70,
    xSpeed: 10,
    ySpeed: 5,
    colour: '#FFEE8C',
    draw: function(){
        fill( this.colour );
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('pink'); 
    blueBrick.draw();
    blueBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
}