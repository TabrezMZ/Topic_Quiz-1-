
var readlineSync = require('readline-sync');
var score = 0;

function welcome() {
  var userName = readlineSync.question("Hey , What's your name? ");

  console.log("Welcome " + userName + " let's see if you know about indian history")
}

welcome();

var questions = [
  {
    question: " Who was the first Prime Minister of India ?",
    answer: "jawaharlal nehru"
  },
  {
    question: "Who was the first woman prime Minister of India ?",
    answer: "indira gandhi"
  },
  {
    question: "Who wrote the song Sare Jahan Se Achha ?",
    answer: "allama iqbal"
  }

]


function playQuiz() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];

    var userAnswer = readlineSync.question(currentQuestion.question);


    if (currentQuestion.answer == userAnswer) {
      console.log("you are right");
      score = score + 1
    } else {
      console.log("You are wrong")
    }
  }
}

playQuiz()


console.log("finally your Score is : " + score)