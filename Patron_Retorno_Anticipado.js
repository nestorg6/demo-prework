
function calcularRaizCuadrada(num){
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));