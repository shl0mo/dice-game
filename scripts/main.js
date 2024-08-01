defineSessionStorageObjects()

function defineSessionStorageObjects() {
  sessionStorage.gameSettings = JSON.stringify({
    numPlayers: 0,
    numThrows: 0,
    numDice: 0
  })
  
  sessionStorage.gameStatus = JSON.stringify({
    playerUsernames: [],
    playerScores: [],
    diceThrows: 0,
    currentPlayerIndex: 0
  })
}


function play() {
  removeRollDiceEventFromRollDiceButton()

  rollDice()
  computeScoresAndUpdateInfo()

  setTimeout(() => {
    computerPlaysIfItsComputerTurn()
  }, 1400)
}


function computerPlaysIfItsComputerTurn() {
  const numPlayersSetting = getNumPlayersSetting()
  const currentPlayerUsername = getCurrentPlayerUsername()
  const onlyOnePlayer = numPlayersSetting === 1
  const computerTurn = currentPlayerUsername === 'Computador'
  if (onlyOnePlayer && computerTurn) {
    rollDice()
    computeScoresAndUpdateInfo()
  }
}


function computeScoresAndUpdateInfo() {
  setTimeout(() => {
    for (const dieId of diceIds) {
      const die = document.getElementById(dieId)
      const faceUpNumber = getFaceUpNumber(die)
      updatePlayerScores(faceUpNumber)
    }
  }, 1100)
  setTimeout(() => {
    updateDiceThrows()
    createScoreRankingContainer()
    const endGame = endGameIfEndConditionIsReached()
    if (!endGame) {
      updateCurrentPlayerIndex()
      updateDisplayedCurrentPlayerUsername()
      addRollDiceEventToRollDiceButton()
    } else {
      removeRollDiceButton()
    }
  }, 1200)
}


