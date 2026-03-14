var a = [5, 7, 3, 33, 2]
a [3] = 6
a.push(9) 

for (let c = 0; c < a.length; c++) {
    console.log(`A posição ${c} do seu array tem o valor ${a[c]}`)
}

// Nova estrutura para arrays
for (let c in a) {
    console.log(a[c])
}

console.log (`Esse é o seu array ${a}`)
console.log (`O array possui ${a.length} posições`)
console.log (`Aqui está o array de forma ordenada ${a.sort()}`)
console.log (`O primeiro valor do vetor é ${a[0]}`)

console.log (`O valor 6 que você quer esta na posição ${a.indexOf(6)}`)