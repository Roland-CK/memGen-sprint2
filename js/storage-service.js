'use strict'

function saveToStorage (key, val) {
    
    var json = JSON.stringify(val) // always will do stringify and will save it to the local storage 
    localStorage.setItem(key, json) // go to the local storage and saves to the specified key' the value

}


function loadFromStorage (key) {
    var json = localStorage.getItem(key)
    var val = JSON.parse(json)
    return val
}

function removeItem(key) {
  localStorage.removeItem(key)
}
