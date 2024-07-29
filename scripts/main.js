sessionStorage.gameSettings = JSON.stringify({
  numPlayers: 0,
  numThrows: 0,
  numDice: 0
})

sessionStorage.gameStatus = JSON.stringify({
  playerUsernames: [],
  playerScores: [],
  diceThrows: 0,
  playerTurn: 0
})


function rollDice() {
  diceIds = getDiceIds()

  for (const dieId of diceIds) {
    const die = document.getElementById(dieId)
    const randomX = Math.floor(Math.random() * 4) * 90
    const randomY = Math.floor(Math.random() * 4) * 90
    const randomZ = Math.floor(Math.random() * 4) * 90

    die.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`
  }
  setTimeout(() => {
    for (const dieId of diceIds) {
      const die = document.getElementById(dieId)
      const faceUpNumber = getFaceUpNumber(die)
      updatePlayerScores(faceUpNumber)
    }
  }, 1100)
  setTimeout(() => {
    definePlayerTurn()
  }, 1200)
}


function updatePlayerScores (playScore) {
  const gameStatus = JSON.parse(sessionStorage.gameStatus)
  const playerTurn = parseInt(gameStatus.playerTurn)
  const playerScore = parseInt(gameStatus.playerScores[playerTurn])
  gameStatus.playerScores[playerTurn] = playerScore + playScore
  sessionStorage.gameStatus = JSON.stringify(
    gameStatus
  )
}


function definePlayerTurn () {
  const gameStatus = JSON.parse(sessionStorage.gameStatus)
  const numPlayers = gameStatus.playerUsernames.length
  const playerTurn = parseInt(gameStatus.playerTurn)
  if (gameStatus.playerTurn < numPlayers - 1) {
    gameStatus.playerTurn = playerTurn + 1
  } else {
    gameStatus.playerTurn = 0
  }
  sessionStorage.gameStatus = JSON.stringify(gameStatus)
}


function getDiceIds () {
  const diceIds = []
  const dice = document.querySelectorAll('.die')
  for (const die of dice) {
    const dieId = die.id
    diceIds.push(dieId)
  }
  return diceIds
}


function getFaceUpNumber (die) {
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


function getDistanceTop (face) {
  const rect = face.getBoundingClientRect()
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const distanceTop = rect.top + scrollTop
  return distanceTop
}


function getDistanceLeft (face) {
  const rect = face.getBoundingClientRect()
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft
  const distanceLeft = rect.left + scrollLeft
  return distanceLeft
}


function defineFaceUpNumber (face1, face2) {
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