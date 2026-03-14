var inicio = 10
var fim = 1
var passo = 1

if (inicio < fim) {
    for (inicio; inicio <= fim; (inicio += passo)) {
        console.log (`${inicio}`)
}
} else {
    for (inicio; inicio >= fim; (inicio -= passo)) {
        console.log (`${inicio}`)
}
}

/*
while (inicio <= fim) {
    console.log (`${inicio}`)
    inicio + novoInico
}
*/

/*
do {
    console.log (`${novoInico}`)
    var novoInico = (inicio + passo)
} while (novoInico <= fim)
*/