function rollDice() {
  diceIds = getDiceIds()
  for (const dieId of diceIds) {
    const die = document.getElementById(dieId)
    const randomX = Math.floor(Math.random() * 4) * 90
    const randomY = Math.floor(Math.random() * 4) * 90
    const randomZ = Math.floor(Math.random() * 4) * 90

    die.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`
  }
}


function addRollDiceEventToRollDiceButton() {
  const rollDiceButton = document.querySelector('#roll-dice-button')
  rollDiceButton.remove()
  const diceButtonInnerHTML = `<button onclick="play()" id="roll-dice-button">Roll Dice</button>`
  addChildByParentId(
    'roll-dice-button-container',
    diceButtonInnerHTML
  )
}

function removeRollDiceButton() {
  const rollDiceButton = document.querySelector('#roll-dice-button')
  rollDiceButton.style.visibility = 'hidden'
}


function removeRollDiceEventFromRollDiceButton() {
  const rollDiceButton = document.querySelector('#roll-dice-button')
  rollDiceButton.remove()
  const diceButtonInnerHTML = `<button id="roll-dice-button">Roll Dice</button>`
  addChildByParentId(
    'roll-dice-button-container',
    diceButtonInnerHTML
  )
}


function updatePlayerScores(playScore) {
  const gameStatus = getGameStatus()
  const currentPlayerIndex = getCurrentPlayerIndex()
  const playerScore = getPlayerScore(currentPlayerIndex)
  gameStatus.playerScores[currentPlayerIndex] = playerScore + playScore
  sessionStorage.gameStatus = JSON.stringify(
    gameStatus
  )
}


function updateDiceThrows() {
  const gameStatus = getGameStatus()
  const diceThrows = parseInt(gameStatus.diceThrows)
  gameStatus.diceThrows = diceThrows + 1
  sessionStorage.gameStatus = JSON.stringify(gameStatus)
}


function updateCurrentPlayerIndex() {
  const gameStatus = getGameStatus()
  const numPlayers = getNumLoggedPlayers()
  const currentPlayerIndex = getCurrentPlayerIndex()
  if (currentPlayerIndex < numPlayers - 1) {
    gameStatus.currentPlayerIndex = currentPlayerIndex + 1
  } else {
    gameStatus.currentPlayerIndex = 0
  }
  sessionStorage.gameStatus = JSON.stringify(gameStatus)
}


function updateDisplayedCurrentPlayerUsername() {
  const currentPlayerUsername = getCurrentPlayerUsername()
  const currentPlayerUsernameElement = document.querySelector('#current-player-username')
  currentPlayerUsernameElement.innerText = currentPlayerUsername
}


function endGameIfEndConditionIsReached() {
  const numLoggedPlayers = getNumLoggedPlayers()
  const numThrowsSetting = getNumThrowsSetting()
  const diceThrowsStatus = getDiceThrowsStatus()
  const maxThrows = numThrowsSetting * numLoggedPlayers
  if (diceThrowsStatus === maxThrows) {
    defineWinner()
    return true
  }
  return false
}


function defineWinner() {
  const playerUsernames = getPlayerUsernames()  
  const maxScoreIndexes = getMaxPlayerScoreIndexes()
  if (maxScoreIndexes.length === 1) {
    const winnerIndex = maxScoreIndexes[0]
    const winnerUsername = playerUsernames[winnerIndex]
    const winnerMessage = `${winnerUsername} venceu a partida`
    createGameOverMessageBox(winnerMessage)
    confettiAnimation()
  } else {
    const drawMessage = defineDrawMessage(
      playerUsernames,
      maxScoreIndexes
    )
    createGameOverMessageBox(drawMessage)
  }
}


function defineDrawMessage(
  playerUsernames,
  maxScoreIndexes
) {
  let drawMessage = ''
  for (let i = 0; i < maxScoreIndexes.length; i++) {
    const tiedPlayerIndex = maxScoreIndexes[i]
    const tiedPlayerUsername = playerUsernames[tiedPlayerIndex]
    if (i !== maxScoreIndexes.length - 1) {
      drawMessage += `${tiedPlayerUsername}, `
    } else {
      drawMessage += ` e ${tiedPlayerUsername}`
    }
  }
  drawMessage += ' empataram'
  return drawMessage
}



function getDiceIds() {
  const diceIds = []
  const dice = document.querySelectorAll('.die')
  for (const die of dice) {
    const dieId = die.id
    diceIds.push(dieId)
  }
  return diceIds
}


function getFaceUpNumber(die) {
const dieFaces = die.children
for (let i = 0; i < dieFaces.length - 1; i++) {
  const faceInFront = dieFaces[i]
  const faceInBack = dieFaces[i + 1]
  const faceInFrontDistanceTop = getDistanceTop(faceInFront)
  const faceInFrontDistanceLeft = getDistanceLeft(faceInFront)
  const faceInBackDistanceTop = getDistanceTop(faceInBack)
  const faceInBackDistanceLeft = getDistanceLeft(faceInBack)
  if (faceInFrontDistanceTop === faceInBackDistanceTop && faceInFrontDistanceLeft === faceInBackDistanceLeft) {
    const faceUpNumber = defineFaceUpNumber(
      faceInFront,
      faceInBack
    )
    if (faceUpNumber) return faceUpNumber
  }
}
}


function getDistanceTop(face) {
  const rect = face.getBoundingClientRect()
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const distanceTop = rect.top + scrollTop
  return distanceTop
}


function getDistanceLeft(face) {
  const rect = face.getBoundingClientRect()
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft
  const distanceLeft = rect.left + scrollLeft
  return distanceLeft
}


function defineFaceUpNumber(face1, face2) {
  const rect1 = face1.getBoundingClientRect();
  const rect2 = face2.getBoundingClientRect();

  const centerX = (Math.max(rect1.left, rect2.left) + Math.min(rect1.right, rect2.right)) / 2;
  const centerY = (Math.max(rect1.top, rect2.top) + Math.min(rect1.bottom, rect2.bottom)) / 2;

  const faceUp = document.elementFromPoint(centerX, centerY);

  if (faceUp === face1) {
    return parseInt(face1.innerText)
  } else if (faceUp === face2) {
    return parseInt(face2.innerText)
  } else {
    return undefined
  }
}