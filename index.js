var readlinesync = require("readline-sync");
var chalk = require("chalk");


var questions = [{
  question:"What is pied piper? \n a. A story \n b. A song \n c. A lossless compression software \n ",
  ans : "c"  
},{
  question : "What bank chain was Carver notorious for hacking in the past? \n a. Bank of America \n b. Chase Bank \n c. Standard Bank \n ",
  ans : "a"

},{
  question : "Gilfoyle was an undocumented immigrant from what country? \n a. Germay \n b. Canada \n c. Poland \n",
  ans : "b"
},{
  question :"Where did Richard first meet Peter Gregory? \n a. At start up \n b. Outside ted talk \n c. At coffee shop \n",
  ans : "b"
}
];

var score = 0;
var highScore = [{name : "Richard", score :3}];
var name = readlinesync.question("Hey! what's your name ?  ");

console.log(chalk.hex("#FF9A12").bold("Hi "+ name + "! Welcome to Silicon Valley quiz"));

var start = readlinesync.question(chalk.green("Press Enter to get started"));

for(var i = 0; i < questions.length;i++){
  console.log(questions[i]['question']);
  var ans = readlinesync.question("Your answer : ");
  isCorrect(ans, questions[i]);
}

if(score > highScore[0]['score']){
    console.log("Congratulations! you scored higher than" + highScore[0]['name']);
}

console.log(chalk.hex("#12FF3A").underline("Thanks for playing"))

console.log("Do Checkout the highScores : ");
for(var per in highScore){
  console.log(highScore[per]['name'] + " : " + highScore[per]['score'])
}



//check answer
function isCorrect(useranswer, question){
  if( useranswer.toUpperCase() == question['ans'].toUpperCase()){
     score++;
     console.log(chalk.bgYellow("Correct :")+" "+chalk.green(score));
   }
   else{
    
     console.log( chalk.bgRed("Incorrect :")+" "+ chalk.red(score));
   }
   console.log(chalk.hex("#1312FF").bold("----------##-----------"));
}