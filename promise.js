let paises = [];

const agregarPais = pais => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if(pais == "Canada"){
            reject("El pais no es de LatinoAmerica");
        }
        paises.push(pais);
        /* reject("Error al ingresar el pais") */
        resolve(`Agregado : ${pais}`)
    },3000)
});

agregarPais("Chile")
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Argentina")
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Canada")
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Bolivia")
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return agregarPais("Brasil")
    })
    .catch(error => {
        console.log(error)
    })