var readlineSync = require("readline-sync");

console.log("--> Always use first letter capital in answer's");

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to are you a True Marvel fan");

var score =0;
//Play function
function play(question, answer){
   
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!")
    
  }

  console.log("current score: ", score);
  console.log("-----------------------");
}

// play("What is my real name? ", "Prem");
// play("What is my fav superhero? ", "Ironman");


var questions = [{
  question: "What is my real name of IRON-MAN? ",
  answer: "Tony Stark"
}, {
  question: "Who is most powerfull Avenger? ",
  answer: "Thor"
}, {
  question: "Who is smartest Avenger? ",
  answer: "Vision"
}, {
  question: "Was Captain worthy? ",
  answer: "Yes"
}, {
  question: "Who is the youngest Avenger? ",
  answer: "Spiderman"
}];

 for(var i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer)
 }

console.log("YAY! You Scored: ", score);

