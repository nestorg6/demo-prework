// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.
// La solución debería tener un input y output como los siguientes:


const array = [1, 3, 5, 7, 11, 11];
const numberPar = array.some(function(valor){
return valor %2 === 0;
});
console.log(numberPar);









// let numeros = [1, 3, 5, 7, 10, 11];
// function solution(numberPar){
// 	return numeros.some(item => item %2 === 0);
// }
// console.log("numeros", numeros);


// ----------------------

// let numeros = [3, 6, 8, 10, 12]
// let impar = 3;

// numeros.forEach(function(numero) {
//     if (numero === impar) {
//         numeros.shift() // 3 será borrado del arreglo
//     }
// })

// console.log(numeros);

// [6, 8, 10, 12] // Todos son pares!