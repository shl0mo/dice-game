function rollDice() {
    diceIds = getDiceIds()
  
    for (const dieId of diceIds) {
      const cube = document.getElementById(dieId)
      const randomX = Math.floor(Math.random() * 4) * 90
      const randomY = Math.floor(Math.random() * 4) * 90
      const randomZ = Math.floor(Math.random() * 4) * 90
  
      cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`
    }
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