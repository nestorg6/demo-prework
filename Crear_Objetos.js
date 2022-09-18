

// Crear Objetos y Acceder a Propiedades Notacion de Punto

    let miPerro = {
        "nombre": "Gino",
        "edad": 5,
        "peso": 6,
        "raza": "Beagle"
    }

    console.log(miPerro.nombre + " es un " + miPerro.raza);
    console.log(miPerro.nombre + " tiene " + miPerro.edad + " años ");
    console.log(miPerro.nombre + " Pesa " + miPerro.peso + " Kgs ");

// Acceder a Propiedades Notacion de Corchetes

    let miCuaderno = {
        "Color": "Azul",
        "Categoria": 3,
        "Numero de Paginas": 200,
        "numeroDeHojas": 100
    }

    console.log(miCuaderno["Color"]);
    console.log(miCuaderno["numeroDeHojas"]);
    console.log(miCuaderno["Categoria"]);

// Acceder a Propiedades Variables

    let resultados = {
        1: "nora256",
        2: "gino577",
        3: "estef543",
        4: "kiara566"
    };

    let posicion = 4;

    console.log(resultados[posicion]);

// Actualizar Objetos

    let mochila = {
        "color": "azul",
        "tamaño": "mediano",
        "contenido": ["botella de agua", "cuaderno"]
    };

    console.log(mochila.color); // azul
    mochila.color = "verde"
    console.log(mochila.color); // verde
    mochila.contenido.push("lapiz");
    console.log(mochila.contenido);
    mochila.contenido = ["Cartuchera"];
    console.log(mochila.contenido);

// Agregar Nuevas Propiedades a un Objeto 

    let curso = {
        "titulo": "Aprende JavaScript desde Cero",
        "idioma": "Español",
        "duracion": 30
    };

    curso.vistas = 34500;
    console.log(curso.vistas);

// Eliminar Propiedades a un Objeto


    let curso1 = {
        "titulo": "Aprende JavaScript desde Cero",
        "idioma": "Español",
        "duracion": 30
    };

    console.log(curso1);
    console.log(curso1.duracion); // 30
    delete curso1.duracion;
    console.log(curso1.duracion); // undefined