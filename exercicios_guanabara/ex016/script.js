function enviar(){
    var pegaRetorno = document.querySelector('p#retorno')
    
    var pegaInicio = document.querySelector('input#inicio')
    var inicio = Number(pegaInicio.value)

    var pegaFim = document.querySelector('input#fim')
    var fim = Number(pegaFim.value)

    var pegaPasso = document.querySelector('input#passo')
    var passo = Number(pegaPasso.value)

    if (pegaInicio.value.length == 0) {
        window.alert ('Por favor insira um valor inicial')
    } else if (pegaFim.value.length == 0) {
        window.alert ('Por favor insira um valor final')
    } else if (pegaPasso.value.length == 0) {
        window.alert ('Por favor insira um valor no passo')
    }
        
    for (inicio; inicio <= fim; inicio += passo) {
        pegaRetorno.innerHTML = `${inicio}`    
    }
    
    while (inicio<=fim) {
        pegaRetorno.appendChild(inicio+=passo)

    }


}