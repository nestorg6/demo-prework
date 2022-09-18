// // Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100, 
// // y además que el estado delivered sea "true".
// // La solución debería tener un input y output como los siguientes:

const ordersPurchase = [{customerName: "Nicolas", total: 100, delivered: true}, {customerName: "Zulema", total: 120, delivered: false}, {customerName: "Valeria", total: 250, delivered: true}]
function solution(array, delivered, total) {
return array.filter(ordenes => ordenes.delivered === delivered && ordenes.total >=total)
   
};console.log('solution', solution(ordersPurchase,false,100))