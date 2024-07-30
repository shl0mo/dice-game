function getNumLoggedPlayers () {
    const gameStatus = getGameStatus()
    const numLoggedPlayers = gameStatus.playerUsernames.length
    return numLoggedPlayers
}