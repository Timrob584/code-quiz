# Notes
<!-- By assigning an 'answer' class to each of the answers, I can get the quiz to go to the next question without a next button. -->
$('.answer').click(function(){
    next(); 

});

<!-- The 'View Highscores' is a link to a 2nd page. Must make the 2nd page! -->

1:09:00 in 5.1 class video (JQuery Click Events)
1:25:31 in 5.1 class video (JQuery Form Elements)
2:32:10 in 5.1 class video (JQuery Event Delegation (Show/hide))

<ElementName>.on("click", function() {
    alert("AlertText");
});

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
    correctAnswer = "4"
]
