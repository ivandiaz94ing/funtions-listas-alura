function verificarIntento(){}

function holaMundo(nombre){

    console.log(`Hola, ${nombre}`);
}

function doble(num){
    console.log(`El doble es: ${num*2}`);
}

function promedios(a, b, c){
    let resultado = (a + b + c)/3;
    console.log(resultado);
}

function mayor (a, b){

    if(a===b){
        console.log('SON IGUALES');
        return;
    }

    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    }else{
        console.log(`${b} es mayor que ${a}`);
        }
    
}

function potencia (a){
    let resultado = a*a;
    console.log(`El resultado es: ${resultado}`);
}