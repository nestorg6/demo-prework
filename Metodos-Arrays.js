
//   Metodo .push()  agregar un elemento al array, añadir valores a un array.
 
    //  var estaciones = ["Invierno", "Otoño", "Primavera"];
 
    //  estaciones.push("Verano");
 
    //  console.log(estaciones);
 
//   Metodo .pop() El método pop elimina el último elemento de un array y devuelve su valor al método que lo llamó.

    //  var estaciones;
    //  var estacion;
    //  estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
    // //  estaciones.pop();
    //  estacion = estaciones.pop();
    //  console.log(estaciones);
    //  console.log(estacion);

//  Metodo .shift() El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo. 
//  devolviendo el valor eliminado. Si la propiedad length es 0, devuelve undefined

    var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
    estaciones.shift();
    console.log(estaciones);

//  Metodo .unshift El método unshift inserta los valores proporcionados al inicio de un objeto del tipo array

    var estaciones = ["Invierno", "Otoño", "Primavera"];
    estaciones.unshift("Verano"); // Agregar al principio del array
    console.log(estaciones);


    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    .reduce((sum, appliedRefund) => sum + appliedRefund.amount, 0)

//    practicar estos metodos que contengan objetos dentro de un array filter map slice find reduce keys chunk first last join remove sort groupBy take some 


// instalar libreria = lodash


import _ from 'lodash'

