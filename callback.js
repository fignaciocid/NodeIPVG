let paises = ["Chile", "Argentina", "Peru","Bolivia", "Brasil"];

function agregarPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    console.log(paises);
}

agregarPais("Ecuador", mostrarPaises);
