function createPlayerTurnContainer(){
    const currentPlayerUsername = getCurrentPlayerUsername()
    const playerTurnContainerInnerHTML = `
        <div class="player-turn-container">
            <h1>Jogador da vez</h1>
            <div class="player-turn-info">
                <div class="avatar-section">
                    <div class="avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="60px" height="60px">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                        </svg>
                    </div>
                </div>
                <h2 id="current-player-username">${currentPlayerUsername}</h2>
            </div>
        </div>
    `
    addChildByParentClass(
        'game-info-container',
        playerTurnContainerInnerHTML   
    )
}