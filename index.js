var read = require("readline-sync")
var chalk = require("chalk")
var name= read.question(chalk.red("what is your name : "))
var wlcome = console.log(chalk.green( "WELCOME TO THE QUIZ " +name +" ALL THE BEST"))
console.log(chalk.blue("Please answer the following question with correct option.---------------------------------------"))



var score = 0
function quiz( question, answer)
{ 
  var userAnswer= read.question(question +" Choose one of the following option ")
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    
    console.log(chalk.red("you are right"))
    score= score+ 1
    console.log(chalk.bold("your score is " + score))
  } else{
    console.log(chalk.red("sorry you are wrong, the right answer is option :" +answer))
    score= score
    console.log(chalk.bold("your score is " + score))
  } console.log(chalk.red("-----------------------------------------"))
}
//quiz("aaaaaaaa ", "b")

var quizarr =[
  {
    question:"1. From Which platform at kings cross does the Hogwarts train depart ?(a) gringotts (b) wand Street (c)nine and three-quaters",
    answer: "c",

  },
  {  question:"2. Harry has a scar on his forehead.What shape is it ? (a)Lightning bolt (b) Shinning star (c)Like a pig tail",
    answer: "a",

  },
  { question:"3.Hermiones parents are not wizards.What non-wizard jobs they do? (a)Physician (b) Tailor (c) Dentists ",
    answer: "c",
  },
  {
    question:"4. In second year Hermione drank polyjuice portion that gave her lasting rat like features?(a)True (b)False (c) Both ",
    answer: "b",

  },
  { question:"5.On a Quidditch pitch how many goal posts are there in total? (a)Four (b)Five (c) Six ",
    answer: "c",
  }, 
  { question:"6. What did Dumbledore leave to ron in his will? (a)The Deluminator (b)The Pensieve (c)The Golden Snitch ",
    answer: "a",
  },
   { question:"7. What gift does Hagrid gives to Harry in Diagon Alley? (a)A Cat (b)An Owl (c) A Horse",
    answer: "b",
  },  
   { question:"8. What does Hagrid name his baby dragon?(a)Fluffy (b) Norbert (c)Hedwig",
    answer: "b",
  },
  { question:"9.What is the term for non magical peoples?(a)Dentists (b)Non wizards(c)Muggles ",
    answer: "c",
  },
  { question:"10. Which spells can Unlock doors?(a)Wingardium Leviosa (b)Alohomora (c)Wand",
    answer: "b",
  }, 

]

 for(var i=0; i< quizarr.length; i++)
  {
   var currQuestion = quizarr[i];
   quiz(currQuestion.question, currQuestion.answer)
  }
   console.log(chalk.bold.yellow.underline("your score is " + score))

var highScore= [
  {
    name: "harry",
    scores: "10",
  },
  {
    name: "ron",
    scores:"9",
  }

]
for(j=0;j<highScore.length;j++)
{
  console.log("LEADER BOARD ")
  console.log(highScore[j])
  { 
    
  }
}console.log(chalk.blue.bold(" SEND A SCREENSHOT IF THE HIGHSCORE BEATEN  "))
