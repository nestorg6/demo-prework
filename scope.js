// Scope Global y Local

// var nombre = "Nestor";
//  apellido = "Gonzalez"; // esta variable esta declarada dentro de la funcion no se puede utilizar de forma global

// function fun(){
//     var apellido = "Galvis";
//     nombre = "Alfonso" // esta variable esta declarada de forma global si se puede utilizar de forma local 
//     return nombre + " " + apellido
// }

// console.log(fun());

// Ejemplo

    var miNombre = "Nestor";

    function nombre(){
        var miApellido = "Galvis";
        console.log(miNombre + " " + miApellido);
    }
    nombre(miNombre);
    
// El scope global se genera cuando se define e inicializa una variable fuera de una funcion
// El scope local se genera dentro de una funcion 