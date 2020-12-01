var readlineSync=require('readline-sync');
var chalk=require('chalk');

var user=readlineSync.question(chalk.yellow("What's your name? : "));
console.log("Welcome "+chalk.blue(user) +" to the quiz.");
console.log("");
console.log(chalk.bgYellow("Rules: "));
console.log(chalk.red("1.You will get 2 marks for each correct answer."));
console.log(chalk.red("2. 1 mark will deduct for wrong answer"));

console.log(" ");


var score=0;

console.log(chalk.yellowBright(`LEADERBOARD:
1:Kshitij: 12 points
2.Kshitij: 10 points
3:Kshitij: 6 points`));

function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.magentaBright("Right!"));
    score=score+2;
  }else{
    console.log(chalk.magentaBright("Wrong!");
    score=score-1;
  }
  console.log("--------");
}
 
var questions = [
  {
  question :chalk.cyanBright( `
  What is the jersy number of dhoni?
  A: 7
  B: 10
  C: 18
   `),
  answer :"A"},
{ question :chalk.cyanBright(`When did dhoni make ODI debut?
A: 2003
B: 2004
C: 2005
`),
answer: "B"},
{ question:chalk.cyanBright(`Who broke the record of dhoni of scoring highest run in second inning?
A:Rohit Sharma
B:Virat Kohli
C:Shane watson
`), 
answer:"C"},
{question:chalk.cyanBright(`When did dhoni get his "A" contract from bcci?
A: 2005
B: 2007
C: 2011
`),
answer:"b"},
{ question:chalk.cyanBright(`For which IPL team dhoni play?
A: CSK
B: MI
C: RCB
`),
answer:"A"},
{ question:chalk.cyanBright(`What is the nick name of dhoni?
A: Cheeku
B: Mahi
C: Jumbo
`),
answer:"B"}];


for(var i=0; i<questions.length;i++){
  var ques=questions[i];
  play(ques.question, ques.answer)
  
}
console.log(chalk.green("Congratulations!! you scored:" +chalk.underline(score) +" points"));
console.log("-----------");
console.log(chalk.whiteBright.bgBlue("Thank you for playing the game. If you have scored more than highest score then send me screenshot to get your name featured in leaderboard!"));