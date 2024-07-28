function defineInitialFacesNumbers() {
    const front = document.querySelector('.front')
    const back = document.querySelector('.back')
    const right = document.querySelector('.right')
    const left = document.querySelector('.left')
    const top = document.querySelector('.top')
    const bottom = document.querySelector('.bottom')


    const facesArray = [top, bottom, front, back, right, left]
    const placedNumbers = []
    while (placedNumbers.length < 6) {
        const number = Math.floor(Math.random() * 6) + 1
        if (!placedNumbers.includes(number))
            placedNumbers.push(number)
    }
    for (let i = 0; i < 6; i++) {
        const face = facesArray[i]
        face.innerHTML = placedNumbers[i]
    }
}