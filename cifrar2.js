 const bc=require("bcryptjs");


bc.genSalt(10,(error,salt)=>{
if (error)
console.log(error)

else{
    bc.hash("esto es la contraseña",salt,(error,hash)=>{
        if (error)
        console.log(error)

        else   
        console.log(hash)
    })
}
})


var salt= bc.genSaltSync(10);
console.log("salt generado"+salt)
