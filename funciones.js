// Declarativas 
    function miFuncion() {
        return 3;
    }

// Expresivas 

    var miFuncion = function(a, b){
        return a + b;
    }
    console.log(miFuncion(3, 4));

// Ejercicios

    function saludarEstudiantes(estudiante){
        console.log(estudiante);
        console.log(`Hola ${estudiante}`);
    }
    saludarEstudiantes("Nestor");

// 
    function sumar(a,b){
        var resultado = a + b;
        return resultado;
    }
    console.log(sumar(1,3));
    