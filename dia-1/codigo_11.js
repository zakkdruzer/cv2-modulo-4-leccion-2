//scope - ambito

let miVariableGlobal="Soy Global";



console.log(miVariableGlobal);


function test(){
    let miVariableLocal="soy local por que vivo en la funcion";
    console.log(miVariableLocal);
}
test();


console.log(miVariableGlobal);

if(1==1){
    let miVariableLocal="soy local por que vivo en el if";
    console.log(miVariableLocal);
}
