'use strict'

const gElCanvas = document.querySelector('.canvas')
const gCtx = gElCanvas.getContext('2d')

var gCurrShape;

gCtx.fillStyle = "#FF0000"


function init() {
    // window.addEventListener('resize' , resizeCanvas)
    addListeners()
}



function drew(ev) {
    console.log(ev);
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    // console.log('x: ', offsetX, 'y: ', offsetY);

    const { offsetX, offsetY } = ev // destructuring
    // console.log('x: ', offsetX, 'y: ', offsetY);

    // switch (gCurrShape) {
    //     case 'triangle':
    //         drawTriangle(offsetX, offsetY)
    //         break;
    //     case 'line':
    //         drawLine(offsetX, offsetY)
    //         break;
    //     case 'circle':
    //         drawCircle(offsetX, offsetY)
    //         break;
    //     case 'rectangle':
    //         drawRectangle(offsetX, offsetY)
    //         break;
    //     case 'free':
    //         drawAPoint(offsetX, offsetY)
    //         break;


    // }

}



function onDrawBtn() {

    const userText = document.querySelector('[name="user-text"]').value
    if (userText) {
        drewText(userText, 150, 150)
    } else return
}




function drewText(txt, x, y) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'green'
    gCtx.fillStyle = 'green'
    gCtx.font = '40px Arial'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}


function clearCanvas() {
    console.log('clearing..');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function setShape(shape) {

    gCurrShape = shape
}

function drawCircle(x, y) {
    gCtx.beginPath()
    gCtx.arc(x, y, 40, 0, 2 * Math.PI)
    gCtx.stroke()
}



function drawLine(x, y) {

    gCtx.moveTo(0, 0) // starting point
    gCtx.lineTo(x, y) // defines the ending point of the line
    gCtx.stroke(); // To actually draw the line, you must use one of the "ink" methods, like stroke().

}

function drawTriangle(x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(130, 330)
    gCtx.lineTo(50, 370)
    gCtx.closePath()
    gCtx.fillStyle = 'purple'
    gCtx.fill()
    gCtx.strokeStyle = 'blue'
    gCtx.stroke()

}

function drawRectangle(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = "6";
    gCtx.strokeStyle = "red";
    gCtx.rect(x, y, 80, 40);
    gCtx.stroke();
}



function drawAPoint(x, y) {
    gElCanvas.style.cursor = 'crosshair'
    gCtx.beginPath()
    gCtx.rect(x, y, 1, 1)
    gCtx.stroke(); // To actually draw the line, you must use one of the "ink" methods, like stroke(). 
}

// function onMove(ev) {

   
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y
//         moveCircle(dx, dy)
//         gStartPos = pos
//         renderCanvas()
    
// }

function movePoint(dx, dy) {
    gCircle.pos.x += dx
    gCircle.pos.y += dy

}