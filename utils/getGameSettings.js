function getGameSettings () {
    const gameSettings = JSON.parse(sessionStorage.gameSettings)
    return gameSettings
}