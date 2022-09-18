
// Sentencias Switch

// Ejemplo #1
    function classifyvalue(value){
        var answer;
        switch (value){
            case 1:
                answer = "alpha";
                break;
            case 2:
                answer = "beta";
                break;
            case 3:
                answer = "gamma";
                break;
            case 4:
                answer = "delta";
                break;
        }
        return answer;
    }
    console.log(classifyvalue(4));

// Ejemplo #2

    var product = "Hot Dog";

    switch (product){
         case "Pizza":
             console.log("The price Pizza is $3.5");
         break;
        case "Burger":
            console.log("The price burger is $5.8");
        break;
        case "Hot Dog":
            console.log("The price Hot Dog is $2.5");
        break;
}

// Ejemplo #3

    function selectLanguage (value){
        var language;
        switch (value){
            case 1: 
                language = "Spanish";
                break;
            case 2:
                language = "French";
                break;
            case 3: 
                language = "Chinese";
                break;
            case 4:
                language = "Italian"
                break;
            case 5:
                language = "English"
                break;
        }
        return language;
    } 
    console.log(selectLanguage(5));

// Sentencias Switch Multiples Casos

function clasificarVolumen(valor){
    var volumen;
    switch (valor){
        case 1:
            volumen = "Bajo";
            break;
        case 2:
        case 3:
            volumen = "Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(5));



// Reemplazar "if...else" por "switch"

function selectLanguage (value){
    var language;
    switch (value){
        case 1: 
            language = "Spanish";
            break;
        case 2:
            language = "French";
            break;
        case 3: 
            language = "Chinese";
            break;
        case 4:
            language = "Italian"
            break;
        default:
        case 5:
            language = "English"
            break;
    }
    return language;
} 
console.log(selectLanguage(5));


