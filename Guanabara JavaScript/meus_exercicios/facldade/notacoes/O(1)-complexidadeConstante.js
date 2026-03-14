// Notação O(1) | Complexidade constante
function retornarPrimeiroElemento(lista) {
    if (lista.length > 0) {
        return lista[0];
    }
    return null;
}

let primeiraLista = [5, 10, 15, 20, 25];
let segundaLista = [1, 21312, 12, 0, -15, 2, 20, 3, 4, 5, 6, 7, 8, 9, -20, 200000];
let terceiraLista = [0, 2, -10];

console.log(retornarPrimeiroElemento(primeiraLista));
console.log(retornarPrimeiroElemento(segundaLista));
console.log(retornarPrimeiroElemento(terceiraLista));