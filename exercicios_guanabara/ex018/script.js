function enviarNumero() {
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)
    var retorno = document.querySelector('p#retorno')

    if (numero.length <= 0) {
        retorno.innerHTML = (`Insira um número`)
    }
}