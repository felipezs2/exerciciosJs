var getNumber = document.querySelector('input#number')
var returnValue = document.querySelector('p#return')

/*
function isNumber() {
    if (Number(getNumber.value) >= 1 || Number(getNumber.value) <= 100) {
        return true
    } else {
        return false
    }
}
*/

function sendNumber () {
    const value = Number(getNumber.value)

    if (value != 1) {
        returnValue.innerHTML = `AAAAAAAa`
    }
}