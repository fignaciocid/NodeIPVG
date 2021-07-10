const producto = {
    nombre: 'Monitor Gamer 20\'',
    precio: 300000,
    informacion: {
        peso: '1Kg',
        meidda: '50cm'
    },
    diponibilidad: ['Los Angeles', 'Chillan', 'Concepción']
}

const bodega = {
    nombreBodega: 'Los Angeles',
    stockBodega: 450
}

const datosObjetos = {...producto,...bodega}

//console.log(datosObjetos)



Object.freeze(producto) //permite congelar la constante y no poder modificar sus datos
Object.seal(producto) // permite no dejar eliminar y agregar datos a la constante

const {nombre,precio,informacion: {peso}} = producto

console.log(Object.keys(producto))