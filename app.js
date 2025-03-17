// Se declara el array
let amigos = [];

// Funcion para agregar amigo
function agregarAmigo() {
    const añadir = document.getElementById("amigo"); // Obtiene el texto que el usuario escribe
    const nombre = añadir.value.trim(); // Elimina espacios extra

    if (nombre) {
        amigos.push(nombre); // Agrega al array
        actualizarLista();
        console.log("Nombre agregado:", nombre);
        console.log("array:", amigos);
        añadir.value = ""; //Se limpia el campo de entrada
        añadir.focus(); //Vuelve al input
    } else {
        alert("Por favor, ingresa un nombre.");
    }


}

// Actualiza la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia  la lista antes de actualizar
    amigos.forEach(nombre => {
        const li = document.createElement("li"); //Crea una nueva lista
        li.textContent = nombre; // Asigna el texto del nombre
        lista.appendChild(li); // Agrega a lista
    });

}
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}


function sortearAmigo() {
    if (amigos.length < 2) { //Comprueba que se hayan ingresado al menos dos nombres
        asignarTexto('h2', 'Debes agregar al menos dos nombres antes de sortear.');
        return
    }
    const numeroGanador = Math.floor(Math.random() * amigos.length);
    //Math.floor convierte el numero a un indice valido
    // Math.random() genera un numero aleatorio entre el 0 y la cantidad de nombres
    const ganador = amigos[numeroGanador];
    asignarTexto('h2', `El amigo sorteado es: <span class="ganador"><hr>${ganador}</span>`);
    document.getElementById("listaAmigos").style.display = "none"; // Oculta la lista de nombres
    document.getElementById("ocultarSortear").style.display = "none";  // Ocultar el botón de reinicio
    document.getElementById("resetButton").style.display = "block";  // Muestra el botón para reiniciar
}

function reiniciarSorteo() {
    amigos = []; // Vaciar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    asignarTexto('h2', 'Digite el nombre de sus amigos');
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista de nombres nuevamente
    document.getElementById("ocultarSortear").style.display = "block"; // Mostrar el boton sortear nuevamente
    document.getElementById("resetButton").style.display = "none";  // Ocultar el botón de reinicio
}

