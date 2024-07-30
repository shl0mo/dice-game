function getNumThrowsSetting () {
    const gameSettings = getGameSettings()
    const numThrows = parseInt(gameSettings.numThrows)
    return numThrows
}