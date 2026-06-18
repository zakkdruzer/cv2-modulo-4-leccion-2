let variableI="Hola";
let variableII="";
let variableIII=0;
let variableIV=null;
let variableV=1;


if(variableI == "Hola" || variableII== "Chao" ){
    console.log("entro al If por que la evaluacion es true");
    
} else {
     console.log("entro al else por que la evaluacion es false");
}


if(variableI == "Hola" && variableII == "" ){
    console.log("entro al If por que la evaluacion es true");
    
} else {
     console.log("entro al else por que la evaluacion es false");
}

const estiloRojo = 'color: #f10a0a;' 
const estiloVerde = 'color: #0af115;' 

if(variableI && variableII){
    console.log("%c entro al If por que la evaluacion es true",estiloVerde);    
} else {
     console.log("%c entro al else por que la evaluacion es false",estiloRojo);
}

if(variableI || variableII){
    console.log("%c entro al If por que la evaluacion es true",estiloVerde);    
} else {
     console.log("%c entro al else por que la evaluacion es false",estiloRojo);
}


if(!variableV){
    console.log("%c entro al If por que la evaluacion es true",estiloVerde);    
} else {
     console.log("%c entro al else por que la evaluacion es false",estiloRojo);
}