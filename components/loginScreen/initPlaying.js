function initPlaying () {
    const loginScreen = document.querySelector('.login-container')
    const screen = document.querySelector('.screen')
    loginScreen.remove()
    screen.classList.add('screen-dice-container-grid')
    createDiceContainer()
    createGameInfoContainer()
    createPlayerTurnContainer()
}