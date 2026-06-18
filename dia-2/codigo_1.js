let nombreCompleto = "Luisa Rojas";
let puntaje        = 1500;
let vivo           = true;
let inventario     = ["espada", "escudo", "poción"];

console.log(" Nombre Jugador: "+nombreCompleto, `|  tipo: ${typeof nombreCompleto}`);
console.log(`Puntaje ${puntaje} |  tipo: ${typeof puntaje}`);
console.log(`¿Esta Vivo?: ${vivo} |  tipo: ${typeof vivo}`);
console.log(` Inventario: ${inventario}|  tipo: ${typeof inventario}, es un array ${Array.isArray(inventario)}`);

let texto0=`
Nombre Jugador ${nombreCompleto} |  tipo: ${typeof nombreCompleto}
Puntaje ${puntaje} |  tipo: ${typeof puntaje}
¿Esta Vivo?: ${vivo} |  tipo: ${typeof vivo}
Inventario: ${inventario}|  tipo: ${typeof inventario}, es un array ${Array.isArray(inventario)}
`;
console.log(texto0);


let texto1='Parrafo 1 asdasd \n';
texto1+="Parrafo 2 asdasd"

console.log(texto1);

let texto2='Parrafo 3 asdasd \n';
texto2= texto2+"Parrafo 4 asdasd"
console.log(texto2);