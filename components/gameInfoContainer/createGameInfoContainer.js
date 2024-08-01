function createGameInfoContainer () {
    const gameInfoContainerInnerHTML = `
        <div class="game-info-container">
        <h1 class="round-description">Rodada 1/5</h1>
        </div>
    `
    addChildByParentClass(
        'screen',
        gameInfoContainerInnerHTML
    )   
}