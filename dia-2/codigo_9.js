// && -> AND

    2 == 2 && 1 == 1
//   true.     true   = true


     2 == 3 && 1 == 1
//    false     true ----> false



     2 == 2 && 1 == 5
//    true     false ----> false




// || -> OR


    2 == 2 || 1 == 1
//   true ---------------> true


    2 == 2 || 1 == 5
//   true ---------------> true


    2 == 3 || 1 == 1
//   false     true ------true  




// ! -> NOT

    !false  //--> es true
    !true  //--> es false







// anecdotico
    console.log( true && "hola" );
    console.log( 0 && "hola" ); 
    console.log("a" && "b" && "c");


    console.log(false || "rescate");  
    console.log("" || 0 || "fin");


    console.log(!"hola"); 
    console.log(!0); 