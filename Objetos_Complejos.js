

// Ejercicio #1

    let ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "mediana",
        "precio": "$5.67",
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLLevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": "$18.34",
        "toppings": [
            "extra queso",
            "pimenton",
            "aceitunas"
        ],
        "paraLLevar": false
    },
    {
        
            "tipo": "premium",
            "tamaño": "individual",
            "precio": "",
            "toppings": ["Aceituna"],
            
        "paraLLevar": true
    }
];

// console.log(ordenesDePizzas[0].tamaño);
// console.log(ordenesDePizzas[1].tamaño);
// console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[2].tipo);
console.log(ordenesDePizzas[2].tamaño);
// console.log(ordenesDePizzas[2].precio);
// console.log(ordenesDePizzas[2].toppings);
ordenesDePizzas[2].precio = "$18.40";
console.log(ordenesDePizzas[2].precio);
// ordenesDePizzas[2].toppings.unshift("pollo", "Salchicha Italiana", "Carne")
ordenesDePizzas[2].toppings = ["pollo", "Salchicha Italiana", "Carne"];
console.log(ordenesDePizzas[2].toppings);
