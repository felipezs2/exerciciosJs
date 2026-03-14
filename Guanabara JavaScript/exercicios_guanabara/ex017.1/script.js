function enviar() {
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)

    var retorno = document.querySelector('p#retorno')

    if (pegaNumero.value.length == 0) {
        window.alert ('Por favor digite um número')
    } else {
        for (var c = 0; c<=10 ; c++) {
            retorno.innerHTML += `${c} * ${numero} = ${c*numero} <br>`
        }
    }
}