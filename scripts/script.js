function addEventListeners() {
  document.getElementById('ok').addEventListener('click', rollDie)
}

sessionStorage.numLoggedPlayers = 0
sessionStorage.playersUsernames = JSON.stringify([])