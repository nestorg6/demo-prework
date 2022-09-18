// El hoisting: Es cuando las variables y las funciones se declaran antes de que se procese cualquier tipo de codigo.
 // El hoisting solo sucede antes de ecmascript 5 hacia abajo.


    console.log(miNombre);
    var miNombre;
    miNombre = "Nestor Galvis Gonzalez";

    // este codigo arroja undefined porque se esta imprimiendo una variable que no ha sido declarada

   
    var miNombre;
    miNombre = "Nestor Galvis Gonzalez";
    console.log(miNombre);