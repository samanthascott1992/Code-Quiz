var gameTimer = 20000;

// function timerTick() {
// for (var i = 0; i < gameTimer; i--) {
//  ;


// }
// };
var questionList = [
 [ "When making a selection in jquery, you use:", "a"],
  [ "The <p> is to denote the beginning of a new section", "c"],
 ["The first item in an array has an index of:", "c"],
 ["In which type of brackets do you use to access an array item?", "d"]
];


function startGame() {
 for (var i = 0; i < questionList.length; i++) {
    document.getElementById("question").innerHTML = questionList[i][0];
}

};





















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
