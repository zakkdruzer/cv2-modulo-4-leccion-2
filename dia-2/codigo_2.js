const IVA=0.19;
const PORC_DESCUENTO_ALUMNO=0.25;

let precioNeto= 10000;

let precioConDescuento= precioNeto - precioNeto * PORC_DESCUENTO_ALUMNO;
console.log(`Precio Con descuento : $ ${precioConDescuento}`);

let precioFinal = precioConDescuento + precioConDescuento * IVA;


console.log(`Precio Final: $ ${precioFinal}`);
