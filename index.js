
var readlineSync = require('readline-sync');
var score = 0;


function welcome() {
  var userName = readlineSync.question("Hey , What's your name? ");

  console.log("Welcome " + userName + " Let's see if you know about indian history");

  const pressKey = readlineSync.question('Hit Enter key to start.', { hideEchoBack: true, mask: '' })

  console.log(pressKey)

  console.log("Here goes the first question" + " (Remember - you have to press the key assigned to the write answer)")

}

welcome();

var questions = [
  {
    question: "Who is also known as the Iron Man of India? ",
    answer: ["Subhas Chandra Bose",
      "Lal Bahadur Shastri",
      "Sardar Vallabhbhai Patel",
      "Murli Manohar Joshi"],
    answerOpt: 'Sardar Vallabhbhai Patel'
  },
  {
    question: "Who founded the Indian National Army? ",
    answer: ["Subhas Chandra Bose",
      "Mohan Singh",
      "Chandra Shekhar Azad",
      "Bhagat Singh"],
    answerOpt: 'Mohan Singh'
  },
  {
    question: "Who was the second Prime Minister of India? ",
    answer: ["Indira Gandhi",
      "Lal Bahadur Shastri",
      "Gulzarilal Nanda",
      "Rajendra Prasad"],
    answerOpt: 'Lal Bahadur Shastri'
  },
  {
    question: " Who is the chief architect of the Indian Constitution? ",
    answer: ["Bhimrao Ambedkar",
"Sardar Vallabhbhai Patel",
"Abul Kalam Azad",
"Jawaharlal Nehru"],
    answerOpt: 'Bhimrao Ambedka'
  },
  {
    question: "India adopted the Constitution on ",
    answer: ["15th August 1947",
"26th August 1947",
"26th January 1950",
"15th August 1950"],
    answerOpt: '26th January 1950'
  },
  {
    question: "The first woman Prime Minister of India, _____  ",
    answer: ["Indira Gandhi",
"Sarojini Naidu",
"Annie Besant",
"Sucheta Kriplani"],
    answerOpt: 'Indira Gandhi'
  }
]


questions.map((DB) => {
  let userAnswer = readlineSync.keyInSelect(DB.answer, DB.question)
  if (DB.answer[userAnswer] === DB.answerOpt) {
    score = score + 1
    console.log("Yes, you are right")
    console.log("And your score is: " + score)
  } else {
    console.log("Oops, you are wrong")
    console.log("And your score is: " + score)
  }
  console.log("--------------------------------");
})

console.log("finally Yor score is : " + score)





