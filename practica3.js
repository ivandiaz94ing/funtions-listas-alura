//solo  creo estas funciones para que el index no presente problemas debido a que como lo indica el archivo
//solo es practica
function verificarIntento(){}
function nuevoJuego(){}


//INICIO DE LOS 11 PUNTOS

//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes
// elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista (){
    lenguagesDeProgramacion.forEach(element => {
        console.log(element);
    });
}

mostrarLista();

//5. Crea una función que muestre en la consola todos los elementos de la lista 
//    "lenguagesDeProgramacion en orden inverso.
function mostrarListaInversa(){
    let i = lenguagesDeProgramacion.length;
    console.log(i);
    while (i >0) {
        i--;        
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarListaInversa();


//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumerica = [5,7,15,25,22,2,9,53,45,51,65];
let cont = listaNumerica.length;
let proedio, sum = 0;
listaNumerica.forEach(element => {
    sum = sum + element;
});
proedio = sum/cont;
console.log(`El promedio es : ${proedio}`);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista
let max = 0;
let min = 1000;

function mostrarMaximoMinimo(){
    listaNumerica.forEach(element => {
        if(element > max){
            max = element;
        }
        if(element < min){
            min = element;
        }
    });

    console.log(`El numero mayor de la lista es: ${max}`);
    console.log(`El numero menor de la lista es: ${min}`);
}
mostrarMaximoMinimo();

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumadorLista(){
    let sum = 0;
    listaNumerica.forEach(element => {
        sum= sum + element;
    });
    console.log(`La suma de los elementos de la lista es: ${sum}`);
}
sumadorLista();


//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado 
//     como parámetro, o -1 si no existe en la lista.
function mostrarIndiceLista(num){
    let apuntador;

    for (const key in listaNumerica) {
       
        if(num == listaNumerica[key]){
            apuntador = key;
        }
    }
    if(apuntador){
        console.log(`El numero ${num} esta en la posicion ${apuntador}`);
    }else{
        console.log(`El numero ${num} esta en la posicion ${-1}`);
    }   
}
mostrarIndiceLista(53);

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva
//       una nueva lista con la suma de los elementos uno a uno.

let lista1 = [7, 6, 9, 10, 9];
let lista2 = [56, 55, 2, 99, 77];
let lista3 = [];

function sumarListas(listaA, listaB){

for (let i = 0; i < lista1.length; i++) {
    lista3.push(listaA[i] + listaB[i]);
}

console.log(lista3);
}

sumarListas(lista1, lista2);


//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado
//       de cada número.
let lista4 = [];
function listaCuadrado(lista){
    lista.forEach(element => {
        lista4.push(element*element);
    });
}

listaCuadrado(lista1);

console.log(lista4);