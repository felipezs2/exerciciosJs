function horario() {
    var getHour = new Date()
    var hour = getHour.getHours()
    var minutes = getHour.getMinutes()
    var seconds = getHour.getSeconds()
    var pegaRetorno =  document.querySelector('p#retorno')

    if (hour < 10 && minutes < 10 && seconds < 10) {
        pegaRetorno.innerHTML = `0${hour}:0${minutes}:0${seconds}`
    } else if (minutes < 10 && seconds < 10) {
        pegaRetorno.innerHTML = `${hour}:0${minutes}:0${seconds}`
    } else if (hour < 10 && seconds < 10) {
        pegaRetorno.innerHTML = `0${hour}:${minutes}:0${seconds}`
    } else if (hour < 10 && minutes < 10 ){
        pegaRetorno.innerHTML = `0${hour}:0${minutes}:${seconds}`
    } else if (seconds < 10) {
        pegaRetorno.innerHTML = `${hour}:${minutes}:0${seconds}`
    } else if (minutes < 10) {
        pegaRetorno.innerHTML = `${hour}:0${minutes}:${seconds}`
    } else if (hour < 10) {
        pegaRetorno.innerHTML = `0${hour}:${minutes}:${seconds}`
    } else {
        pegaRetorno.innerHTML = `${hour}:${minutes}:${seconds}`
    }

} 

setInterval (horario, 1000);