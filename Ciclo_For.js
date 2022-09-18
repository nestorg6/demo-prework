

// Ciclo for

let miArreglo = [];

for (let i = 0; i < 10; i++) {
    miArreglo.push(i);
}

console.log(miArreglo);


// Ejercicio #2 

let miArreglo1 = [];

for (let i = 0; i < 10; i += 2) {
    miArreglo1.push(i);
}

console.log(miArreglo1);

// Ciclo for numeros impares

let miArray = [];

for (let i = 1; i < 50; i += 2) {
    miArray.push(i);
}
console.log(miArray);

// Ciclo for contar hacia atras

let miArray1 = [];

for (let i = 15; i >= 10; i--) {
    miArray1.push(i);
}
console.log(miArray1);

// Iterar Sobre un Arreglo con un ciclo for

    let lenguajes = ["JavaScript", "Python", "Java", "C++"];

    for (let i = 0; i < lenguajes.length; i++) {
        console.log(lenguajes[i].toUpperCase());
    }

// Ciclo for dentro de una funcion 

        function contarNumerosPares (array) {
            let total = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 == 0) {
                    total++;
                }
                
            }
            return total;
        }

        console.log(contarNumerosPares([5, 3, 1, 2, 4, 8, 10, 20, 40, 50]));

// Ciclos for anidados

        let miArrayAnidado = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        for (let i = 0; i < miArrayAnidado.length; i++) {
            console.log("Nueva Iteración");
            let arregloAnidado = miArrayAnidado[i]; // arreglo
            console.log("Arreglo " + arregloAnidado);

            for (let j = 0; j < arregloAnidado.length; j++) {
                console.log("Ciclo Anidado");
                console.log("Elemento: " + arregloAnidado[j]);
                console.log(arregloAnidado[j]); // Elemento
            }
        }