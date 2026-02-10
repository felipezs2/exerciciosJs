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
        pegaRetorno.innerHTML = `Impossível contar sem um valor inicial`
    } else if (pegaFim.value.length == 0) {
        window.alert ('Por favor insira um valor final')
        pegaRetorno.innerHTML = `Impossível contar sem um valor final`
    } else if (pegaPasso.value.length == 0 || passo <= 0) {
        window.alert ('Por favor insira um valor no passo')
        pegaRetorno.innerHTML = `Impossível contar sem um valor para o passo`
    } else {
        //Deixar o retorno 'Limpo' fora do loop
        pegaRetorno.innerHTML = 'Contando: '
        if (inicio < fim){
            for (inicio; inicio <= fim; inicio += passo ){
                pegaRetorno.innerHTML += ` ${inicio} \u{27A1}`
            } pegaRetorno.innerHTML += `\u{1F3C1}`
        } else {
            for (inicio; inicio >= fim; inicio -= passo)
                pegaRetorno.innerHTML += ` ${inicio} \u{27A1}`
        } pegaRetorno.innerHTML += `\u{1F3C1}`
            
    }

}