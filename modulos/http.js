const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
 console.log('Nueva peticion!')
 console.log(req.url);

 switch(req.url){
  case '/hola':
    let saludo = hola()
   res.write(saludo);
   res.end();
   break;
  
  default: 
   res.write('Error 404: No se lo que quieres');
   res.end();
 }

 // res.writeHead(201,{'Content-Type': 'text/plain'})
 // // Escribir respuesta al usuario
 // res.write("hola, ya se usar HTTP de NodeJS")

 // res.end();
}

function hola(){
  return 'Hola, que tal'
}


console.log("escuchando http en el puerto 3000");

// CLASE 27 DEBUGGER en modulo http
// Usando debugger with flag inspect
// node --inspect modulos/http.js  
// para ver en el navegador ir a chrome://inspect/#devices
// select option target open popup devtools