function createDiceContainer() {
    const diceContainerInnerHTML = `
        <div class="dice-container">
            <div class="dice-box">
            </div>
            <div id="roll-dice-button-container">
                <button onclick="rollDice()" id="roll-dice-button">Roll Dice</button>
            </div>
        </div>
    `
    addChildByParentClass(
        'screen',
        diceContainerInnerHTML
    )

    const gameSettings = JSON.parse(sessionStorage.gameSettings)
    const numDice = gameSettings.numDice
    for (let i = 1; i <= numDice; i++) {
        createDie(`die-${i}`)
    }
}