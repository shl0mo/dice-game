function createGameOverMessageBox(message) {
    const gameOverMessageBox = `
        <div class="winner-announcement standard-form-container">
            <h1>${message}</h1>
            <button onclick="playAgain()">Jogar Novamente</button>
        </div>
        <div class="confetti"></div>
    `
    addChildByParentClass(
        'screen',
        gameOverMessageBox
    )
}


function confettiAnimation() {
    const confettiContainer = document.querySelector('.confetti');
    const confettiColors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1bd', '#f9bec7']

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div')
        confettiPiece.classList.add('confetti-piece')
        confettiPiece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)]
        confettiPiece.style.left = `${Math.random() * 100}%`
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`
        confettiContainer.appendChild(confettiPiece)
    }
}


function playAgain() {
    const screen = document.querySelector('.screen')
    screen.classList.remove('screen-dice-container-grid')
    screen.innerHTML = ''
    resetSessionStorageObjects()
    createGameSettingsScreen()
}


function resetSessionStorageObjects() {
    sessionStorage.clear()
    defineSessionStorageObjects()
}