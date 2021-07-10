const numeros = [1,2,3,4,5,6]

//console.log(numeros[2])

const nombres = ['Juan', 'Pedro', 'Diego']

//console.log(nombres)

const cualquierCosa = [1, 'Hola', 2.5, true, {numero:1, nombre:'Francisco'}]

//console.log(cualquierCosa)

for (let i = 0; i < numeros.length; i++) {
    //console.log('['+ numeros[i] + ']')   
}

numeros.push(200) //agrega elementos al final
numeros.unshift(600) //agrega elementos al principio
//numeros.pop() // elimina el ultimo elemento

for (const iterator of numeros) {
    //console.log(iterator)
}

numeros.forEach(function(el){
    //console.log(el)
});

const numerosNuevos = numeros.map(function(el){
    return el * 2
})

//console.log(numerosNuevos)

const numerosMayores = numeros.filter(el => el > 10)

//console.log(numerosMayores)

const sumaArreglo = numeros.reduce((total, el) => total + el, 0)

console.log(sumaArreglo)