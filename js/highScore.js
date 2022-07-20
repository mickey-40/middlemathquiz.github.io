const highScoreList = document.querySelector('#highScoreList')
const highScore = JSON.parse(localStorage.getItem('highScores')) || []
const newListItem = document.createElement('li')
const listText = 
console.log(highScore.length)


//a function that goes through the array in localStorage and list it in the unordered list

highScoreList.innerHTML = highScore.map(playerInfo => {
  return `<li>${playerInfo.name}-${playerInfo.score}</li>`
}).join('')

