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
}