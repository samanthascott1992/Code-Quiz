var gameTimer = 20000;

// function timerTick() {
// for (var i = 0; i < gameTimer; i--) {
//  ;


// }
// };
var q1 = "When making a selection in jquery, you use:"
var q2 = "The <p> is to denote the beginning of a new section"
var q3 = "The first item in an array has an index of:"
var q4 = "In which type of brackets do you use to access an array item?"

var questionList = [q1, q2, q3. q4 ];





function startGame() {
 for (var i = 0; i < questionList.length; i++) {
    document.getElementById("question").innerHTML = questionList[i][0];
    }

};


    // document.getElementById("answerA").innerHTML = answerA
    // document.getElementById("answerB").innerHTML = answerB
    // document.getElementById("answerC").innerHTML = answerC
    // document.getElementById("answerD").innerHTML = answerD



















// var score = 0;

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
