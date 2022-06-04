

let createElement = (tagName, tagClass, tagContent) =>{
    let tag = document.createElement(tagName) 
    tag.setAttribute('class', tagClass) 
    tag.innerHTML = tagContent

    
    return tag
}

let BattonCreateElement = (buttonID, buttonClass, del, buttonHandler) => {
    let button = document.createElement ('button')
    button.setAttribute ('id', buttonID)
    button.setAttribute ('class', buttonClass)
    button.innerHTML = del
    button.onclick = buttonHandler

    return button

}
mainButton.onclick = () => {
    let text = prompt("введите что нибудь")
    let buttonDelete  = BattonCreateElement (
        buttonID = 'buttonDelete',
        buttonClass = 'buttonDel',
        del = 'del',
        buttonHandler = () => element.style.display = 'none'
    )



    let updateButton = BattonCreateElement(
        buttonID = 'updateButton',
        buttonClass = 'buttonis',
        del = 'change', 
        buttonHandler = () => {
            let battonText = prompt ('новый текст')
            element.children[2].innerHTML = battonText 
        }
    )
    let okButton = BattonCreateElement(
        buttonID = 'okButton',
        buttonClass = 'icbuttonis',
        del = 'ok', 
        buttonHandler = () => {
            element.style.backgroundColor = 'chartreuse'
            okButton.style.display = 'none'
            updateButton.style.display = 'none'
            
            
        }
    )


    let paragraph = createElement('p', 'todoEement__Text', text)


    let element = createElement('div','todoElement', '')

    element.append(buttonDelete)
    element.append(updateButton)
    element.append(paragraph)
    element.append(okButton)
    mainDiv.append(element)

}
