// função criada
function verificar() {
    
    // variavel para pegar a data atual do sistema
    var pegaDataAtual = new Date()
    
    // variavel para pegar o ano da variavel pegaDataAtual 
    var anoAtual = pegaDataAtual.getFullYear()

    // variavle para pegar o ano do formulario no documento html
    var anoFormulario = document.querySelector ('input#anoNascimento')
    
    // variavel para pegar o elemento que vamos utilizar como retorno no documento html
    var retorno = document.querySelector ('div#retorno')
    
    // inicio do tratamento de valores que o usuário digitou, a fins de evitar datas invalidas
    if (anoFormulario.value.length == 0) {
        window.alert ('Insira uma data de nascimento')
    } else if (anoFormulario.value > anoAtual) {
        window.alert ('A data de nascimento não pode ser maior que a data atual')
    } else if (anoFormulario.value.length < 4) {
        window.alert ('Insira uma data valida')
    }  
        // caso não tenha nenhum erro na data inserida pelo usuário, o bloco abaixo vai ser executado
    else {

        // variavel que calcula a idade de acordo com o valor inserido pelo usuário  
        var idade = anoAtual - Number(anoFormulario.value)

        //
        var imagem = document.createElement ('img')
            imagem.setAttribute('id', 'foto')

        // variavel que pega o valor digitaod no input tipo radio 
        var pegaSexo = document.getElementsByName('sexo')
        
        // variavel vazia para ser utilizada com o tratamento a seguir
        var genero = ''

        // tratamento para caso seja Homem e qual imagem deve aparecer 
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
        } 
        // tratamento para caso seja Mulher e qual imagem deve aparecer 
        else if (pegaSexo[1].checked){
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