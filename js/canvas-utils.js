'use-strict'

function saveAndRestoreExample() {
    gCtx.font = '30px Arial'
    gCtx.strokeStyle = 'green'
    gCtx.strokeText('Saving the context', 10, 50)
    gCtx.save()
    gCtx.strokeStyle = 'black'
    gCtx.strokeText('Switching to something else', 10, 100)
    gCtx.restore()
    gCtx.strokeText('Back to previous context', 10, 150)

}


function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-area');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth - 20
    // Unless needed, better keep height fixed.
    // gCanvas.height = elContainer.offsetHeight
}


function clearCanvas() {
    console.log('clearing..');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function drawImg() {

    var img = new Image()
    img.src = getSelectedImage(gMeme.selectedImgId).url
    var width = img.naturalWidth
    var height = img.naturalHeight
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, width, height)
    }

}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-area')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }



// function wrapText(context, txt, x, y, maxWidth, lineHeight) {
//     var words = txt.split(' ');
//     var line = '';
//  debugger
//     for(var i = 0; i < words.length; i++) {
//         var testLine = line + words[i] + ' ';
//         var testWidth = context.measureText(testLine).width;
//         if (testWidth > maxWidth && i > 0) {
//             line = words[i] + ' ';
//             y += lineHeight;
//             drawText(line, x, y);
//         }
//         else {
//             line = testLine;
//         }
//     }
//     drawText(line, x, y);
// }