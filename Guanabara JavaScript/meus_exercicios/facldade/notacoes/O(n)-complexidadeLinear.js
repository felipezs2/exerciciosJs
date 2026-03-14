function buscaLinear(lista, alvo) {

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === alvo) {
            return i + 1
        }
    }

    return 'Item não encontrado'
}

let numeros = [4, 8, 15, 16, 23, 42]

console.log(buscaLinear(numeros, 16))