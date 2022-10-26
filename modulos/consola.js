var table = [
 {
  a: 1,
  b: "Z"
 },
 {
  a: 2,
  b: "Otra"
 }
]
// console.log("conversacion:");
// console.group("conversacion")
// console.log("hola");
// console.group("bla")
// console.log("blabla");
// console.log("blabla");
// console.log("blabla");
// console.log("adios");
// console.groupEnd("bla")
// console.groupEnd("conver")
// console.info("Algo");
// console.error("Algo = pinta rojo");
// console.warn("Algo = pinta amarillo - potencial error");
// console.table(table);
// console.group()


function function1(){
 console.group("funcion 1 ")
 console.log("esto es de la funcioon 1")
 console.log("esto tambien")
 function2();
 console.log("hemos vuelto a la funcion 1")
 console.groupEnd("funcion 1 ")
}

function function2(){
 console.group("funcion 2 ")
 console.log("ahora estamos en la funcion 2")
 
 console.groupEnd("funcion 2 ")
}

console.time("ejecucion")
console.log("empezamos");

function1()
// limpiar consola
// console.clear()

console.count("veces")
console.count("veces")
console.count("veces")
console.countReset("veces")
console.count("veces")


console.timeEnd("ejecucion")