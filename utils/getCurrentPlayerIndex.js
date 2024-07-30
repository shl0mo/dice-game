function getCurrentPlayerIndex() {
    const gameStatus = getGameStatus()
    const currentPlayerIndex = parseInt(gameStatus.currentPlayerIndex)
    return currentPlayerIndex
}