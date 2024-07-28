function addChildByParentTag (
    parentTag,
    childInnerHTML
) {
    parent = document.querySelector(parentTag)
    parentInnerHTML = parent.innerHTML
    parent.innerHTML += childInnerHTML
}