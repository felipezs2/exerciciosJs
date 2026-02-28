var getNumber = document.querySelector('input#number')
var returnValue = document.querySelector('p#return')
var getTable = document.querySelector('select#table')
var list = []

function isNumber(n) {
    return (Number(n) >= 1 && Number(n) <= 100) 
}  // Se o numero for maior ou igual a 1 e menor ou igual a 100 o resultado é FALSO

function inList(n, l) {
    return l.indexOf(Number(n)) != -1
} // Se o numero já estiver na lista retorne verdadeiro

function sendNumber () {
    returnValue.innerHTML = ''
    if (isNumber(getNumber.value) && !inList(getNumber.value, list)) {
        var iten = document.createElement('option')
        iten.text = `${getNumber.value}`
        getTable.appendChild(iten)

        list.push(Number(getNumber.value))
        
        returnValue.innerHTML = `Número ${getNumber.value} adicionado á lista com sucesso`

    } else if (!isNumber(getNumber.value)) {
        returnValue.innerHTML = `Insira um número entre 1 e 100`
    } else if (!inList(getNumber.value), list) {
        returnValue.innerHTML = `Número já adicionado na lista`
    }
    getNumber.value = ''
    getNumber.focus()
}

function finish() {
    if (list.length == 0){
        returnValue.innerHTML = `Sua lista esta vazia, por favor adicione um número`
    } else {
        let higher = list[0]
        let lower = list [0]
        let sum = 0
        let average = 0

        for (let position in list){
            sum += list[position]
            average = sum/list.length
            if (list[position] > higher)
                higher = list[position]
            if (list[position] < lower)
                lower = list[position]
        }

        returnValue.innerHTML = `Sua lista possui <strong>${list.length}</strong> itens cadastrados <br>O <strong>MAIOR</strong> valor na sua lista é: <strong>${higher}</strong><br>O <strong>MENOR</strong> valor na sua lista é: <strong>${lower}</strong><br>A <strong>SOMA</strong> de todos os valores presentes na lista é: <strong>${sum}</strong><br>A <strong>MÉDIA</strong> de todos os valores presentes na lista é: <strong>${average}</strong>` 
    }
}
