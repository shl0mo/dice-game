function login () {
    const username = document.querySelector('#username').value

    if (!username) {
        alert('Todos os campos devem ser preenchidos')
        return
    }

    loginPlayer(username)
    
    const numPlayersSetting = getNumPlayersSetting()
    const numLoggedPlayers = getNumLoggedPlayers()
    
    if (numLoggedPlayers < numPlayersSetting) {
        createNewLoginScreen()
    } else {
        if (numPlayersSetting === 1) {
            addComputerAsPlayer()   
        }
        initPlaying()
    }
}

function addComputerAsPlayer() {
    const gameStatus = getGameStatus()
    gameStatus.playerUsernames.push('Computador')
    gameStatus.playerScores.push(0)
    sessionStorage.gameStatus = JSON.stringify(gameStatus)
}

function checkUsername(
    username
) {
    const playerUsernames = getPlayerUsernames()
    if (!playerUsernames.includes(username)) {
        return true
    }
    return false
}


function loginPlayer (
    playerUsername
) {
    const gameStatus = getGameStatus()
    gameStatus.playerUsernames.push(playerUsername)
    gameStatus.playerScores.push(0)
    sessionStorage.gameStatus = JSON.stringify(gameStatus)
}


function createNewLoginScreen() {
    const loginScreen = document.querySelector('.login-container')
    loginScreen.remove()
    createLoginScreen()
}