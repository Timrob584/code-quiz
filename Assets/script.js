// Adding questions and answers for the quiz
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1. strings
            2. booleans
            3. alerts
            4. numbers
        },
        correctAnswer = "3"
    },

    {
        question: "the condition in an if/else statement is enclosed within ___",
        answers: {
            1. quotes
            2. curly brackets
            3. parentheses
            4. square brackets
    },
    correctAnswer = "3"
    },

    {
        question: "Arrays in javascript can be used to store",
        answers: {
            1. numbers and strings
            2. other arrays
            3. booleans
            4. all of the above
    },
    correctAnswer = "4"

    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        answers: {
            1. commas
            2. curly brackets
            3. quotes
            4. parentheses
    },
    correctAnswer = "3"

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1. JavaScript
            2. terminal/bash
            3. for loops
            4. console.log
    },
    correctAnswer = "1"
]


document.getElementById("#start").addEventListener("click",() => {
    console.log("start clicked");
}