//  <!-- link para practicar:  https://www.freecodecamp.org/espanol/

//  Conceptos:

//     1.- Variable es una cajita donde permite guardar un valor, Una variable permite crear un espacio en la memoria del dispositivo para guardar un valor especifico en ese espacio de la memoria, Ejemplo:
// https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/#:~:text=Las%20variables%20var%20pueden%20ser,parte%20superior%20de%20su%20%C3%A1mbito.



//             .- (simbolo = es el operador de asignación a una variable en Javascript) 
//             .- para definir una variable se utiliza var, let o const, luego se les asigna un nombre y un valor.
//             .- Javascript es sensible a mayuscula y minuscula.
//             .- 
//             .- 'freeCodeCamp'; = es una cadena de caracteres 'string', un texto siempre se debe declarar con comillas simples o doble.
//             .- Es recomendable asignar nombre descriptivo a las variables. Ejemplo si vas a colocar un nombre puedes declararlo (var miNombre)
//             .- A las variables se les asignan valores
//             .- var x; declarar una variable, var x = 9; se esta declarando la variable y asignando un valor
//             .- var x = 9; // Inicializando la variable


// Las declaraciones var tienen un ámbito global o un ámbito función/local, mientras que let y const tienen un ámbito de bloque.
// Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, 
// pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas.Todas ellas se elevan a la parte superior de su ámbito. 
// Pero mientras que las variables var se inicializan con undefined, let y const no se inicializan.
// Mientras que var y let pueden ser declaradas sin ser inicializadas, const debe ser inicializada durante la declaración.


    
//             Codigo Ejemplo:  -->
            
                var miVariable = "freeCodeCamp";
                console.log(miVariable);

                miVariable = 16;
                console.log(miVariable);

                var miVariable = true;
                console.log(miVariable);
                
                var miNombre = "Nestor"
                console.log(miNombre);

                var a;
                var b = 2;
                console.log(a); //undefined porque no se le asigno un valor a la variable (a) 
                console.log(b); // tiene un valor

                a = 10;
                console.log(a);


    // definir el valor de una variable a otra variable 

                //Ejemplo:

                var a = 5;
                var b = a;
                console.log(a);
                console.log(b);

                b = a;
                console.log(b);

     //inicializar una variable: var x = 9; se debe definir la variable y asignar un valor
    // Variables no inicializadas: 
    var a; var b; a = 20; b = 50; console.log("a:", a, "b:", b);


const a;
a = "Hola Mundo";
console.log(a)

let a;
a = "Hola Mundo";
console.log(a)
let a = "Hello People";
console.log(a)

var a;
a = "Hola Mundo";
console.log(a)
var a = "Hello People";
console.log(a);



let a = "Hello People";
function miNombre(apellido){
    let a = "Hola mundo"
    console.log(a);
}
miNombre(a);