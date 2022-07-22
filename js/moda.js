const lista = [];


function calcularModa(lista){
    //Convertimos el array en un objeto para tener guardado: 1. el elemento y 2. cuantas veces aparece.
    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1; //Si el elemento ya existe, se sumará +1 para llevar la cuenta de cuantos hay.
            } else{
                listaCount[elemento] = 1; //Cuando no existe y se detecta por primera vez, se crea por primera vez y se le asigna el valor 1.
            }
        }
    );

    //1. Object.entries() funciona para convertir un objeto en un array
    //2. Después usamos .sort() porque el objeto ya está convertido en un array
    //3. El método sort() recibe una función anónima
    const listaArray = Object.entries(listaCount).sort(
        function (elemA, elemB){
            return elemA[1] - elemB[1];
        }
    );

    const moda = listaArray[listaArray.length-1];
    return moda;
}



//****************************** Interacción onClick HTML
//AGREGAR un elemento al array (push)
function onClickBtnAgregar(){
    //obtener elemento del html
    let inputNumber = document.getElementById("inputNumber");
    let numberValue = Number(inputNumber.value);
    console.log("Num. Añadido: " +numberValue);
    lista.push(numberValue);
    console.log(lista);

    //HTML
    //Limpiar input
    inputNumber.value = "";
    //Mostrar lista
    let txt_lista = document.getElementById("txt_lista");
    txt_lista.innerText = "Lista: " + lista + ".";
    //Limpiar resultado (por si tras calcular se añade otro número)
    let txt_moda = document.getElementById("txt_moda");
    txt_moda.innerText = 0;
}

function onClickBtnCalcularModa(){
    resultado = calcularModa(lista);
    console.log("La moda es:" +resultado[0] + ", el cual se repite " +resultado[1] + " veces.");
    
    //Actualizar HTML
    let txt_moda = document.getElementById("txt_moda");
    txt_moda.innerText = "La moda es: " +resultado[0] + " (se repite " +resultado[1] + " veces)";
}

function onClickBtnLimpiarArray(){
    lista.length = 0;
    console.log(lista);
    //HTML
    //Limpiar input
    inputNumber.value = "";
    //Actualizar lista
    let txt_lista = document.getElementById("txt_lista");
    txt_lista.innerText = "Lista: ";
    //Limpiar resultado (por si tras calcular se añade otro número)
    let txt_moda = document.getElementById("txt_moda");
    txt_moda.innerText = 0;
}