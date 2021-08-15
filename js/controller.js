'use strict'


function init() {
    renderGalleryImgs()
    // addListeners()

}


function onGallery() {
    document.querySelector('.canvas-section').classList.add('hide')
    document.querySelector('.gallery-section').classList.remove('hide')

}



function onMemes() {
    console.log('Memes opening...');
}


function renderGalleryImgs() {

    var strHtmls = gImgs.map(img => {
        return `<div class="img-card" onclick="onImage(${img.id})"><img src="./img/meme-imgs (square)/${img.id}.jpg" alt=""></div>`
    })
    return document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}