var x = 0;
var y = 0;

function setup(){
    createCanvas(900,350);
}

function draw(){
    background('#63C5DA') // automatic semicon insertion
    circle(x,y,50,50);
    x = x + 7;
    x = x % 1000; // modulo operator
    y = y + 5;
    y = y % 800;
}