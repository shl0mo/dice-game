function createGameSettingsScreen() {
    const configScreenInnerHTML = `
        <div class="game-settings-container">
            <h1>Confgurações da Partida</h1>
            <form id="game-settings-form">
                <label for="num-players">Número de Jogadores:</label>
                <select id="num-players" name="num-players" required>
                    <option value="" disabled selected>Selecione o número de jogadores</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                
                <label for="num-throws">Número de lançamentos por jogador</label>
                <select id="num-throws" name="num-throws" required>
                    <option value="" disabled selected>Selecione o número de lançamentos</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                
                <label for="num-dice">Número de dados</label>
                <select id="num-dice" name="num-dice" required>
                    <option value="" disabled selected>Selecione o número de dados</option>
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