

function Solution (){
    let total = 0 


    // 1.- recibir arreglo con productos


    // calcular el impuesto del 19% por cada elemento del arreglo 
    console.log(total)
    for (i = 0; i < Productos.length; i++) {
        let impuesto = 0.19;
        let productoActual = Productos[i]
        let taxes = 0.19 * productoActual.price
        productoActual.taxes = taxes
        let priceFinal = taxes + productoActual.price
        productoActual.priceFinal = priceFinal
        let priceTotal = productoActual.price * productoActual.stock
        productoActual.priceTotal = priceTotal
        total = total + priceTotal
        
            console.log(`i:${i} nombre:${productoActual.name} priceTotal:${priceTotal} total=${total}`)
        
    }
console.log(total)
}

let Productos = [{name: "Product 1", price: 1000, stock: 10}, {name: "Product 2", price: 2000, stock: 20}]

Solution(Productos)
//  agregar nueva propiedad precio mas taxes = precio final
// mostrar la cantidad de dinero que hay en productos: ej: el total de dinero de todos los productos




const a = Productos.reduce(function(total, currentValue){
    const priceTotal = currentValue.price * currentValue.stock
    return total + priceTotal;
}, 0)
console.log(a);



// .reduce((sum, appliedRefund) => sum + appliedRefund.amount, 0)




