function getCurrentPlayerUsername () {
    const currentPlayerIndex = getCurrentPlayerIndex()
    const currentPlayerUsername = getPlayerUsername(currentPlayerIndex)
    return currentPlayerUsername
}