function buscaBinaria(lista, alvo) {
    let inicio = 0
    let fim = lista.length - 1

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)

        if (lista[meio] === alvo) {
            return meio
        }

        if (lista[meio] < alvo) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }

    return 'Item não encontrado'
}

let numeros = [1,3,5,7,9,11,13,15]

console.log(buscaBinaria(numeros, 7))

