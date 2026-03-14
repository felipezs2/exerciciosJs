function mergeSort(lista) {
    if (lista.length <= 1) {
        return lista
    }

    let meio = Math.floor(lista.length / 2)

    let esquerda = lista.slice(0, meio)
    let direita = lista.slice(meio)

    return merge(
        mergeSort(esquerda),
        mergeSort(direita)
    )
}

function merge(esquerda, direita) {
    let resultado = []
    let i = 0
    let j = 0

    while (i < esquerda.length && j < direita.length) {

        if (esquerda[i] < direita[j]) {
            resultado.push(esquerda[i])
            i++
        } else {
            resultado.push(direita[j])
            j++
        }
    }

    return resultado
        .concat(esquerda.slice(i))
        .concat(direita.slice(j))
}

let numeros = [8,3,5,2,9,1,4]

console.log(mergeSort(numeros))