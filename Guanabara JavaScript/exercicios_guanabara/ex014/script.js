var horarioAtual = new Date()
var hora = horarioAtual.getHours ()
var minutos = horarioAtual.getMinutes()
var segundos = horarioAtual.getSeconds()

var ret = document.querySelector(`p#retorno`)
ret.innerHTML = (`${hora}:${minutos}:${segundos}`)  

var pegaMostraHorario = document.querySelector(`span#mostraHorario`)
pegaMostraHorario.innerHTML = (hora)

function mensagem(){
    var pegaMensagem = document.querySelector(`span#mensagem`)
    if (hora<=12)
        pegaMensagem.innerHTML = (`Bom dia`)    
    else if (hora <= 18)
        pegaMensagem.innerHTML = (`Boa tarde`)      
    else {
        pegaMensagem.innerHTML = (`Boa noite`)
    }
    
} 

function fundoDia(){
    var backgroundDia = document.getElementsByTagName(`body`)[0]
    backgroundDia.style.background = "#faebd7"

    var imagemDia = document.querySelector('div#imagem')
    imagemDia.style.backgroundImage = "url(dia.png)";
}

function fundoTarde(){
    var backgroundTarde = document.getElementsByTagName(`body`)[0]
    backgroundTarde.style.background = "#f39742"

    var imagemTarde = document.querySelector('div#imagem')
    imagemTarde.style.backgroundImage = "url(tarde.png)";
}

function fundoNoite(){
    var backgroundNoite = document.getElementsByTagName(`body`)[0]
    backgroundNoite.style.background = "#030f47"

    var colorNoite = document.querySelector(`h1#titulo`)
    colorNoite.style.color = "whitesmoke"

    var imagemNoite = document.querySelector('div#imagem')
    imagemNoite.style.backgroundImage = "url(noite.png)";
}

function mudaFundo (){
    if (hora<=12) {
        fundoDia()
    } else if (hora<=18){
        fundoTarde()
    } else {
        fundoNoite()
    }
}
