


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function intentoDeUsuario(){
    alert('click desde el boton');
}


asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina un número del 1-10')