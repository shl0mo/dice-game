function createScoreRankingContainer () {
    removeScoreRankingContainerIfExists()
    let playerUsernames = getPlayerUsernames()
    let playerScores = getPlayerScores()
    let scoreRankingInnerHTML = `
        <div class="ranking-container">
            <h1>Ranking de pontos</h1>
            <table class="ranking-container-table">
                <thead>
                    <th>
                        Username
                    </th>
                    <th>
                        Pontuação
                    </th>
                </thead>
                <tbody>
    `
    while (playerUsernames.length > 0) {
        const maxScore = Math.max(...playerScores)
        const maxScoreIndex = playerScores.indexOf(maxScore)
        const maxScorePlayerUsername = playerUsernames[maxScoreIndex]
        scoreRankingInnerHTML += `
            <tr>
                <td>
                    ${maxScorePlayerUsername}
                </td>
                <td>
                    ${maxScore}
                </td>
            </tr>
        `
        playerUsernames.splice(maxScoreIndex, 1)
        playerScores.splice(maxScoreIndex, 1)
    }
    scoreRankingInnerHTML += `
                </tbody>
            </table>
        </div>
    `
    addChildByParentClass(
        'game-info-container',
        scoreRankingInnerHTML
    )
}


function removeScoreRankingContainerIfExists() {
    const rankingContainer = document.querySelector('.ranking-container')
    if (rankingContainer) {
        rankingContainer.remove()
    }
}