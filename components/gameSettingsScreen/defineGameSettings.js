function defineGameSettings () {
    const numPlayers = document.getElementById('num-players').value
    const numThrows = document.getElementById('num-throws').value
    const numDice = document.getElementById('num-dice').value
        
    if (!numPlayers || !numThrows || !numDice) {
        alert('Todos os campos devem ser preenchidos')
        return
    }
        
    const gameSettings = {
        numPlayers: parseInt(numPlayers),
        numThrows: parseInt(numThrows),
        numDice: parseInt(numDice)
    }

    sessionStorage.setItem(
        'gameSettings',
        JSON.stringify(gameSettings)
    )
    goToLoginScreen()
}