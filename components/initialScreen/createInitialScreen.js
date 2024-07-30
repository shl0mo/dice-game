function createInitialScreen() {
    const initialScreenInnerHTML = `
        <div class="initial-screen-container">
            <button onclick="goToGameSettings()" class="standard-box-shadow">Play Game</button>
        </div>
    `
    addChildByParentClass(
        'screen',
        initialScreenInnerHTML
    )
}