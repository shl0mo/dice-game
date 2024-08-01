function createDie (id) {
    const dieInnerHTML = `
        <div class="die-container">
            <div class="die" id="${id}">
                <div class="face front">1</div>
                <div class="face back">2</div>
                <div class="face right">3</div>
                <div class="face left">4</div>
                <div class="face top">5</div>
                <div class="face bottom">6</div>
            </div>
        </div>
    `
    addChildByParentClass(
        'dice-box',
        dieInnerHTML
    )
    defineInitialFaceNumbers()
}


function defineInitialFaceNumbers() {
    const front = document.querySelector('.front')
    const back = document.querySelector('.back')
    const right = document.querySelector('.right')
    const left = document.querySelector('.left')
    const top = document.querySelector('.top')
    const bottom = document.querySelector('.bottom')

    const placedNumbers = []
    while (placedNumbers.length < 3) {
        const number = Math.floor(Math.random() * 6) + 1
        if (!placedNumbers.includes(number))
            placedNumbers.push(number)
    }
    front.innerText = placedNumbers[0]
    back.innerText = placedNumbers[0] + 1
    right.innerText = placedNumbers[1]
    left.innerText = placedNumbers[1] + 1
    top.innerText = placedNumbers[2]
    bottom.innerText = placedNumbers[2] + 1
}