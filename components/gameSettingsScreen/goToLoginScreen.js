function goToLoginScreen () {
    const gameSettingsContainer = document.querySelector('.game-settings-container')
    gameSettingsContainer.remove()
    createLoginScreen()
}