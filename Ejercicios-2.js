// Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.
// La solución debería tener un input y output como los siguientes:

// let arrayLetras = ['amor', 'sol', 'piedra', 'día'];

// const solution = arrayLetras.filter(palabras => palabras.length >= 4)
// console.log('solution', solution);

// ---------------------------------------------------------------------
const arrayLetras = (['amor', 'sol', 'piedra', 'día']);
function solution(array) {
return array.filter(word => word.length >= 4)
};
console.log(solution(arrayLetras));



