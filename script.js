var gameTimer = questions.length * 20;
var score = 0;
var nextQuestIndex = 0;

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


function startGame() {
    var startScreen = document.getElementById("start-screen")



};


function questionTime() {

var nextQuestion = questions[nextQuestIndex]
var titleEl = document.getElementById("question")
titleEl.textContent = nextQuestion.question;
choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        choiceNode.onclick = questionClick;
        choicesEl.appendChild(choiceNode);
    }
});


    
    startBtn.addEventListener("click", startQuiz);
    submitBtn.onclick = viewHighScore;








// for (var i = 0; i < questionList.length; i++) {
//  var answer = confirm(questions[i].q);
// //    if ((answer === true && questions[i].a === "t") ||
// //       (answer === false && questions[i].a === "f")) {
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("Wrong!");
//     }
//   }
