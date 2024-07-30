function getPlayerUsernames() {
    const gameStatus = getGameStatus()
    const playerUsernames = gameStatus.playerUsernames
    return playerUsernames
}