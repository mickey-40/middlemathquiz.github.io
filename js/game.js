//Set variables globally so they could be used in multible functions
let playerName = document.querySelector('#name')
let nameBox = document.querySelector('.nameEntry')
let gameBox = document.querySelector('.gameContainer')
let questionElement = document.querySelector('.question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
let scoreBoard = document.querySelector('.name')
let playerEndingScore = document.querySelector('.playerScore')
let timerInterval
let scoreInterval
let startingTimer 
let startingScore 
let maxQuesitons = 5
let randomQuestion
let usedQuestionsArray = []
let answerNumber

//List of questions in an array
const questions = [
  {
    question:'If 3a + 2 = a + 6, then which of these is incorrect?',
    choice1:'3a + 2 - a = 6',
    choice2:'2a = 6 + 2',
    choice3:'2a = 4',
    choice4:'a = 4/2',
    answer: 2,

  },
  {
    question:'What is the name give to an equation that does not balance on either side of the equals sign?',
    choice1:'Inaccurate',
    choice2:'Inept',
    choice3:'Invalid',
    choice4:'There is no such thing',
    answer: 4,

  },
  {
    question:'If x + 4 = b, what is the value of x?',
    choice1:'4b',
    choice2:'-4b',
    choice3:'b + 4',
    choice4:'b - 4',
    answer: 4,

  },
  {
    question:'An equation must have two equal what?',
    choice1:'Examples',
    choice2:'Expressions',
    choice3:'Extensions',
    choice4:'Extractions',
    answer: 2,

  },
  {
    question:'If you are given an equation, what will you have done to it when you have found the answers?',
    choice1:'Soaked it',
    choice2:'Solved it',
    choice3:'Squared it',
    choice4:'Stuffed it',
    answer: 2,

  },
  {
    question:'Which of these is not an equation?',
    choice1:'6/3 = 2',
    choice2:'65 + 35 = 100',
    choice3:'5 - 6 = 8 - 9',
    choice4:'2 x 3 = 7 - 2',
    answer: 4,

  },
  {
    question:'< is the sign that means what?',
    choice1:'Less than',
    choice2:'Greater than',
    choice3:'Less than or equal to',
    choice4:'Greater than or equal to',
    answer: 1,

  },
  {
    question:'If x > 3, what is the smallest integer that x can be?',
    choice1:'2',
    choice2:'3',
    choice3:'4',
    choice4:'5',
    answer: 3,

  },
  {
    question:'If 4x + 3 < 15, which of the following expressions are incorrect?',
    choice1:'4x < 15 - 3',
    choice2:'4x < 12',
    choice3:'x < 3',
    choice4:'x > 3',
    answer: 4,

  },
  {
    question:' A small submarine started its dive at sea level and descended 30 feet per minute. Which integer represents the submarine’s depth after seven minutes?',
    choice1:'-210 feet',
    choice2:'-23 feet',
    choice3:'37 feet',
    choice4:'210 feet',
    answer: 1,

  },
  {
    question:'Which rational number is the greatest?',
    choice1:'0.55',
    choice2:'0.6',
    choice3:'9/20',
    choice4:'1/2',
    answer: 2,

  },
  {
    question:'What is the value of the expression 8x – 10 when x = 5?',
    choice1:'3',
    choice2:'4',
    choice3:'30',
    choice4:'50',
    answer: 3,

  },
  {
    question:'The attendance at three concerts was 876, 647, and 856. Which expression shows how to estimate the total attendance at the concerts?',
    choice1:'800 + 600 + 800',
    choice2:'900 + 700 + 900',
    choice3:'900 + 600 + 900',
    choice4:' 1,000 + 700 + 900',
    answer: 3,

  },
  {
    question:'What is 35% of 80?',
    choice1:'28',
    choice2:'45',
    choice3:'115',
    choice4:'2800',
    answer: 1,

  },
  {
    question:'Which expression represents 4 less than twice a number, n ?',
    choice1:'4 - n',
    choice2:'n - 4',
    choice3:'4 - 2n',
    choice4:'2n - 4',
    answer: 4,

  },
  {
    question:'Johnny jogged around the track 16 times. Each lap is 400 meters. Which process could determine the total distance he jogged?',
    choice1:'add 16 and 400',
    choice2:'divide 400 by 16',
    choice3:'multiply 400 by 16',
    choice4:'subtract 16 from 400',
    answer: 3,

  },
  {
    question:' A pizza is divided into 12 slices. If there are eight slices left, what fraction of the pizza is remaining?',
    choice1:'3/4',
    choice2:'2/3',
    choice3:'1/2',
    choice4:'2/4',
    answer: 2,

  },
  {
    question:'In a recipe, you have to add one cup of sugar for every four cups of flour. What is the ratio of sugar to flour?',
    choice1:'4:1',
    choice2:'2:4',
    choice3:'1:2',
    choice4:'1:4',
    answer: 4,

  },
  {
    question:'It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?',
    choice1:'Two lawns',
    choice2:'Five lawns',
    choice3:'Ten lawns',
    choice4:'Six lawns',
    answer: 2,

  },
  {
    question:'20 = 3x + 8; x = ?',
    choice1:'3',
    choice2:'2',
    choice3:'4',
    choice4:'5',
    answer: 3,

  },
  {
    question:'If y = 3x + 12 and y = 5, what is x?',
    choice1:'7/3',
    choice2:'3/7',
    choice3:'-7',
    choice4:'-7/3',
    answer: 4,

  }
]

class Player {
  constructor(name, score = 0){
    this.name = name,
    this.score = score
  }
}

const player1 = new Player()

//Function that stores the player name and starts the game.
const enterName = () => {
  //Assigns value of the input to player1 name
  player1.name = playerName.value
  localStorage.setItem('name', player1.name)
  
  //This will add a class of hidden so it disappears
  nameBox.classList.add('hidden')
  //This will remove a class of hidden so it appears
  gameBox.classList.remove('hidden')
  //Calls getQuestion function to start the game.
  console.log(player1)
  getNewQuestion()
}
//count down timer function
const timer = () => {
  
  //Puts starting timer in the game.html
  document.querySelector("#timer").innerText = `${startingTimer} seconds`;
  //increments timer minus 1
  startingTimer -= 1
    
  // If the count down is over, write some text 
  if (startingTimer < 0) {
    clearInterval(timerInterval);
    // document.querySelector("#timer").innerText = `EXPIRED`;
  }
}
const scoreDecreasing = () => {
  //Puts starting score in the game.html
  document.querySelector('.scoremeter').innerText = `${startingScore} points`
  //increments score minus 33 points per second
  startingScore -= 33

  if (startingScore <= 0){
    startingScore = 0
    document.querySelector('.scoremeter').innerText = `${startingScore} points`
    clearInterval(scoreInterval)
  }
}
const startIntervals = () => {
  timerInterval = setInterval(timer, 1000)
  scoreInterval = setInterval(scoreDecreasing, 1000)
}
const clearIntervals = () => {
  clearInterval(timerInterval)
  clearInterval(scoreInterval)
}

const getRandomQuestion = () => {
  console.log(questions.length)
  let randomNum = Math.floor(Math.random() * questions.length)
  randomQuestion = questions[randomNum]
  usedQuestionsArray.push(randomQuestion)
  console.log('usedQuestionsArray length: ' ,usedQuestionsArray.length)
  console.log(usedQuestionsArray)
  questions.splice(randomQuestion,1)
  console.log('question Array length: ', questions.length)
  console.log(questions)
  return randomQuestion
}

const getNewQuestion = () => {
  //Assigns name and score to the game screen
  scoreBoard.innerText = player1.name + ' ' + player1.score
  if (usedQuestionsArray.length >= maxQuesitons){
    localStorage.setItem('score', player1.score)
    console.log(player1)
    localStorage.setItem('player', JSON.stringify(player1))
    location.href = 'winning.html'
    return
   
  }
  startingTimer = 30
  startingScore = 1000
  startIntervals()
  getRandomQuestion()
  questionElement.innerText = `${usedQuestionsArray.length}. ${randomQuestion.question}`
  choices.forEach(function(choice){
    answerNumber = choice.dataset['number']
    choice.innerText = randomQuestion['choice' + answerNumber]
  })
  
  
}

 

choices.forEach(function(choice){
  choice.addEventListener('click', e => {
    selectedChoice = e.target
    selectedAnswer = selectedChoice.dataset['number']
    if (selectedAnswer == randomQuestion.answer){
      console.log('right')
      selectedChoice.parentElement.classList.add('correct')
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove('correct')

      }, 100);
      player1.score += startingScore
      console.log(player1.score)
      clearIntervals()
      getNewQuestion()
    } else {
      console.log('wrong')
      selectedChoice.parentElement.classList.add('incorrect')
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove('incorrect')

      }, 100);
      clearIntervals()
      getNewQuestion()

    }
  })
})

