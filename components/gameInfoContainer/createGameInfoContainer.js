function createGameInfoContainer () {
    const gameInfoContainerInnerHTML = `
        <div class="game-info-container">
        <h1 class="round-description"></h1>
        </div>
    `
    addChildByParentClass(
        'screen',
        gameInfoContainerInnerHTML
    )   
}