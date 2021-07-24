let paises = [];

function agregarPais(pais, callback){
        paises.push(pais);
        console.log(`Agregando : ${pais}`);
        callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarIngresoPaises(){
    setTimeout(()=> { 
        agregarPais("Chile",mostrarPaises)
        setTimeout(() => {
            agregarPais("Argentina",mostrarPaises)
            setTimeout(()=>{
                agregarPais("Peru", mostrarPaises)
                setTimeout(()=>{
                    agregarPais("Brasil", mostrarPaises)
                },3000)
            },3000)
        },3000)
    },3000)
}

iniciarIngresoPaises();