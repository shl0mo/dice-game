function addChildByParentClass (
    parentClass,
    childInnerHTML
) {
    parent = document.querySelector(`.${parentClass}`)
    parentInnerHTML = parent.innerHTML
    parent.innerHTML += childInnerHTML
}