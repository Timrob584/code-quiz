var startBtn = $("#start");

// Variables for Questions (Can we make this into an array and use that for the .hide?)
var question1 = $("#Q1");
var question2 = $("#Q2");
var question3 = $("#Q3");
var question4 = $("#Q4");
var question5 = $("#Q5");

var instructTitle = $("#instruct-title");
var instructText = $("#instruct-text");
var submission = $("#finished");

// To hide the questions initially
question1.hide();
question2.hide();
question3.hide();
question4.hide();
question5.hide();
submission.hide();

// When 'Start Quiz' is clicked, hide instructions & Show 1st question.
startBtn.on("click", function () {
    startBtn.hide();
    instructTitle.hide();
    instructText.hide();
    question1.show();

});

// How to add an event listener for each individual answer. Do I have to build the quiz in javascript?
INSERTELEMENTHERE.on("click", function() {
    question1.hide();
    question2.show();
});

INSERTELEMENTHERE.on("click", function() {
    question2.hide();
    question3.show();
});

INSERTELEMENTHERE.on("click", function() {
    question3.hide();
    question4.show();
});

INSERTELEMENTHERE.on("click", function() {
    question4.hide();
    question5.show();
});
