//targets where the high scores are going to go
const highScoreList = document.querySelector('#highScoreList')
//get the high score array from localStorage
const highScore = JSON.parse(localStorage.getItem('highScores')) || []


console.log(highScore.length)


//a function that goes through the array in localStorage and list it in the unordered list

highScoreList.innerHTML = highScore.map(playerInfo => {
  return `<li>${playerInfo.name}-${playerInfo.score}</li>`
}).join('')

