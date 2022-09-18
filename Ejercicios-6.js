

// Metodo find


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '12345678',
      categoria: "Plana"
    },
    {
      name: "Burger",
      price: 20,
      id: '987654321',
      categoria: "Redonda"
    },
    {
      name: "Hot dog",
      price: 34,
      id: '4567089',
      categoria: "Redonda"
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '984057681',
      categoria: "Plana"
    },
  ];


  const food = products.filter(function(nameFood){
        return nameFood.categoria === "Plana";
  }).find(function(nameFood){
    return nameFood.name === "Hot cakes"
  })
  if (food)
    console.log(`Si hay Hot Cakes ${JSON.stringify(food)}`);

  else 
    console.log(food, "No hay Hamburguesas");



   // --------------------------------------------------

// }).map(function(Cliente){
//     if (Cliente.full_name == "Nestor")
//         return {
//             email: "nestorgalvis1988@walmart.com" , full_name: "Camila"
//         }
//     else return {
//         email: Cliente.email, full_name: Cliente.full_name
//     }
//     // return array.filter(Client => Client.email === "" && Client.address === "Av quilin 4931" && Client.phone === number);
// })
// console.log(dataClient);
// console.log(agrupados);



    // if (food === undefined)
    //     console.log("No hay Hamburguesas");
    // else 
    //     console.log(food, "Si hay Hamburguesas");



//   if(EmpName === undefined){
//     console.log("EmpName no está definido");
//   } else {
//     console.log("EmpName está definido");
//   }



// if (!food)
// if (food)
// if (!food)