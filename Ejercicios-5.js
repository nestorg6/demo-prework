const lodash = require("lodash")
// // -------------En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.
// La solución debería tener un input y output como los siguientes:
// Input
// solution([2, 4, 5, 6]);
// Output
// [4,8,10,12]

// Respuesta 1

let result = [2, 4, 5, 6];

let numMultiplicados = 2;

let array = result.map(numMultiplicado => numMultiplicado * numMultiplicados);

console.log(array);


// Respuesta 2

let solution = [2, 4, 5, 6];

let numMultiplicar = solution.map(function(array){
return array * 2;
});
console.log(numMultiplicar);



// const array = [1, 3, 5, 7, 11, 11];
// const numberPar = array.some(function(valor){
// return valor %2 === 0;
// });
// console.log(numberPar);





// let prefijos = ["super", "spider", "ant", "iron"]
// let sufijo = "man";

// let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

// console.log(nombresCompletos);

// // ["superman", "spiderman", "antman", "ironman"]



const customer = [{
    email : "meylingapaza@hotmail.com",
    address : "Tocopilla 830",
    city : "Arica",
    document_number : 191477650,
    phone : 993125929,
    full_name : "Meyling Apaza"
},
{
    email : "meylingapaza@hotmail.com",
    address : "Tocopilla 830",
    city : "Santiago",
    document_number : 191477650,
    phone : 993125929,
    full_name : "Marianny"
},

{
    email : "nestorgalvis1988@gmail.com",
    address : "Tocopilla 830",
    city : "Santiago",
    document_number : 191477650,
    phone : 993125929,
    full_name : "Nestor"
}];
const agrupados = lodash.groupBy(customer, "city")
const dataClient = customer.filter(function(Cliente){
    return Cliente.city == "Santiago";
   
}).map(function(Cliente){
    if (Cliente.full_name == "Nestor")
        return {
            email: "nestorgalvis1988@walmart.com" , full_name: "Camila"
        }
    else return {
        email: Cliente.email, full_name: Cliente.full_name
    }
    // return array.filter(Client => Client.email === "" && Client.address === "Av quilin 4931" && Client.phone === number);
})
console.log(dataClient);
console.log(agrupados);