/**
 * 
 * 
 * Actualmente tanto la version LTS como current agregaron la API de File System basado en promesas 😃

Ejemplo de uso de forma nativa:

EJEMPLO DE IMPORT Y FUNCIONES ASINCRONAS

const fs = require('fs').promise;

async function leer(ruta){
 try{
  const data = await fs.readFile(ruta);
  return data.toString();
 }catch(err){
  console.error(err);
 }
}

async function escribir(ruta, contenido){

 try {
   await fs.writeFile(ruta,contenido)
   console.log("Se pudo escribir correctamente")
 } catch (error) {
  console.log("No he podido escribirlo", error)
 }
}

async function borrar(ruta, callback){
 try {
  await fs.unlink(ruta);
 } catch (error) {
  console.error(error);
 }
 
}

 */

const fs = require('fs');

function leer(ruta,callback){
 fs.readFile(ruta, (err, data) => {
  // leido
  callback(data.toString());
 })
}


function escribir(ruta, contenido, callback){
 fs.writeFile(ruta,contenido, function(err) {
  if(err){
   console.log("No he podido escribirlo", err)
  }else{
   console.log("Se pudo escribir correctamente")
  }
 })
}

function borrar(ruta, callback){
 fs.unlink(ruta, callback);
}

// leer(__dirname + "/archivo1.txt",console.log);
// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log)
// borrar(__dirname + "/archivo1.txt", console.log)


