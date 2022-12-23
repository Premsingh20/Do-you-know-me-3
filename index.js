var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Prem");

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
  question: "What is my real name? ",
  answer: "prem"
}, {
  question: "What is my fav superhero? ",
  answer: "ironman"
}, {
  question: "What I am learning? ",
  answer: "web development"
}, {
  question: "Who is my fav hero? ",
  answer: "hritik"
}, {
  question: "Where do I live? ",
  answer: "burnpur"
}];

 for(var i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer)
 }

console.log("YAY! You Scored: ", score);

