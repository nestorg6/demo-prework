

// Objetos Anidados

    let miReceta = {
        "descripcion": "mi postre favorito",
        "costo": 15.6,
        "ingredientes": {
            "masa": {
                "harina": "100 grs",
                "sal": "1 cucharadita",
                "agua": "1 taza",
            },
            "cobertura": {
                "azucar": "120 grs",
                "chocolate": "4 cucharadas",
                "mantequilla": "200 grs"
            }
        }
    };
    
    console.log(`Cantidad de Harina ${miReceta.ingredientes.masa.harina}`);
    console.log(`Cantidad de Sal ${miReceta.ingredientes.masa.sal}`);
    console.log(`Cantidad de Agua ${miReceta.ingredientes.masa.agua}`);

    console.log(`Cantidad de Ingredientes: ${JSON.stringify(miReceta.ingredientes.masa)}`);