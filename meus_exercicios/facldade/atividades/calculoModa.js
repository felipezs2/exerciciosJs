var lista =  [1, 5, 2, 3, 1, 3, 1]

function calculaModa () {
    for (contador = 0; contador < lista.length ; contador ++) {
        let listar = lista[contador]
        
        if (listar == lista[contador]) {
            var teste = lista.filter (n =>n === lista[contador])
            var moda = teste[0]
        
        }

    }

    console.log (`${moda}`)

} calculaModa(lista) 