function createDiceContainer() {
    const diceContainerInnerHTML = `
        <div class="dice-container">
            <div class="dice-box">
            </div>
            <div>
                <button onclick="rollDice()">Roll Dice</button>
            </div>
        </div>
    `
    addChildByParentClass(
        'screen',
        diceContainerInnerHTML
    )
}