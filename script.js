var gameTimer = 20000;

function timerTick() {



}



var questionList = [
 {q: "When making a selection in jquery, you use $()", a:"t"},
 {q: `"h3" is the most important header tag`, a:"f"},
 {q: "The <p> is to denote the beginning of a new section", a:"f"}
];


var score = 0;

for (var i = 0; i < questions.length; i++) {
 var answer = confirm(questions[i].q);
   if ((answer === true && questions[i].a === "t") ||
      (answer === false && questions[i].a === "f")) {
      score++;
      alert("Correct!");
    }
    else {
      alert("Wrong!");
    }
  }
