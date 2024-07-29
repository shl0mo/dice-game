function login () {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (!username || !password) {
        alert('Todos os campos devem ser preenchidos')
        return
    }

    const loginAuthorized = true

    if (loginAuthorized) {
        loginPlayer(username)
    }

    const numPlayersSetting = getNumPlayersSetting()
    const numLoggedPlayers = getNumLoggedPlayers()
    
    if (numLoggedPlayers < numPlayersSetting) {
        createNewLoginScreen()
    } else {
        initPlaying()
    }
}


function loginPlayer (
    playerUsername
) {
    const gameStatus = JSON.parse(sessionStorage.gameStatus)
    gameStatus.playerUsernames.push(playerUsername)
    sessionStorage.gameStatus = JSON.stringify(gameStatus)
}


function createNewLoginScreen() {
    const loginScreen = document.querySelector('.login-container')
    loginScreen.remove()
    createLoginScreen()
}