function getMaxPlayerScoreIndexes() {
    const maxIndexes = []
    const playerScores = getPlayerScores()
    const maxScore = playerScores.reduce(
        (a, b) => Math.max(a, b), -Infinity
    )
    for (let i = 0; i < playerScores.length; i++) {
        if (playerScores[i] === maxScore) {
            maxIndexes.push(i)
        }
    }
    return maxIndexes
}