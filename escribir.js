const fs=require('fs');

var numeros2=""
for(var i=0;i <=100;i++)
numeros2 +=i + "/n"

fs.writeFile("./numeros2.txt",numeros2,(err)=>{
if (err)
  console.log(err)


  else 
console.log("se escribio el archivo")
});







