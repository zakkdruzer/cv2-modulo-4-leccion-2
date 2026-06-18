let precio   = 5990;
let cantidad = 3;
let despacho = 2000;




let total = (precio * cantidad) + despacho;
console.log(total);

console.log(total.toLocaleString());
console.log(precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }));
console.log(despacho.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }));
console.log(total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }));

let totalMalo = precio * (cantidad + despacho);
console.log(totalMalo);
console.log(totalMalo.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }));