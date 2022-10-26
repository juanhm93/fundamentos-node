function otraFuncion(){
   serompe();
}

function serompe(){
 return 3 + z;
}

function seRompeAsincrona(callback){
 setTimeout(function (){
  try {
   
   return 3 + z; 
  } catch (error) {
   console.error("error en mi funcion asincrina");
   callback(error)
  }
 })
}

try {
 
 // otraFuncion();
 seRompeAsincrona(function(error) {
  console.log("hay error")
  console.log(error)
 });
} catch (error) {
  console.error("vaya algo se ha roto...")
  console.error(error.message)
  console.error(error)
  console.log("Pero no pasa nada lo hemos capturado")
}

console.log("esto de aqui esta al final")