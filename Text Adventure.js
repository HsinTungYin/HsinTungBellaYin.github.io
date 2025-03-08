// Assignment 3: "Text Adventure" in P5.js with Events
// IDEA:
// Answer math addition questions as many times as you want.
// The system will tell you whether your answer is right or wrong!

let num1, num2, correctAnswer;
let input, button, message;

function setup() {
    createCanvas(620, 300);
    generateQuestion();

    input = createInput();
    input.position(55, 220);

    button = createButton('Submit');
    button.position(220, 220);
    button.mousePressed(checkAnswer);

    message = "";
}

function draw() {
    background(172, 186, 228);
    textSize(30);
    fill (47, 49, 100);

    // Display the question
    text(`What is ${num1} + ${num2}?`, 45, 120);

    // Display feedback message
    text(message, 45, 205);
}

function generateQuestion() {
    num1 = floor(random(1, 1001));
    num2 = floor(random(1, 1001));
    correctAnswer = num1 + num2;
}

function checkAnswer() {
    let userAnswer = int(input.value());
    if (userAnswer === correctAnswer){
        message = "Correct! Here's another one..."
        generateQuestion(); // Generate a new question
        input.value(""); // Clear input field
      
    } else if (userAnswer != correctAnswer){
            message = "Wrong answer! Try again.";
     }
}