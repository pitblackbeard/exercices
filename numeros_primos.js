// método 1. Poco eficiente. Busco todos los divisores. Si solo hay 2 (la unidad y el propio número), es primo. Quiero encontrar un método que pare la búsqueda de divisores en cuanto encuentra el primero.

/*
let numerosPrimos = [1];
let checkPrimosHasta = 13;

for (let i = 1; i < checkPrimosHasta; i++) {
    let dividers = [];
    for (let j = 1; j <= i; j++) {
        if ((i % j === 0))
        dividers.push(j);
    }
    // console.log(dividers);
    if (dividers.length === 2) {
        numerosPrimos.push(i);
    }
}
*/

let numerosPrimos = [];
let checkPrimosHasta = 300000;
for (let i = 2; i <= checkPrimosHasta; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    };
    if (esPrimo) {
        numerosPrimos.push(i)
    }
}


console.log('De 1 a ' + checkPrimosHasta + ' hay ' + numerosPrimos.length + ' números primos')

/*OJO NO USAR POR ENCIMA DE 100000

console.log('Estos números son primos: ' + numerosPrimos);

*/

