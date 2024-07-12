let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorInput").value);
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto === numeroUsuario);

}


function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina un número del 1-10')
