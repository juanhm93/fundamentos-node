function hola(nombre, myCallback) {
 setTimeout(() => {
   console.log("Hola, "+ nombre);
   // console.log("Estoy siendo asincrona")
   myCallback(nombre)
  }, 1500);
}

function hablar(callbackHablar){
 setTimeout(function(){
  console.log("Bla bla bla bla...")
  callbackHablar()
 },1000);
}

function adios(nombre, otroCallback){
 setTimeout(() => {
  console.log("Adios ", nombre);
  otroCallback()
 }, 1000);
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

console.log("Iniciando proceso...")
hola("juan",function(nombre) {
 conversacion(nombre, 3, function(){
  console.log("proceso terminado")
 })
})
// hola("juan",function(nombre) {
//  adios(nombre,function(){
//   console.log("terminado")
//  })
// })


//  hola("juan",function(nombre) {
//  hablar(function(){
//   hablar(function() {
//    adios(nombre, function(){
//     console.log("Terminando proceso...")
//    })
//   })
//  })
// })

// hola("Juan", function() {})
// adios("Juan", function() {})
