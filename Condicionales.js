
// Sentencias Condicionales

    var x = 5;
    if(x < 2){
        console.log("La condición es verdadera. ");
    }

    var estacion = "Invierno";

    if (estacion == "Invierno") {
        console.log("!Si¡ Me encanta el invierno");
    }

    console.log("Después del condicional...");


// Clausula "else"

    var x = 1;

    if (x < 2) {
        console.log("La codnicion es verdadera");
    }else {
        console.log("La condicion es falsa");
    }

    var estacion = "Verano";

    if (estacion === "Verano") {
        console.log("Comenzo el verano. Ya podemos ir a la playa. ");
    }else {
        console.log("Ya quiero que llegue el verano para poder ir a la playa. ");
    }

// Condicional else if

    function clasificarValor(valor) {
        if (valor % 2 == 0) {
            console.log("Divisible entre 2. ");
        }else if (valor % 3 == 0) {
            console.log("Divisible entre 3.");
        }else {
            console.log("No es divisible entre las opciones");
        }
    }

    clasificarValor(2);
    clasificarValor(15);
    clasificarValor(7);

// Condicionales Orden Lógico

    function clasificarValor(valor){
        if (valor < 5){
        console.log("Menor que 5. ");
    } else if (valor < 10) {
        console.log("Menor que 10. ");
    } else {
        console.log("Mayor o igual a 10.");
    }
 }

 clasificarValor(2);
 clasificarValor(15);
 clasificarValor(20)

// Ejercicios Condicional else if

    function interpretarIMC(indiceDeMasaCorportal){
        if (indiceDeMasaCorportal < 18.5){
            console.log("Bajo Peso");
        }else if (indiceDeMasaCorportal <= 24.9){
        console.log("Normal");
    }else if (indiceDeMasaCorportal <= 29.9){
    console.log("Sobrepeso");
    }else {
        console.log("Obeso");
    }
}
interpretarIMC(17.3);
interpretarIMC(20.5);
interpretarIMC(28.5);
interpretarIMC(30.2);
