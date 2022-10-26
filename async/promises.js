function hola(nombre) {
 return new Promise(function(resolve, reject) {

  setTimeout(() => {
    console.log("Hola, "+ nombre);
    resolve(nombre)
   }, 1500);
 })
}

function hablar(nombre){
 return new Promise((resolve, reject) => {

  setTimeout(function(){
   console.log("Bla bla bla bla...")
   // resolve(nombre)
   reject("hay un error")
  },1000);
 })
}

function adios(nombre){
 return new Promise((resolve,reject) => {

  setTimeout(() => {
   console.log("Adios ", nombre);
   resolve()
  }, 1000);
 })
}

function conversacion(nombre, veces, callback){
 if(veces > 0){
  hablar(function() {
   conversacion(nombre, --veces, callback)
  })
 }else{
   adios(nombre, callback)
 }
}

// 

console.log("Iniciando el proceso...")
hola('Juan')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
 .then((nombre) => {
  console.log("terminado el proceso")
 })
 .catch(error => {
  console.log("ha habido un error:")
  console.log(error)
 })