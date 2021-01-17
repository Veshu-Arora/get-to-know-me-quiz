var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("PLEASE ENTER YOUR NAME: ");

console.log("\nWELCOME " + userName.toUpperCase() + " TO - GET TO KNOW ME\n")

console.log("A SIMPLE QUIZ TO GET TO KNOW ME BETTER. LET'S START!");

console.log("\nRULES:")
console.log("1- YOU GET +2 MARKS FOR EACH CORRECT ANSWER")
console.log("2- YOU GET -1 MARKS FOR EACH INCORRECT ANSWER\n")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    score = score + 2;
    console.log("You are right!")
  } else {
    score = score - 1;
    console.log("Oh,You are wrong!")
  }

  console.log("current score: " + score)
  console.log("-------------X-------------")
}

var questions = [
  {
    question: "Which city do i live in? ",
    answer: "kashipur"
  },

  {
    question: "What is my favourite sport? ",
    answer: "cricket"
  },

  {
    question: "Who is my favourite cricket player? ",
    answer: "virat kohli"
  },

  {
    question: "who is my favourite cartoon character? ",
    answer: "goku"
  },

  {
    question: "Who is my favourite marvel character? ",
    answer: "iron man"
  },
]

for( var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("YOUR TOTAL SCORE IS: ", score);

if(score === 10){
  console.log("WOHOO! YOU SCORED A PERFECT 10!")
} 
