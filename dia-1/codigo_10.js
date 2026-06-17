//typeof

let miVariable;
console.log(typeof miVariable);

miVariable="Texto";
console.log(typeof miVariable);

miVariable=0.5;
console.log(typeof miVariable);


miVariable={ nombre:"Julian"};
console.log(typeof miVariable);


miVariable=false;
console.log(typeof miVariable);


miVariable = [false,"hola",23];
console.log(typeof miVariable);
console.log("es un arrelgo",Array.isArray(miVariable) );


miVariable=false;
console.log("es un arrelgo",Array.isArray(miVariable) );