var vel = 61

function radar (){
    if (vel <= 60) {
        console.log('Você está dentro do limite de velocidade. Boa viagem!')
    } else {
        console.log(`Você ultrapassou o limite de velocidade de 60 Km/h, pois estava dirigiindo à ${vel}`)
    }
}

console.log(radar())