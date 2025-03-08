function mathQuiz() {
    while (true) {
        let num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
        let num2 = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = num1 + num2;

        let userAnswer = prompt(`What is ${num1} + ${num2}?`);
        
        if (parseInt(userAnswer) !== correctAnswer) {
            alert("Wrong answer! Game over.");
            break;
        } else {
            alert("Correct! Next question...");
        }
    }
}

mathQuiz();