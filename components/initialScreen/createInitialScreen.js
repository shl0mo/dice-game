function createInitialScreen() {
    const initialScreenInnerHTML = `
        <div class="initial-screen-container">
            <button onclick="goToGameSettings()" class="standard-box-shadow">Jogar</button>
        </div>
    `
    addChildByParentClass(
        'screen',
        initialScreenInnerHTML
    )
}