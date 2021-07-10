const personas = [];
const persona = {
    nombre: 'Francisco',
    apellido: 'Cid',
    edad: 24,
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
        //return this.nombre + ' ' + this.apellido;
    }
}
personas.push(persona)
personas.push(persona)
personas.push(persona)

console.log(persona.nombreCompleto())

let dato = 'Esta es una cadena de datos';
let dato2 = 'Dato numero 2';

console.log('Cuenta cantidad de caracteres ', dato.length)
console.log('Datos en minuscula ', dato.toLowerCase())
console.log('Datos en mayuscula ', dato.toUpperCase())
console.log('Concadena los datos ', dato.concat(dato2))