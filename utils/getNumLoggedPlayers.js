function getNumLoggedPlayers () {
    const gameStatus = JSON.parse(sessionStorage.gameStatus)
    const numLoggedPlayers = gameStatus.playerUsernames.length
    return numLoggedPlayers
}