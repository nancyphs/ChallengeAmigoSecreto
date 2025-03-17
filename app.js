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

// Actualiza la lista de amigos
function actualizarLista(){
    const lista =document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia  la lista antes de actualizar
    amigos.forEach(nombre => {
        const li = document.createElement("li"); //Crea una nueva lista
        li.textContent = nombre; // Asigna el texto del nombre
        lista.appendChild(li); // Agrega a lista
    });

}
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}


function sortearAmigo(){
 if(amigos.length < 2){ //Comprueba que se hayan ingresado al menos dos nombres
    asignarTexto('h2','Debes agregar al menos dos nombres antes de sortear.');
    return
 }
 const numeroGanador = Math.floor(Math.random() * amigos.length); 
 //Math.floor convierte el numero a un indice valido
 // Math.random() genera un numero aleatorio entre el 0 y la cantidad de nombres
 const ganador = amigos[numeroGanador];
 asignarTexto('h2',`El amigo sorteado es: ${ganador}`);
}

