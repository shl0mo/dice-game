function getDiceThrowsStatus() {
    const gameStatus = getGameStatus()
    const diceThrows = parseInt(gameStatus.diceThrows)
    return diceThrows
}