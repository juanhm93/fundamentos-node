const { exec, spawn } = require('child_process');

// con esta instruccion puedo ejecutar el proceso de este archivo al mismo tiempo que ejecuto el de este independiente con nodemon
// // exec('node modulos/consola.js', (err, stdout, sterr) => {

// exec('ls -la', (err, stdout, sterr) => {
//  if(err){
//   console.error(err);
//   return false;
//  }

//  console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid)
console.log(proceso.connected)

// detectar cuando se cumple en evento stdout (para mostrar el resultado del spawn de las carpetas)
proceso.stdout.on('data', function(dato){
 console.log("esta muerto el proceso")
 console.log(proceso.killed)
 console.log(dato)
 console.log(dato.toString())
})

proceso.on('exit', function() {
 console.log("el proceso termino")
 console.log(proceso.killed)
})

/**
 
 El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.


 */