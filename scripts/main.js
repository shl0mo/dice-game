sessionStorage.gameSettings = JSON.stringify({
  numPlayers: 0,
  numThrows: 0,
  numDice: 0
})


sessionStorage.gameStatus = JSON.stringify({
  playerUsernames: [],
  playerPoints: [],
  diceThrows: 0
})


function addEventListeners() {
  document.getElementById('ok').addEventListener('click', rollDie)
}