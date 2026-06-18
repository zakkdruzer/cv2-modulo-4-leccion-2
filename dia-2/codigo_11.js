//ternarios

// estructura--> (condición)? valorSiVerdadero : valorSiFalso
let edad=18;


let mensaje = (edad >= 18 )? 'Eres Mayor de Edad' : 'Eres Menor de Edad';


console.log(mensaje);


let mensaje2;
if(edad >= 18){
    mensaje2='Eres Mayor de Edad';
}else {
    mensaje2='Eres Menor de Edad';
}
console.log(mensaje2);