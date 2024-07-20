let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorInput").value);
    console.log(numeroSecreto === numeroUsuario);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Genial has acertado en ${intentos} ${intentos===1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{

        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El número secreto es menor');    
        }
        intentos++;

        limpiarCaja();

    }

}


function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina un número del 1-10');

function limpiarCaja(){
    document.getElementById("valorInput").value='';
}

function nuevoJuego(){
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log('Numero Secreto' + numeroSecreto);
    asignarTextoElemento('p', 'Adivina un número del 1-10');
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
