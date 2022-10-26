// global es un objeto en donde estan las funciones que ejecutamos de forma general sin importar nada, como por ejemplo setInterval()
// console.log(global);
// let i = 0
// let intervalo = setInterval(function () {
//  if(i === 3){
//   clearInterval(intervalo)
//  }
//  i++;
//  console.log("Hola");
// }, 1000);

// setImmediate(function() {
//  console.log("hola")
// })
// esta variable process es un objeto que tiene mucha informacion entre ella las variables de entorno 
// console.log(process);
// direccion del fichero
console.log(__dirname);
// direccion del fichero y nombre del file
console.log(__filename);


// crear variables globales

global.miVariable = 'elValor';

console.log(global.miVariable);
// or
console.log(miVariable);
