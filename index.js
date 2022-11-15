const readlineSync = require('readline-sync');
const chalk = require('chalk'); 

//Get name before start
let userName = readlineSync.question(chalk.blue("Your name?? "));
console.log(chalk.yellowBright(`Welcome ${userName} ! \nAre you a true anime fan? Let's find out...\n`));


var start =  readlineSync.question("Press enter to start! ");
let score = 0;

var questions = [
  {
    question:`\nWhich anime series revolves around a boy who sells his soul to a demon? `,
    answer:'black butler',
  },
  {
    question:`\nHow many Dragon Balls are there? `,
    answer:'7',
  },
  {
    question:`\nWhose body gained the properties of rubber after unintentionally eating a Devil Fruit? (enter full name) `,
    answer:'monkey d luffy',
  },
  {
    question:`\nWhich anime series revolves around the Elric brothers? `,
    answer:'fullmetal alchemist',
  },
  {
    question:`\nWhich character in Cowboy Bebop is a genetically-engineered Pembroke Welsh Corgi with human-like intelligence? `,
    answer:'ein',
  },
	{
    question:`\nWho is the navigator of the Straw Hat Pirates? `,
    answer:'nami',
  },
	{
    question:`\nWhich anime series centers around a warrior named Kenshiro? `,
    answer:'fist of the north',
  },
	{
    question:`\nWhich anime series involves a family possessed by the animals of the Chinese zodiac? `,
    answer:'fruits basket',
  },
	{
    question:`\nWho is the director of Your Name `,
    answer:'makoto shinkai',
  },
	{
    question:`\nWho is the main protagonist of the Pokémon anime series? (full name)`,
    answer:'ash ketchum',
  },
];

for (var ques = 0; ques<questions.length; ques++ ) {
  quiz(questions[ques].question,questions[ques].answer);
  // console.log(questions[ques].question)
}

console.log('\n' + userName + "'s score is : " + score);
if(score < 3) {
	console.log(chalk.red("\nDo you really watch anime bro? I highly doubt it..."));
} 
if (score > 7) {
	console.log(chalk.yellowBright("You are a legend"));
} 
if(score <= 7 && score >= 3) {
	console.log(chalk.blue("Guess you are a newbie."));
}

function quiz (question, answer) {
  var userInput = readlineSync.question(question);
  if (userInput.toUpperCase() === answer.toUpperCase()) {
    score = score+1;
    console.log(chalk.green("Yep! That's correct."));
  }else{
    console.log(chalk.red("Nah! That's incorrect."));
  }
}