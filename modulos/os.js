// operative system

const os = require('os');

// arquitectura, en este caso x64 - 64bit
console.log(os.arch());
// que sistema operativo tienes, linux, mac, windows
console.log(os.platform());
// cantidad de nucleos en un array y su informacion en un objeto
// console.log(os.cpus());
// errores del sistema en sus constantes y otros datos
// console.log(os.constants);
const SIZE = 1024;
function kb(bytes) {return bytes / SIZE}
function mb(bytes) {return kb(bytes) / SIZE}
function gb(bytes) {return mb(bytes) / SIZE}
// disco duro
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
// memoria ram de maquina
console.log(gb(os.totalmem()));

// directorio home de mi maquina
console.log(os.homedir());
// directorio de archivos temporales
console.log(os.tmpdir());
// nombre de mi maquina, si trabajamos con microservicios es importante saber el host de la maquina para poderlo exportar
console.log(os.hostname());
// interfaces de red a la que esta conectada
console.log(os.networkInterfaces());
