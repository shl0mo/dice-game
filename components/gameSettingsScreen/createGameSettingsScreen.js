function createGameSettingsScreen() {
    const configScreenInnerHTML = `
        <div class="game-settings-container">
            <h1>Dice Game Configuration</h1>
            <form id="game-settings-form">
                <label for="num-players">Number of Players:</label>
                <select id="num-players" name="num-players" required>
                    <option value="" disabled selected>Select number of players</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                
                <label for="num-throws">Number of Throws per Player:</label>
                <select id="num-throws" name="num-throws" required>
                    <option value="" disabled selected>Select number of throws</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                
                <label for="num-dice">Number of Dice:</label>
                <select id="num-dice" name="num-dice" required>
                    <option value="" disabled selected>Select number of dice</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                
                <button type="button" onClick="defineGameSettings()">Start Game</button>
            </form>
        </div>
    `
    addChildByParentClass(
        'screen',
        configScreenInnerHTML
    )
}