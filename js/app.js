//arreglo de instrumentos (nombre,marca y precio)
const instrumentos = [
    new Instrumentos('Guitarra','Fender',1000),
    new Instrumentos('Bateria','Druma',2000),
    new Instrumentos('Guitarra', 'Ibanez',30),
    new Instrumentos('Flauta', 'Marshall',4000),
    new Instrumentos('Saxophone','Marca',20202)
]

//Funcion que se manda a llamar por el metodo onLoad en la index y se llama
//por el getElementById presentado abajo.

function mostrarInstrumentos()
{
    console.log('Mostrar instrumentos')
    let texto = '';
    for(let instrumento of instrumentos)
    {
        console.log(instrumento)
        texto += `<li>${instrumento.nombre} ${instrumento.marca}</li>` 
    }
    document.getElementById( "instrumentos" ).innerHTML = texto;
}

function agregarInstrumento()
{
    const forma = document.forms['forma'];
    const nombre = forma['nombre']
    const marca = forma['marca']
    if(nombre.value != '' && marca.value != ''){
        const instrumento = new Instrumentos(nombre.value, marca.value);
        console.log(instrumento);
        instrumentos.push(instrumento);
        mostrarInstrumentos();
    }
    else{
        console.log('No hay información que agregar');
    }

}