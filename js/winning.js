//calling the player's name and score from storage
const playername = localStorage.getItem('name')
const playerscore = localStorage.getItem('score')
//puts player's score and name on the screen
document.querySelector('.playerScore').innerText = `${playerscore} points`

document.querySelector('.playerName').innerText = `${playername}'s Score`
//calls the Player class information
const playerInfo = JSON.parse(localStorage.getItem('player')) 
//calls a array from storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


console.log(playerInfo)
console.log(highScores)
//creates an object to place the player information
const score = {
  score : playerInfo.score,
  name : playerInfo.name
}
console.log(score)
//puts player information into an array
highScores.push(score)
console.log(highScores)
//puts the scores in decending order
highScores.sort((a,b) => {
  return b.score - a.score;
})
//limits the array to the top 10
highScores.splice(10)

console.log(highScores)
//stores the highScores array into localStorage
localStorage.setItem('highScores', JSON.stringify(highScores))
console.log(highScores)


//targets where the high scores are going to go
const highScoreList = document.querySelector('#highScoreList')
//get the high score array from localStorage
const highScore = JSON.parse(localStorage.getItem('highScores')) || []


console.log(highScore.length)


//a function that goes through the array in localStorage and list it in the unordered list

highScoreList.innerHTML = highScore.map(playerInfo => {
  return `<li>${playerInfo.name}-${playerInfo.score}</li>`
}).join('')
  
