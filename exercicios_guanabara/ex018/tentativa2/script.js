var getNumber = document.querySelector('input#number')
var returnValue = document.querySelector('p#return')
var list = []

function isNumber(n) {
    return (Number(n) >= 1 && Number(n) <= 100) 
}  // Se o numero for maior ou igual a 1 e menor ou igual a 100 o resultado é FALSO

function inList(n, l) {
    return l.indexOf(Number(n)) != -1
} // Se o numero já estiver na lista retorne verdadeiro

function sendNumber () {
    if (isNumber(getNumber.value) && !inList(getNumber.value, list)) {
        returnValue.innerHTML = `Sucesso!`
    } else if (!isNumber(getNumber.value)) {
        returnValue.innerHTML = `Insira um número entre 1 e 100`
    } else if (inList(getNumber.value), list) {
        returnValue.innerHTML = `Número já adicionado na lista`
    }
}
