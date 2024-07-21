//solo  creo estas funciones para que el index no presente problemas debido a que como lo indica el archivo
//solo es practica
function verificarIntento(){}
function nuevoJuego(){}

//INICIO
function indiceCorporal(altura, peso){
    // let resultado = peso/((altura/100)^2);
    let resultado = peso/(Math.pow((altura/100), 2));
    alert(`Su IMC es ${resultado.toFixed(3)}`);
    console.log(resultado);
    return;
}

function factorial(numero){
    if (numero ===0 || numero ===1){
        console.log(1);
    }else{
        let sum=0;
        let aux = numero;
        for (let i = numero-1; i > 0; i--) {
            // console.log(`${numero}*${i}`);
            numero = numero*i;
            sum = (numero*i);
        }
        alert(`El factorial de ${aux} es: ${sum}`);
    }
}


function convertirMoneda(pesos){
    let dolares = 0;
    dolares = pesos/4046.28;
    console.log(dolares.toFixed(2));
}


function areaPerimetroRectangular(base, altura){
    let area = base*altura;
    let perimetro = altura*2 + base*2;
    console.log(`El area es: ${area} \nPerimetro es: ${perimetro}`);
}

function areaPerimetroCircular(radio){
    let perimetro = 3.1416*(radio*2);
    let area = 3.1416*(Math.pow(radio, 2));
    console.log(`El area es: ${area.toFixed(2)} \nPerimetro es: ${perimetro.toFixed(2)}`);

}
function tablaMultiplicar(){
    let num = parseInt(document.getElementById("valorInput").value);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById("valorInput").value='';
}