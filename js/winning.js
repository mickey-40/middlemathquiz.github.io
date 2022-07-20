const playername = localStorage.getItem('name')
const playerscore = localStorage.getItem('score')

document.querySelector('.playerScore').innerText = `${playerscore} points`

document.querySelector('.playerName').innerText = `${playername}'s Score`

const playerInfo = JSON.parse(localStorage.getItem('player')) 

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

console.log(playerInfo)
console.log(highScores)

const score = {
  score : playerInfo.score,
  name : playerInfo.name
}
console.log(score)

highScores.push(score)
console.log(highScores)

highScores.sort((a,b) => {
  return b.score - a.score;
})

highScores.splice(5)

console.log(highScores)