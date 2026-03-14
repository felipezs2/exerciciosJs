function verificar() {
    var pegaDataAtual = new Date()
    var anoAtual = pegaDataAtual.getFullYear()
    var anoFormulario = document.querySelector ('input#anoNascimento')
    var retorno = document.querySelector ('div#retorno')
    
    if (anoFormulario.value.length == 0) {
        window.alert ('Insira uma data de nascimento')
    } else if (anoFormulario.value > anoAtual) {
        window.alert ('A data de nascimento não pode ser maior que a data atual')
    } else if (anoFormulario.value.length < 4) {
        window.alert ('Insira uma data valida')
    } else {
        var pegaSexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoFormulario.value)
        var genero = ''
        var imagem = document.createElement ('img')
            imagem.setAttribute('id', 'foto')
        if (pegaSexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // crianca 
                imagem.setAttribute('src', 'idade5.png')
            } else if (idade < 21) {
                // jovem
                imagem.setAttribute('src', 'idade20.png')
            } else if (idade < 50 ) {
                // adulto
                imagem.setAttribute('src', 'idade40.png')
            } else {
                // idoso
                imagem.setAttribute('src', 'idade70.png')
            }
        } else if (pegaSexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // crianca
                imagem.setAttribute('src', 'idade0.png')
            } else if (idade < 21) {
                // jovem
                imagem.setAttribute('src', 'idade15.png')
            } else if (idade < 50 ) {
                // adulto
                imagem.setAttribute('src', 'idade65.png')
            } else {
                // idoso
                imagem.setAttribute('src', 'idade80.png')
            }
        }
        retorno.innerHTML = `Foi detectado um ${genero} de ${idade} anos`
        retorno.appendChild(imagem)
        
    }

}