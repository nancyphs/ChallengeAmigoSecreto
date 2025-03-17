// Se declara el array
let amigos =[];

// Funcion para agregar amigo
function agregarAmigo(){
    const añadir = document.getElementById("amigo"); // Obtiene el texto que el usuario escribe
    const nombre = añadir.value.trim(); // Elimina espacios extra

    if (nombre) {
        amigos.push(nombre); // Agrega al array
        actualizarLista();
        console.log("Nombre agregado:", nombre);
        console.log("array:", amigos);
        añadir.value = ""; //Se limpia el campo de entrada
        añadir.focus(); //Vuelve al input
    }


}


