
function suma(n1,n2){
    
    return n1+n2
    
    
}

module.exports={
    suma:suma
}
 
/*
console.log("el resultado de la suma es de "+suma(22,44))*/

function resta(n1,n2){
    return n1-n2
}
 
/*
console.log("el resultado de la suma es de "+resta(22,44))*/


function multiplicacion(n1,n2){
    return n1*n2
}
 
/*
console.log("el resultado de la suma es de "+multiplicacion(22,44))*/


function division(n1,n2){
    if(n2==0){
        return("imposible dividir")
    }

    return n1/n2
}


 
/*
console.log("el resultado de la suma es de "+division(22,44))*/



