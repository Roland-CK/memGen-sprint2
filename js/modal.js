'use strict'

var gElModal = document.querySelector('.modal')
var gElOverlay = document.querySelector('.overlay')

function openModal() {
    gElModal.classList.add('active')
    gElOverlay.classList.add('active')
}

function closeModal() {
    gElModal.classList.remove('active')
    gElOverlay.classList.remove('active')
}

function onCloseModalBtn() {
    closeModal()
}

function onOpenModalBtn() {
    openModal()
}



var gElModalColor = document.querySelector('.modal-color')

function openModalColor() {
    gElModalColor.classList.add('active')
    gElOverlay.classList.add('active')
}


function closeModalColor() {
    gElModalColor.classList.remove('active')
    gElOverlay.classList.remove('active')
}




