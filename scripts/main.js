sessionStorage.gameSettings = JSON.stringify({
  numPlayers: 0,
  numThrows: 0,
  numDice: 0
})

sessionStorage.gameStatus = JSON.stringify({
  playerUsernames: [],
  playerScores: [],
  diceThrows: 0,
  playerTurn: 0
})


function addEventListeners() {
  document.getElementById('ok').addEventListener('click', rollDie)
}


function game () {

}