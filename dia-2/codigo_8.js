/* FALSY

false
0, 0.0
"" ''
null 
undefined
NAN
*/

console.log("false->",Boolean(false));
console.log("0 ->",Boolean(0));
console.log("'' ->",Boolean(''));
console.log('"" ->',Boolean(""));
console.log('null ->',Boolean(null));
console.log('undefined ->',Boolean(undefined));
console.log('NaN ->',Boolean(NaN));

let variable='';
if(variable){

}else {
    console.log(`${variable}: entro al else`);
    
}

/* Truthy
 true
 "algun valor"
 1
 "0"
*/
console.log('true ->',Boolean(true));
console.log('"algun valor" ->',Boolean("algun valor"));
console.log(' 1 ->',Boolean(1));
console.log(' -1 ->',Boolean(-1));
console.log('"0" ->',Boolean("0"));

let variable2="0";
if(variable2){
console.log(`${variable2}: entro al if`);
}else {
    console.log(`${variable2}: entro al else`);
    
}




console.log("NAN == undefined", Number("s") != undefined);
