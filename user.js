const bc = require("bcryptjs")

function cifrar(usuario,password){

    
    var usuario={
        "usuario": usuario,
        "salt":"",
        "hash_password":"",
        "estado":true
    }
try{
    usuario.salt=bc.genSaltSync(10)
    usuario.hash_password=bc.hashSync(password,usuario.salt)
}
   catch(e){
    usuario.estado=false
   }

   return usuario;

 

}

module.exports={cifrar}