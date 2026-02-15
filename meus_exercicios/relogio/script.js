function horario() {
    var getHour = new Date()
    var hour = getHour.getHours()
    var minutes = getHour.getMinutes()
    var seconds = getHour.getSeconds()
    var pegaRetorno =  document.querySelector('p#retorno')
    
    pegaRetorno.innerHTML = `${hour}:${minutes}:${seconds}`
} 

setInterval (horario, 1000);