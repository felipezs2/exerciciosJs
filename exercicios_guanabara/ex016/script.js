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
    } else {
        //Deixar o retorno 'Limpo' fora do loop
        pegaRetorno.innerHTML = 'Contando: '
        if (inicio < fim){
            for (inicio; inicio <= fim; inicio += passo ){
                pegaRetorno.innerHTML += `${inicio} `
            }
        } else if (inicio > fim) {
            for (fim; inicio >= fim; fim+= passo)
                pegaRetorno.innerHTML += `${fim}`
        }
            
    }

}