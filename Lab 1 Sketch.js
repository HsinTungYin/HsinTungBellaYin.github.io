function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background("#65B5F6");
    fill ('pink');
    stroke('white');
    for (var i = 0; i < 10000; i++){
        circle((i*10)%width, (i*10)%height, 10, 10);
    }

    fill("#8968CD");
    stroke ('white');
    if (mouseX < 800, mouseY>500){
        rect(mouseX, mouseY, 100, 100);
    }else{
        circle(mouseX,mouseY, 100,50,25);
    }
}