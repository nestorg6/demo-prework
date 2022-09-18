

// Operadores Logicos
/*
    Tabla de la verdad del operador AND &&
    Para: X && Y

    |  X  |  Y  |  X && Y  | 
    ------------------------
    |  T  |  T  |     T    |
    |  T  |  F  |     F    |
    |  F  |  T  |     F    |
    |  F  |  F  |     F    |

    La expresion solo es verdadera cuando ambos operando son verdaderos.

*/

    var a = 8;

    console.log((a > 5) && (a < 10));

// Operador OR || 

/* 
     Tabla de la verdad del operador AND &&
    Para: X || Y

    |  X  |  Y  |  X || Y  | 
    ------------------------
    |  T  |  T  |     T    |
    |  T  |  F  |     T    |
    |  F  |  T  |     T    |
    |  F  |  F  |     F    |

*/

    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    console.log(false || false);

// Operador NOT 

/* 
     Tabla de verdad del operador NOT !
    Para: !X

    |  X  |  !X | 
    -------------
    |  T  |  F  |
    |  F  |  T  |

*/

    console.log(!true); // false
    console.log(!false); // true

    var a = 8;

    // !(a > 5) --> !true --> false
    console.log(!(a > 5));
    // ! (a < 5) --> !false  -->  true
    console.log(!(a < 5));


