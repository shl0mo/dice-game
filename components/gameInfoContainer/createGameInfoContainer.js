function createGameInfoContainer () {
    const gameInfoContainerInnerHTML = `
        <div class="game-info-container">
        </div>
    `
    addChildByParentClass(
        'screen',
        gameInfoContainerInnerHTML
    )   
}