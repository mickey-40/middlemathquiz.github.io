
const playerscore = localStorage.getItem('score')

document.querySelector('.playerScore').innerText = `${playerscore} points`
const playername = localStorage.getItem('name')
document.querySelector('.playerName').innerText = `${playername}'s Score`
let listScores = []
const score = {
  name : playername,
  score: playerscore
}


// console.log(listString2)


// console.log(scoreObj)

// highScores.push(scoreObj)

// highScores.push(scoreObj)
// console.log(highScores)

// highScores.sort( (a,b) => {
//   return b.score - a.score;
// })

// highScores.splice(10);

// console.log(highScores)

