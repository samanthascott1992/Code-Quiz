var questions =
    [
        {
            question: "In which brackets do you index an array:",
            choices: ["()", "<>", "[]", "{}"],
            answer: "[]"
        },

        {
            question: "The first item of an array has an index of:",
            choices: ["1", "3", "2", "0"],
            answer: "0"
        },

        {
            question: "Using jQuery, how do you denote selection?",
            choices: ["$()", "[]", "{}", "<>"],
            answer: "$()"
        },

        {
            question: "What is the most important header tag?",
            choices: ["h4", "h1", "h3", "h2"],
            answer: "h1"
        },
    ];

var gameTimer = questions.length * 20;
var score = 0;
var qIndex = 0;

function startGame() {
    var startScreen = document.getElementById("start-screen");
    startScreen.style = "display: none";
    
    var questionToAsk = questions[qIndex];
    var choicesToAnswer = questionToAsk.choices;
    var answer = questionToAsk.answer;
    questionToAsk = questionToAsk.question;

    var question = document.getElementById("question");
    var choices = document.getElementById("choices");

    
    choices.innerHTML = choicesToAnswer;
    //TODO: for each choice in choicesToAnswer create a button element, append child like below

    question.innerHTML = questionToAsk;

    question.style = "display: inline";
    choices.style = "display: inline";
};





