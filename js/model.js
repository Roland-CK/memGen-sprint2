'use strict'


var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImageIdx = 0

var gImgs = [];       // { id: 1, url: './img/meme-imgs (square)/1.jpg', keywords: ['happy'] },


_createImages()



function createImage() {
    return {
        id: ++gImageIdx,
        url: `./img/meme-imgs (square)/${gImageIdx}.jpg`,
        keywords: ['happy'],
    }
}


function _createImages(numberOfImgs = 18) {

    for (var i = 1; i <= numberOfImgs; i++) {
        gImgs.push(createImage())
    }
}



function getSelectedImage(imageClickedId) {
    return gImgs.find(img => {
        return img.id === imageClickedId
    })

}




