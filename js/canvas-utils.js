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


function drewImg() {
    var img = new Image()
    img.src = 'img/1.jpg'
    img.onload = () => {
        gCtx.drewImage(img, 0, 0, gElCanvas.width, gElCanvas.height)  //img,x,y,xend,yend
    }
}


// function resizeCanvas() {
    // changing canvas dimension this way clears the canvas
    // var elContainer = document.querySelector('.canvas-container')
    // gElCanvas.width = elContainer.offsetWidth-20
// the we need to listen, the window have "resize" event, and call the function
    // window.addEventListener('resize' , resizeCanvas)
// }


function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    console.log('IMG' , data);
    elLink.href = data
    // elLink.download = 'puki'
}



// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}


function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
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

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}



function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}