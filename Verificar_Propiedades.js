

// Verificacion de Propiedades
    //Ejercicio #1

    let miCuaderno = {
        "color": "Azul",
        "categoria": 3,
        "precio": 4.56
    };

    console.log(miCuaderno.hasOwnProperty("color"));
    console.log(miCuaderno.hasOwnProperty("categoria"));
    console.log(miCuaderno.hasOwnProperty("origen"));


    //Ejercicio #2

    function verificarPropiedad(obj, propiedad){
        if (obj.hasOwnProperty(propiedad)){
            return "Propiedad: " + obj[propiedad];
        }else {
            return "El objeto no tiene esta propiedad.";
        }
    }
    let miCuaderno1 = {
        "color": "Azul",
        "categoria": 3,
        "precio": 4.56
    };
    console.log(verificarPropiedad(miCuaderno1, "color"));

