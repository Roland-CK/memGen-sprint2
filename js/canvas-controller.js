'use strict'

const gElCanvas = document.querySelector('.canvas')
const gCtx = gElCanvas.getContext('2d')

var gCurrShape;

gCtx.fillStyle = "#FF0000"


function onImage(imageId) {
    gMeme.selectedImgId = imageId
    drawImg()
    document.querySelector('.canvas-section').classList.remove('hide')
    document.querySelector('.gallery-section').classList.add('hide')
}


function renderCanvas() {

    var img = new Image()
    img.src = getSelectedImage(gMeme.selectedImgId).url
    var width = img.naturalWidth
    var height = img.naturalHeight
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, width, height)
        let idx = 0

        gMeme.lines.map(line => {
            drawText(line.txt, line.width, line.height, idx)
            idx++
        })
    }

}


function drawText(txt, x, y, idx) {

    gCtx.lineWidth = 2
    gCtx.textAlign = gMeme.lines[idx].align
    gCtx.strokeStyle = gMeme.lines[idx].stroke
    gCtx.fillStyle = gMeme.lines[idx].color
    gCtx.font = `${gMeme.lines[idx].size}px ${gMeme.lines[idx].font}`

    gCtx.beginPath()
    // debugger
    if (gMeme.selectedLineIdx === idx) {
        if (!txt) return
        else {
            // switch (gCtx.textAlign) {
            //     case 'left':
            //         gCtx.strokeRect(x - 5, y - gMeme.lines[idx].size, gCtx.measureText(txt).width + 10, gMeme.lines[idx].size + 5)
            //     case 'center':
            //         gCtx.strokeRect(x - 5, y - gMeme.lines[idx].size, gCtx.measureText(txt).width + 10, gMeme.lines[idx].size + 5)
            //     case 'right':
            // }
            gCtx.strokeRect(x - 5, y - gMeme.lines[idx].size, gCtx.measureText(txt).width + 10, gMeme.lines[idx].size + 5)
        }
    }
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}





// add Listeners // 
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}




