const os= require('os');
console.log("informacion del cpu",os.cpus());
console.log("Memoria total",os.totalmem());
console.log("Memoria libre:",os.freemem());
console.log("Basado en:",os.arch());
console.log("Ruta base",os.homedir());
console.log("Nombre del host",os.hostname());
console.log("Direccion IP",os.networkInterfaces());
