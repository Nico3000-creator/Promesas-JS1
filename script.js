// Funcionamiento de un callback

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

// agregamos la funcion para pushear un nuevo mes con time out con callback
function nuevoMes (mes, callback) {
    setTimeout(() => {
        meses.push(mes)
        callback()
    }, 3000);

} 

// mostramos en la consola el segundo mes
function mostrarSegundoMes() {}


// ejecutar una funcion en un determinado tiempo
function mostrarMeses () {
    setTimeout(() => {
       meses.forEach(mes => {console.log(mes)}) 
    }, 3000);
}

mostrarMeses ();
nuevoMes("Mayo", mostrarMeses);
