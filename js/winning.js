let playerscore = localStorage.getItem('finalScore')

document.querySelector('.playerScore').innerText = `${playerscore} points`
let playername = localStorage.getItem('name')
document.querySelector('.playerName').innerText = `${playername}'s Score`