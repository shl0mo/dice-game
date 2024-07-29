function getNumPlayersSetting () {
    const gameSettings = JSON.parse(sessionStorage.gameSettings)
    const numPlayersSetting = gameSettings.numPlayers
    return numPlayersSetting
}