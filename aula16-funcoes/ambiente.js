/* 
    A função abaixo não tem retorno, ela não armazena nada, apenas manda mostrar na tela dependendo do resultado.]
    function parimp (n){
    if (n % 2 < 1) {
        console.log ('Par')
    } else {
        console.log('Impar')
        }
    }
    parimp (10)

    A melhor maneira seria a segunda função, onde armazena o valor 'Impar' ou 'Par' e por fim eu decido o que devo fazer
    com o resultado
*/

/* Resolução do professor*/
function parimp (n){
    if (n % 2 < 1) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
let res = parimp (10)
console.log (res)
