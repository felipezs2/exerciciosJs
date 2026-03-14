var getHour = new Date()
var hour = getHour.getHours()
var minutes =  getHour.getMinutes()
var seconds =  getHour.getSeconds()

if (hour < 10){
    console.log (`0${hour}:${minutes}:${seconds}`)
} else if (minutes < 10) {
    console.log (`${hour}:0${minutes}:${seconds}`)
} else if (seconds < 10 ) {
    console.log (`${hour}:${minutes}:0${seconds}`)
} else if (minutes <10 || seconds <10) {
    console.log (`${hour}:0${minutes}:0${seconds}`)
} else {
     console.log (`${hour}:${minutes}:${seconds}`)
}