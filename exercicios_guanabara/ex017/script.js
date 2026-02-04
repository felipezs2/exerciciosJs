function enviar() {
    var pegaNumero = document.querySelector('input#numero')
    var numero = Number(pegaNumero.value)

    if (pegaNumero.value.length == 0) {
        window.alert ('Por favor digite um número')
    }
}