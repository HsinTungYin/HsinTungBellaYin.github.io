let strokeWeightSlider, colorPicker, bgSelect, inputBox, clearButton;
let circleSize = 0;
let circleColor = '#52B2BF';
let bgColor = 'lightblue';
let displayText = ""

function setup() {
    createCanvas(700, 350);
    

    // Slider for circle size
    strokeWeightSlider = createSlider(5, 20, 5, 1);
    strokeWeightSlider.position(70, 442);
    strokeWeightSlider.input(updateSize);

    function updateSize() {
        circleSize = strokeWeightSlider.value();
    }
    

    // Color picker for circle
    colorPicker = createColorPicker('#52B2BF');
    colorPicker.position(8, 440);
    colorPicker.input(updateColor);
   
    function updateColor() {
        circleColor = colorPicker.value();
    }
    

    // Dropdown menu for background color
    bgSelect = createSelect();
    bgSelect.position(215, 443);
    bgSelect.option('lightblue');
    bgSelect.option('lightpink');
    bgSelect.option('lightyellow');
    bgSelect.option('lightgreen');
    bgSelect.changed(updateBackground);

    function updateBackground() {
        bgColor = bgSelect.value();
    }
    

    // Input box for text display
    inputBox = createInput("Type Here");
    inputBox.position(310, 442);
    inputBox.input(updateText);

    function updateText() {
        displayText = inputBox.value();
    }
    

    // Button to clear canvas
    clearButton = createButton("Clear Canvas");
    clearButton.position(610, 442);
    clearButton.mousePressed(clearCanvas);
    
    background(bgColor);

    function clearCanvas() {
        background(bgColor);
    }
}


function draw(){
    strokeWeight( strokeWeightSlider.value() );
    stroke( colorPicker.value() );   

    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    fill(0);
    textSize(20);
    text(displayText, 20, 35);
}