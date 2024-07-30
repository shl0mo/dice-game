function getGameStatus() {
    const gameStatus = JSON.parse(sessionStorage.gameStatus)
    return gameStatus
  }