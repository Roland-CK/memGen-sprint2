'use strict'

function onFontSizeDec() {

    decreaseFntSize()
    renderCanvas()
}

function onFontSizeInc() {

    increaseFntSize()
    renderCanvas()

}


function onDownLineMove() {
    if (gMeme.lines[gMeme.selectedLineIdx].height > 490 || gMeme.lines[gMeme.selectedLineIdx].height === 490) return
    else
        gMeme.lines[gMeme.selectedLineIdx].height += 20
    renderCanvas()

}

function onUpLineMove() {
    
    if (gMeme.lines[gMeme.selectedLineIdx].height < 30 || gMeme.lines[gMeme.selectedLineIdx].height === 30) return
    else
        gMeme.lines[gMeme.selectedLineIdx].height -= 20
    renderCanvas()

}

function onSwitchLine() {
    console.log('Switching..');
    let currLine = getCurrLine()
    switchLine(currLine)
    renderCanvas()
    renderInputVal()
}

function renderInputVal() {

    if (!gMeme.lines.length)
        return

    else {
        let elUsrTxtInput = document.querySelector('[name=user-text]')
        elUsrTxtInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
        elUsrTxtInput.focus()
    }
}

function onEnterPressed(event) {

    if (event.keyCode !== 13) return
    else {
        
        console.log('Enter key was pressed..');
        addLine()
        document.querySelector('[name=user-text]').value = ''
    }
    renderCanvas()

}


function onAddLine() {
    
    console.log('Adding line..');
    addLine()
    document.querySelector('[name=user-text]').value = ''
    renderCanvas()
    // drawText(gMeme.lines[gMeme.selectedLineIdx].txt, gElCanvas.width - 250, gElCanvas.height - 420)
}

function onRemoveLine() {

    removeLineFromModel()
    renderCanvas()
    renderInputVal()
}


function onAlignmentLRC (el) {
    console.log(el);
    gMeme.lines[gMeme.selectedLineIdx].align = el.dataset.rlcValue
    renderCanvas()
}


// --- font btns  --- //

function getUsrFont(fontVal) {
    if (fontVal === 'font-change') return

    else {
        gMeme.lines[gMeme.selectedLineIdx].font = fontVal
        renderCanvas()
    }
}
var gStrokeModalIndicator = false;

function onBrush() {
    console.log('color picker..');
    gStrokeModalIndicator = false
    openModalColor()

}

function onCloseModalColorBtn() {
    closeModalColor()
}

function onColorPick(value) {

    gStrokeModalIndicator ? gMeme.lines[gMeme.selectedLineIdx].stroke = value : gMeme.lines[gMeme.selectedLineIdx].color = value
    renderCanvas()
}


function onStrokeColor() {
    
    gStrokeModalIndicator = true
    openModalColor()

  
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onCloseMobileMenu() {
    document.body.classList.remove('menu-open')
}