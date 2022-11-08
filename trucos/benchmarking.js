console.time('todo')
let suma = 0;

console.time('bucle')
for(let i = 0; i < 1000000000; i++){
 suma += 1;
}
console.timeEnd('bucle')

function asincrona(){
 return new Promise((resolve) => {
  setTimeout(function() {
    console.log('termina el proceso asincrono')
    resolve()
  })
 }) 
}


console.time('bucle 2')
for(let j = 0; j < 1000000000; j++){
 suma += 1;
}
console.timeEnd('bucle 2')


console.time('asicrono')
console.log('empieza el proceso asicrono')
asincrona().then(() => {
 console.timeEnd('asicrono')
})



console.timeEnd('todo')