function createInitialScreen() {
    initialScreenInnerHTML = `
        <div class="initial-screen-container">
            <button onclick="goToGameSettings()">Play Game</button>
        </div>
    `
    addChildByParentClass(
        'screen',
        initialScreenInnerHTML
    )
}