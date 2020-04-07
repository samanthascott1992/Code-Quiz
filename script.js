var questions = [
        {
            question: "In which brackets do you index an array:",
            choices: {
                a : "()",
                b : "<>", 
                c : "[]", 
                d : "{}"},
            correctAnswer: "c"
        },

        {
            question: "The first item of an array has an index of:",
            choices: {
                a : "1",
                b : "3",
                c : "2",
                d : "0"},
            correctAnswer: "d"
        },

        {
            question: "Using jQuery, how do you denote selection?",
            choices: {
                a : "$()",
                b : "[]",
                c : "{}",
                d : "<>"},
            correctAnswer: "a"
        },

        {
            question: "What is the most important header tag?",
            choices: {
                a : "h4",
                b : "h1",
                c : "h3",
                d : "h2"},
            correctAnswer: "b"
        },
    ];

var gameTimer = questions.length * 25;

var score = 0;
var qIndex = 0;
var countdown = 0;
var secsOffTime = 10;
var loopCounter = 1;

function displayTimer(){
    var start = moment().format('s');
    document.getElementById("timer").innerHTML = start;
    var t = setTimeout(displayTimer,600);    
};

function nextQuestion() {
    var startScreen = document.getElementById("start-screen");
    startScreen.style = "display: none";
    displayTimer();
    if(qIndex == questions.length){
        endGame();
    }
    else{
    var questionToAsk = questions[qIndex];
    var choicesToAnswer = questionToAsk.choices;
    var correctAnswer = questionToAsk.correctAnswer;
    questionToAsk = questionToAsk.question;

    document.getElementById("answerA").innerHTML = "A. " + choicesToAnswer.a; 
    document.getElementById("answerB").innerHTML = "B. " + choicesToAnswer.b;
    document.getElementById("answerC").innerHTML = "C. " + choicesToAnswer.c;
    document.getElementById("answerD").innerHTML = "D. " + choicesToAnswer.d; 
    document.getElementById("question").innerHTML = questionToAsk;
    document.getElementById("questionArea").style = "visibility: visible;";

    $( ".questionChoice").click(function() {
        console.log("loopCounter: " + loopCounter);
        console.log("this value: " + this.value);
        if(this.value === correctAnswer){
            score += 20.32;
            qIndex++;
            console.log(":)");
            nextQuestion();
        }
        else if(this.value != correctAnswer){
            console.log(":(");
        }
        loopCounter++;
     });
    }
}

function endGame(){
    console.log("We're in the end game now, boys.");
    var gameOverScreen = document.getElementById("game-over");
    var endScore = document.getElementById("end-score");
    endScore.innerHTML = score;

    document.getElementById("questionArea").style = "display: none";
    gameOverScreen.style = "visibility: visible";
    
    
}