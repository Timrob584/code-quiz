Notes


<!-- By assigning an 'answer' class to each of the answers, I can get the quiz to go to the next question without a next button. -->
$('.answer').click(function(){
    next(); 

});

<!-- HTML way of doing the quiz: -->

<form class="Q1">
        <p>Commonly used data types DO NOT include:</p>
        <input type="radio" name="answer" value="a1">strings<br>
        <input type="radio" name="answer" value="a2">booleans<br>
        <input type="radio" name="answer" value="a3">alerts<br>
        <input type="radio" name="answer" value="a4">numbers<br>
    </form>


Use the javascript way of building the quiz. Change the answers in the object into an array in "" and seperated with a ,

Use indexes. Set global to start at 0. Use for loop to cycle through questions. 

1. create html element. "document.createElement("button")
2. give button some content. "text-content method" - var.textcontent
3. have to append it to the page.
4. For loop for the choices.


Global variable: var currentQuestionIndex = 0;


var vurrentQuestion = quizQuestions[currentQuestionIndex]




currentQuestionIndex++

spans are good for inputting/manipulating variables without messing up with the text. use for the timer and for the score time in the "finished" div.

Local storage can only take a string. Make it into a screen ".join"

Make an empty array. Push object (user's initial, user score) into array. Then store the array.

<!-- Can use this for if answer is correct, pops up text "correct", if answer is wrong, pops up text "wrong" and decreases timer by 10 seconds. -->
<ElementName>.on("click", function() {
    if () {
        $()...
    else {
        $()...
    }    
    }
});

<!-- Possible way of adding questions and answers for the quiz in javascript. -->
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
           "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ],
        correctAnswer: "3. alerts"
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
    correctAnswer = "4"
]