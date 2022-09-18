
// Variacion de una Cola (queue)

/*
    En informatica una cola (queue) es una estructura de datos abstracta
    en el cual los elementos se mantienen en orden. Los nuevos elementos se pueden
    añadir al final de la cola y los elementos previos se retiran del principio de la cola.

    Define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un numero (elemento)
    como argumentos. agrega el numero al final del arreglo y luego elimina el primer
    elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento
    que fue removido.
*/

    function proximoEnLaFila(arreglo, elemento){
        arreglo.push(elemento);          // Agregar al final del arreglo.
        return arreglo.shift();          // Remover el primer elemento.
    }

    var miArreglo = [1, 2, 3, 4, 5];

    console.log("Antes: " + JSON.stringify(miArreglo));

    console.log(proximoEnLaFila(miArreglo, 6));

    console.log("Despues: " + JSON.stringify(miArreglo));