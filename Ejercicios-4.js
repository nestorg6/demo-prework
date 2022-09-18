
// Codigo de Golf
/* 
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes
que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un hombre diferente dependiendo de que tan por encima o por debajo del pr esten tus golpes.

Tu función tomará los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad:

Golpes               Retornar
------------------------------
1                    "Hole-in-one!"
<= par -2            "Eagle"
par - 1              "Birdie"
par                  "Par"
par + 1              "Bogey"
par + 2              "Double Bogey"
>= par + 3           "Go Home"

par y golpes siempre seran numericos y positivos.
*/

    function puntajeDeGolf(par, golpes){
        if (golpes == 1){
            return "Hole-in-one!";
        }else if (golpes <= par - 2){
            return "Eagle";
        }else if (golpes == par - 1){
            return "Birdie";
        }else if (golpes == par){
            return "Par";
        }else if (golpes == par + 1){
            return "Bogey";
        }else if (golpes == par + 2){
            return "Double Bogey";
        }else if (golpes >= par + 3){
            return "Go Home";
        }
    }

    puntajeDeGolf();
    // console.log(puntajeDeGolf(4, 1));
    // console.log(puntajeDeGolf(4, 2));
    // console.log(puntajeDeGolf(3, 2));
    // console.log(puntajeDeGolf(3, 3));
    // console.log(puntajeDeGolf(6, 7));
    // console.log(puntajeDeGolf(3, 5));
    // console.log(puntajeDeGolf(5, 8));