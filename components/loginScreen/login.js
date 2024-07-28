function login () {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (!username || !password) {
        alert('Todos os campos devem ser preenchidos')
        return
    }

    const loginAuthorized = true

    if (loginAuthorized) {
        const playersUsernames = JSON.parse(sessionStorage.playersUsernames)
        playersUsernames.push(username)
        sessionStorage.playersUsernames = JSON.stringify(playersUsernames)
    }

    const gameSettings = JSON.parse(sessionStorage.gameSettings)
    const numPlayers = gameSettings.numPlayers

    const numLoggedPlayers = parseInt(sessionStorage.numLoggedPlayers)

    sessionStorage.numLoggedPlayers = numLoggedPlayers + 1
    
    if (sessionStorage.numLoggedPlayers < numPlayers) {
        createNewLoginScreen()
    } else {
        initPlaying()
    }
}


function createNewLoginScreen() {
    const loginScreen = document.querySelector('.login-container')
    loginScreen.remove()
    createLoginScreen()
}