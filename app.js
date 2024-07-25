let numerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
// numerosSorteados.push(numeroSecreto);
let intentos = 1;

// console.log(numeroSecreto);

function limpiarCaja(){
    document.getElementById("valorInput").value='';
}


function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorInput").value);

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
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;


    //si el numero generado está incluido en la lista hacemos una operacion sino hacemos otra
    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        console.log(numeroGenerado);
        console.log(numerosSorteados);
        return numeroGenerado;
    }
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina un número del 1-10');

function nuevoJuego(){
    intentos = 1;

    asignarTextoElemento('p', 'Adivina un número del 1-10');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
}
