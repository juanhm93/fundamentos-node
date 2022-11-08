// const p = require('process');

process.on('beforeExit', () => {
 console.log('el proceso va a terminar')
})


process.on('exit', () => {
 console.log('Ale, el proceso acabo')
 // Este proceso no puede tener otro hilo, ya que es la accion al finalizar
 setTimeout(() => {
  console.log("Esto no se va a ver nunca")
 },0)
})
setTimeout(() => {
 console.log("Esto si se va a ver nunca")
},0)

process.on('uncaughtException', (err, origen) => {
 console.log('vaya se nos ha olvidado capturar el error')
 setTimeout(() => {
  console.log("Esto viene desde las excepciones")
 },0)
 console.error(err);
})
// process.on('unhandledRejection', (err,))

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale")