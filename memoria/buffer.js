// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.

// Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
// con esto crea un buffer con 4 espacios en memoria vacios
// <Buffer 00 00 00 00>
// let buffer = Buffer.alloc(4);
// cada conjunto del array es un conjunto de datos binarios(<Buffer 01 02 03>)
// let buffer = Buffer.from([1,2,3]);
// <Buffer 68 6f 6c 61> esta les la traduccion de hola en el buffer
let buffer = Buffer.from('hola');

// console.log(buffer);


let abc = Buffer.alloc(26)

console.log(abc)

for(let i = 0; i < abc.length; i++){
 abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString())