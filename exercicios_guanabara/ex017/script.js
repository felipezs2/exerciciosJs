function enviar() {
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)
    var pegaTabela = document.querySelector('select#tabela')

    var retorno = document.querySelector('p#retorno')

    if (pegaNumero.value.length == 0) {
        window.alert ('Por favor digite um número')
        retorno.innerHTML ('Por favor digite um número')
        pegaTabela.innerHTML = ''
    } else {
        pegaTabela.innerHTML = ''
        for (var c = 0; c<=10 ; c++) {
            var item = document.createElement('option')
            item.text = `${numero} * ${c} = ${numero * c}`
            pegaTabela.appendChild(item)
        }
    }
}