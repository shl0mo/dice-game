function getPlayerScore (
    playerIndex
) {
    const playerScores = getPlayerScores()
    const playerScore = parseInt(playerScores[playerIndex])
    return playerScore
}