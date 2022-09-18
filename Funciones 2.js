
// // Definición de una Funcion
// //   nombre-funcion->!       !---> asginar parametros a la función.
//     function mostrarMensaje(a, b){    // de esta manera se define una funcion, se utiliza la palabra function y luego se le asigna un nombre a la function
//         console.log("Hello Beautiful!", "World");  // ====> Cuerpo de la funcion
//     }
//     mostrarMensaje();
//     mostrarMensaje();

// Argumentos de una Funcion

    // function mostrarMensaje (a, b){
    //     var suma = a + b;
    //     console.log("El resultado de " + a + " + " + b + " es: " + suma); 
    // }          //   !------ a estos valores se les llama argumento, los argumentos son los valores que asignamos a los parametros
    // mostrarMensaje(5, 10);
    // mostrarMensaje(6, 200); //-----> de esta manera se llama a una funcion colocando el nombre de la funcion con (), se puede llamar varias veces la funcion
    // mostrarMensaje(8, 50);
// ---------------------------------------------------
    function mostrarMensaje (a, b){
        var suma = a + b;
        console.log("El resultado de " + a + " + " + b + " es: " + suma); 
    }// tambien se pueden declarar variables fuera del cuerpo de la funcion asignarles valores, y mostrarlo en la llamada de la funcion    
    var x = 5
    var y = 3
    mostrarMensaje(x, y);

//---------------------------------------------------

    function concatenarTresCadenas(cadena1, cadena2, cadena3){
        console.log(cadena1 + " " + cadena2 + " " + cadena3);

    }

    concatenarTresCadenas("I am", "learning", "to program");

// Ambito Global = En javascript tenemos 2 tipos principales de variables Globales y Locales
    // La variable global se puede moficar en cualquier lugar del programa
    // variable ambito Global = se puede utilizar en cualquier lugar del programa, porque esta definida en el programa principal
        // ej: var miVariableGlobal = 5; esta variable es global porque se esta definiendo en el programa princiapl y no dentro de una funcion

// Variable Ambito Local = Se definen dentro de una funcion y solo se pueden usar dentro de esa funcion

    function miFuncion(){
        var miVariableLocal = 4;
        console.log(miVariableLocal);
    }

    miFuncion();
   // console.log(miVariableLocal); // arroja error porque la variable esta definida dentro del cuerpo de la funcion.

// V Globlar vs V Local
// En este ejemplo tiene prioridad la V local porque esta declarada en el cuerpo de la funcion, al llamar a la funcion mostrara el valor de la V.Local
// para imprimir la V Global se debe hacer un console.log fuera de la funcion
    var miNombre = "Nestor Galvis";

    function mostrarMiNombre(){
        var miNombre = "Camila Galvis";
        console.log(miNombre);
    }

    mostrarMiNombre();
    console.log(miNombre);

// Retornar un valor de una funcion

    function sumar(a, b){
        return a + b;
    }
    console.log(sumar(34, 50));

// Asignar un valor retornado

    function crearCadenaConMeta(lenguajeDeProgramacion){
        return "Mi meta es aprender " + lenguajeDeProgramacion
    }
    var miMeta = crearCadenaConMeta("Javascript");
    console.log(miMeta);

