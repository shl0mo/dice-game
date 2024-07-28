function goToGameSettings () {
    const initialScreen = document.querySelector('.initial-screen-container')
    initialScreen.remove()
    createGameSettingsScreen()
}