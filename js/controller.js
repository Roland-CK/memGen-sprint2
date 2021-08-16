'use strict'


function init() {
    renderGalleryImgs()
    // addListeners()

}


function onGallery() {
    document.querySelector('.canvas-section').classList.add('hide')
    document.querySelector('.gallery-section').classList.remove('hide')
    document.body.classList.remove('menu-open')

}



function onMemes() {
    console.log('Memes opening...');
    document.body.classList.remove('menu-open')   
    document.querySelector('.canvas-section').classList.add('hide')
    document.querySelector('.gallery-section').classList.add('hide')
    renderLoadedMemes()
}


function renderGalleryImgs() {

    var strHtmls = gImgs.map(img => {
        return `<div class="img-card" onclick="onImage(${img.id})"><img src="./img/meme-imgs (square)/${img.id}.jpg" alt=""></div>`
    })
    return document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}

// function renderLoadedMemes() {
//     gSavedMemes = loadFromStorage (KEY)
//     var strHtmls = gSavedMemes.map(meme => {
//         return `<div class="img-card" onclick="onImage(${meme.selectedImgId})"><img src="./img/meme-imgs (square)/${meme.selectedImgId}.jpg" alt=""></div>`
//     })
//     return document.querySelector('.meme-area').innerHTML = strHtmls.join('')

// }