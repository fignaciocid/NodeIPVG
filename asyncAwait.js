let paises = [];

const agregarPais = pais => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if(pais == "Canada"){
            reject("El pais no es de LatinoAmerica");
        }
        paises.push(pais);
        /* reject("Error al ingresar el pais") */
        resolve(`Agregado : ${pais}`);
    },3000);
});

async function iniciarProceso (){
    try {
        let resultado = await agregarPais("Chile");
        console.log(resultado);
        resultado = await agregarPais("Argentina");
        console.log(resultado);
        resultado = await agregarPais("Canada");
        console.log(resultado);
        resultado = await agregarPais("Brasil");
        console.log(resultado);
        resultado = await agregarPais("Colombia");
        console.log(resultado);   
    } catch (error) {
        console.log(error)
    }
}

iniciarProceso();