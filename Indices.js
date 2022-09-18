
// Notacion de corchetes primer caracter

    var lenguajeDeProgramacion = "JavaScript";

    /*
    Cadena:   J A V A S C R I P T 
    Indices:  0 1 2 3 4 5 6 7 8 9 
    */

    console.log(lenguajeDeProgramacion[0]);

// Inmutabilidad de Cadenas de Caracteres

var miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; // Error

// 

    var miCadena;

/*
El ultimo indice siempre es longitud -1 porque comenzamos a contar desde 0.

micadena.length para "JavaScript" es 10.
El ultimo indice es 9.

Cadena:    J a v a s c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9 
*/

    miCadena = "Javascript";

    console.log(miCadena[miCadena.length - 1]);

// Notacion de corchetes de derecha a izquierda

    /* El penultimo indice es longitud - 2 porque comenzamos a contar desde 0. 

    miCadena.length es de 10. el penultimo indices es 8.

    Cadena:    J a v a s c r i p t
    Indices:   0 1 2 3 4 5 6 7 8 9 
    */

    miCadena = "Javascript";

    console.log(miCadena[miCadena.length - 2]);
    