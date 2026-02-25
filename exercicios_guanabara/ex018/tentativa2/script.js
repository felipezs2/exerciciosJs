var getNumber = document.querySelector('input#number')
var number = Number(getNumber.value)
var returnValue = document.querySelector('p#return')

function isNumber() {
    if (number >= 1 && number <= 100) {
        return true
    }
}

function isNull() {
    if (getNumber.length == 0) {
        return true
    } else {
        return false
    }
}

function sendNumber () {
    if (isNull) {
        returnValue.innerHTML = `Num foi`
    }
}