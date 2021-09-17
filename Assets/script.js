// Variables
var quizContainerEl = document.getElementById("container");
var instructTitleEl = document.getElementById("instruct-title");
var instructTextEl = document.getElementById("instruct-text");
var submitEl = document.getElementById("submission");
var startBtnEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var timeEl = document.getElementById("time");
var quizQuestionDivEl = document.getElementById("quizQuestionDiv");
var questionTitleEl = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn1");
var choiceB = document.getElementById("btn2");
var choiceC = document.getElementById("btn3");
var choiceD = document.getElementById("btn4");
var checkEl = document.getElementById("answerCheck");
var finalScoreEl = document.getElementById("final-score");
var initialSubmitBtnEl = document.getElementById("initialSubmitBtn");
var highScoreInitialsEl = document.getElementById("initials");
var backBtnEl = document.getElementById("back");
var clearBtnEl = document.getElementById("clear");
var highScoreNameEl = document.getElementById("name");
var highScoreScoreEl = document.getElementById("score");
var currentQuestionIndex = 0;
var score = 0;
var seconds = 75;
var penalty = 10;


//  Quiz Questions
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
    }
];

// To hide the submission page at the beginning
submitEl.style.display = "none";

// To hide the instructions when start quiz button is clicked & start timer
startBtnEl.addEventListener("click", function() {
    startBtnEl.style.display = "none";
    instructTitleEl.style.display = "none";
    instructTextEl.style.display = "none";


// To add timer
    timerEl.textContent = seconds;
    var timerInterval = setInterval(function() {
        seconds--;
        timerEl.textContent = seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            window.log("Time's Up!");
        }
    }, 1000);

    showQuiz();
});

// To display the quiz
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitleEl.textContent = quizQuestions[currentQuestionIndex].title;
    choiceA.textContent = quizQuestions[currentQuestionIndex].choices[0];
    choiceB.textContent = quizQuestions[currentQuestionIndex].choices[1];
    choiceC.textContent = quizQuestions[currentQuestionIndex].choices[2];
    choiceD.textContent = quizQuestions[currentQuestionIndex].choices[3];
}

// To check the user's choice against the correct answer
function checkAnswer(correctAnswer) {
    if (quizQuestions[currentQuestionIndex].correctAnswer === quizQuestions[currentQuestionIndex].choices[correctAnswer]) {
        score++;
        checkAnswer.textContent = "Correct!";
    } else {
        seconds -= 10;
        timerEl.textContent = seconds;
        checkEl.textContent = "Wrong!"
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
};

function chooseA() { 
    checkAnswer(0); 
}

function chooseB() { 
    checkAnswer(1); 
}

function chooseC() { 
    checkAnswer(2); 
}

function chooseD() { 
    checkAnswer(3); 
}

choiceA.addEventListener("click", chooseA);

choiceB.addEventListener("click", chooseB);
   
choiceC.addEventListener("click", chooseC);
   
choiceD.addEventListener("click", chooseD);

// To hide the quiz and display the submission page
function gameOver() {
    quizQuestionDivEl.style.display = "none";
    time.style.display = "none";
    timerEl.style.display = "none";
    submitEl.style.display = "block";
    
    var scoreSpan = document.createElement("span");
    finalScoreEl.append(scoreSpan);
    finalScoreEl.append(score);
};

// To save the initials to local storage
var existingEntries = JSON.parse(localStorage.getItem("allEntries")) || [];

function submitScore() {
    var highScoreInitials = document.getElementById("initials").value;

    if (score > 0) {
        var currentScore = {
            "name": highScoreInitials,
            "score": score
        }
    } else {
        var currentScore = {
            "name": highScoreInitials,
            "score": 0
        }
    }

    if (highScoreInitials) {
        existingEntries.push(currentScore);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        location.href = "highscores.html";
    } else {
        alert("Please Enter Intitials")

    }
}

if (allEntries) {
    for (i = 0; i < allEntries.length; i++) {
      var userList = document.querySelector(".highScoresList")
      var input = document.createElement('li'); 
      input.textContent = allEntries[i]['userInitials'] + "   ---   " + allEntries[i]['userScore']
      userList.appendChild(input)
    }
  }