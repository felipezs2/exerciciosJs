var idade = 16
/*
if (idade < 16) {
    console.log (`Não vota`)
} else if (idade >= 18) {
    console.log (`Deve votar`)
} else if (idade >= 67){
    console.log (`Voto opicional`)
} else {
    console.log (`Pode votar`)
}  
*/
// Votos opcionais: 16 a 18 anos e 67+ anos
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Você não vota ainda`)
} else if (idade < 18 || idade >= 65) {
    console.log(`Você pode votar`)
} else {
    console.log(`Você deve votar`)
}