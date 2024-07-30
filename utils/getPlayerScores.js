function getPlayerScores() {
    const gameStatus = getGameStatus()
    const playerScores = gameStatus.playerScores
    return playerScores
}