
// Arreglos [Arrays]

    var miArreglo = ["Nestor", 34];
    console.log(miArreglo);

    var colaboradores = ["Nestor", "Marianny", "Victor", "Rodrigo", "Javier", "Lalo", "Leandro", "Mauricio", "Leonardo"];
    console.log(colaboradores);

    var edad = [34, 35, 31, 36, 34, 37, 28, 30, 38];
    console.log(edad);

// Arrays Anidados

    var colaboradores = [["Marianny", 35],["Victor", 31]];
    console.log(colaboradores);

    var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
    console.log(listaDeProductos);

    var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
    console.log(datos);

// Acceder a los Elementos de un Array

    var miArreglo = [10, 20, 30];
    console.log(miArreglo);

    /*
    Arreglo: [10, 20, 30]
    Indices:  0   1    2
    */

    console.log(miArreglo[0]);
    console.log(miArreglo[1]);
    console.log(miArreglo[2]);

    var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
    console.log(suma);
    
// Modificar Elementos de un Arreglo

    var miArreglo = [10, 20, 30];
    miArreglo[1] = 40
    console.log(miArreglo);
    miArreglo[2] = "Nestor";
    console.log(miArreglo);

// Acceder a Arreglos Multidimensionales

    var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    /*
    Arreglo:            [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    Indices:                 0          1          2
    Indices Internos:     0  1  2    0  1  2    0  1  2
    */

    console.log(miArreglo[0] [2]);
    console.log(miArreglo[1] [1]);
    console.log(miArreglo[2] [0]);
    console.log(miArreglo[0] [1]);

