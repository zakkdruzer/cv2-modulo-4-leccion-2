let nombre = "Juan";
let apellido = "Herrera"; 


console.log(`El Caracter inicial del nombre es = ${nombre.charAt(0)}`);
let ultimoCaracter= nombre.length - 1
console.log(`El Caracter final del nombre es = ${nombre.charAt(ultimoCaracter)}`);

console.log(`El nombre '${nombre}' tiene  ${nombre.length} caracteres `);



let texto="Lorem ipsum dolo";
let textoSinEspacio= texto.replaceAll(' ','');
console.log('textoSinEspacio:',textoSinEspacio);

console.log(`El texto  '${texto}' tiene  ${texto.length} caracteres `);
console.log(`El texto  '${texto}' tiene  ${textoSinEspacio.length} caracteres sin contar espacios `);