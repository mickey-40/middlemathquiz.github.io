const nameScore = document.querySelector('.name')
const questionElement = document.querySelector('.question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
let randomQuestion
let currentQuestionIndex
let askedQuestion = []
let questionNum = 1



class Player {
  constructor(label, score =0) {
    this.label = label;
    this.score = score;
  }
}
const player1 = new Player()

//This Event Listener starts the game after player enters name.
document.querySelector('.submit').addEventListener('click', function(){
  document.querySelector('.nameEntry').classList.add('hidden')
  document.querySelector('.gameContainer').classList.remove('hidden')
  player1.label = document.querySelector('#name').value
  document.querySelector('.name').innerText = player1.label + ' ' + player1.score
  setInterval(timer, 1000)
  setInterval(scoreCounter, 1000)
  getquestion()
  
})
//A function that puts a random question with the answer choices
getquestion = () => {
  
  randomQuestion = Math.floor(Math.random() * questions.length)
  currentQuestionIndex = questions[randomQuestion]
  askedQuestion.push(currentQuestionIndex)
  questionElement.innerText = `${questionNum}. ${currentQuestionIndex.question}`
  //enters the answer choices
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestionIndex['choice' + number]
  })
  //takes current question out of the array
  questions.splice(currentQuestionIndex,1)
  questionNum++
  


}



// Set timer to count down from 30
let startingTimer = 30;
//Set maxScore to 1000
let maxScore = 1000;

// Update the count down every 1 second
timer = () => {
    
  // Output the result in an element with id="timer"
  document.querySelector("#timer").innerText = `${startingTimer} seconds`;
  //increments timer minus 1
  startingTimer -= 1
    
  // If the count down is over, write some text 
  if (startingTimer < 0) {
    clearInterval(timer);
    document.querySelector("#timer").innerText = `EXPIRED`;
  }
}
//Set interval for the points aviable to go down every second until 0.
scoreCounter = () => {
  document.querySelector('.scoremeter').innerText = maxScore + ' points left';
  maxScore -= 33;

  if (maxScore < 0) {
    clearInterval(scoreCounter)
    document.querySelector('.scoremeter').innerText = 0;
  }
}
















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

  }
]



