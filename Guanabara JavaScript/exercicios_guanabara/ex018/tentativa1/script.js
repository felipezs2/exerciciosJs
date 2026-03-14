function enviarNumero() {
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)
    var tabela = document.querySelector('select#tabela')

    if (pegaNumero.value.length == 0) {
        retorno.innerHTML = `Por favor insira um número`
    } else if (pegaNumero.value > 100 || pegaNumero.value <= 0) {
        retorno.innerHTML = `Por favor insira um número entre 1 e 100`
    } else {
        for (var c = 0; c<=0 ; c++){
            var itemTabela = document.createElement('option')
           itemTabela.text = `${numero}`
            tabela.appendChild(itemTabela)
        }
        for (var contador = 0; contador<=0; contador++){
            var lista = []
            lista.push(numero)
            
        }

    }

}

function finalizar(){
    var retorno = document.querySelector('p#retorno')
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)

    retorno.innerHTML = `${numero}`
}