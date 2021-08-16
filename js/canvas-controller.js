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

    var txtWidth = gCtx.measureText(txt).width
    var alignX = x

    gCtx.beginPath()

    if (!txt) return

    switch (gCtx.textAlign) {
        case 'left':
            if (gMeme.selectedLineIdx === idx) {
            gCtx.strokeRect(x - 5, y - gMeme.lines[idx].size, txtWidth + 10, gMeme.lines[idx].size + 5)
            }
            break
        case 'center':
            alignX = gElCanvas.width / 2
            if (gMeme.selectedLineIdx === idx) {
            gCtx.strokeRect(alignX - txtWidth / 2 - 5, y - gMeme.lines[idx].size, txtWidth + 10, gMeme.lines[idx].size + 5)
            }
            break
        case 'right':
            alignX = gElCanvas.width - 50
            if (gMeme.selectedLineIdx === idx) {
            gCtx.strokeRect(alignX - txtWidth - 5, y - gMeme.lines[idx].size, txtWidth + 10, gMeme.lines[idx].size + 5)
            }
            break
    }

    gCtx.fillText(txt, alignX, y)
    gCtx.strokeText(txt, alignX, y)
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




