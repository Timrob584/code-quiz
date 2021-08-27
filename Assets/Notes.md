Notes


<!-- By assigning an 'answer' class to each of the answers, I can get the quiz to go to the next question without a next button. -->
$('.answer').click(function(){
    next(); 

});

Use the javascript way of building the quiz. Change the answers in the object into an array in "" and seperated with a ,

Use indexes. Set global to start at 0. Use for loop to cycle through questions. 

1. create html element. "document.createElement("button")
2. give button some content. "text-content method" - var.textcontent
3. have to append it to the page.
4. For loop for the choices.


Global variable: var currentQuestionIndex = 0;


var currentQuestion = quizQuestions[currentQuestionIndex]


currentQuestionIndex++

spans are good for inputting/manipulating variables without messing up with the text. use for the timer and for the score time in the "finished" div.

Local storage can only take a string. Make it into a screen ".join"

Make an empty array. Push object (user's initial, user score) into array. Then store the array.


<!-- To add the score to the page -->
$(document).ready(function() {
    $("#score span").text(score);
})

<!-- Quiz Questions -->
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ],
        correctAnswer: "3. alerts"
    },

    {
        title: "the condition in an if/else statement is enclosed within ___",
        choices: [
            "1. quotes",
            "2. curly brackets",
            "3. parentheses",
            "4. square brackets"
        ],
        correctAnswer: "3. parentheses"
    },

    {
        title: "Arrays in javascript can be used to store",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ],
        correctAnswer: "4. all of the above"
    },    
    {
        title: "String values must be enclosed within ___ when being assigned to variables",
        choices: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parentheses"
        ],
        correctAnswer: "3. quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"
        ],
        correctAnswer: "4. console.log"
    },

<!-- Variables Needed: -->
<!-- var startBtn = $("#start"); -->
<!-- var finished = $("finished"); -->
var quizContainer = $("#contain");
var instructTitle = $("#instruct-title");
var instructText = $("#instruct-text");
var currentQuestionIndex = 0;
var score = 0;
var seconds = 75;
var penalty = 10;
var currentQuestions = quizQuestions[currentQuestionIndex];
var currentChoices = quizQuestions[currentQuestionIndex];
var ul = document.createElement("ul");




<!-- To hide the submission page at the beginning -->
$(document).ready(function() {
    $("#submission").hide();
});

<!-- To hide the instructions when start quiz button is clicked -->
$("#start").click(function() {
    startBtn.hide();
    instructTitle.hide();
    instructText.hide();
});


<!-- To add Timer -->
var interval = setInterval(function(seconds) {
    document.$("#timer span").innerHTML = seconds + "s";

    if (distance < 0) {
    clearInterval(interval);
    window.alert("Time's Up!");
    }
}, 1000);    

<!-- To Loop Through Questions & Answers -->
function generate(currentQuestionIndex) {
    for (var i = 0; i < quizQuestions.length; i++) {
        currentQuestions.choices;
        currentChoices.choices;
    }

    currentChoices.forEach(function(list) {
        var choiceList = document.createElement("li");
        choiceList.textContent = list;
        quizContainer.appendChild(ul)
        ul.appendChild(list);
        list.on("click", (compare));
        })
    };

<!-- To Compare Answers -->
    function compare(e) {
    var answer = e.target;

    if (answer.matches("li")) {
        var newDiv = document.createElement("div");
    }    
        if (answer.textContent === quizQuestions[currentQuestionIndex].answer) {
            score++;
            newDiv.textContent = "Correct!";
    }    
        else {
                seconds = seconds - penalty;
                newDiv.textContent = "Wrong!";
            }
}