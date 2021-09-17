// Variables
var quizContainerEl = document.getElementById("container");
var instructTitleEl = document.getElementById("instruct-title");
var instructTextEl = document.getElementById("instruct-text");
var submitEl = document.getElementById("submission");
var startBtnEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
timeEl = document.getElementById("time");
var quizQuestionDivEl = document.getElementById("quizQuestionDiv");
var questionTitleEl = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn1");
var choiceB = document.getElementById("btn2");
var choiceC = document.getElementById("btn3");
var choiceD = document.getElementById("btn4");
var check = document.getElementById("answerCheck");
var currentQuestionIndex = 0;
var score = 0;
var seconds = 75;
var penalty = 10;
var finalScore = document.getElementById("");

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

choiceA.addEventListener("click", chooseA);
    function chooseA() {
        check(0);
    }
choiceB.addEventListener("click", chooseB);
    function chooseA() {
        check(1);
}
choiceC.addEventListener("click", chooseC);
    function chooseA() {
        check(2);
}
choiceD.addEventListener("click", chooseD);
    function chooseA() {
        check(3);
}

function check(answer) {
    if (quizQuestions[currentQuestionIndex].correctAnswer === quizQuestions[currentQuestionIndex].choices[answer]) {
        score++;
        answer.textContent = "Correct!";
    } else {
        seconds -= 10;
        timerEl.textContent = seconds;
        answer.textContent = "Wrong!"
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function gameOver() {
    quizQuestionDivEl.style.display = "none";
    time.style.display = "none";
    timerEl.style.display = "none";
}
// setInterval(function(seconds) {
//     timerEl.append(interval);
//     interval--
//     if (interval === 0) {
//     console.log("Time's Up!");
//     }

// }, 1000);    


// // To add the score to the page
// $(document).ready(function() {
//     $("#score span").text(score);
// })


// // To Loop Through Questions & Answers
// function generate(currentQuestionIndex) {
//     for (var i = 0; i < quizQuestions.length; i++) {
//         currentQuestions.choices;
//         currentChoices.choices;
//     }

//     currentChoices.forEach(function(list) {
//         var choiceList = document.createElement("li");
//         choiceList.textContent = list;
//         quizContainer.appendChild(ul)
//         ul.appendChild(list);
//         list.on("click", (compare));
//         })
//     };

// // To Compare Answers
//     function compare(e) {
//     var answer = e.target;

//     if (answer.matches("li")) {
//         var newDiv = document.createElement("div");
//     }    
//         if (answer.textContent === quizQuestions[currentQuestionIndex].answer) {
//             score++;
//             newDiv.textContent = "Correct!";
//     }    
//         else {
//                 seconds = seconds - penalty;
//                 newDiv.textContent = "Wrong!";
//             }
// }


    