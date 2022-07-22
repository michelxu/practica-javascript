lista = [];

function calcularRango(lista){
    lista.sort((a,b) => a-b);
    const mayorValor = lista[lista.length-1];
    const menorValor = lista[0];
    const rango = mayorValor-menorValor;

    return rango;
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
    let txt_rango = document.getElementById("txt_rango");
    txt_rango.innerText = 0;
}


function onClickBtnCalcularRango(){
    resultado = calcularRango(lista);
    console.log("El rango es:" +resultado);
    
    //Actualizar HTML
    let txt_rango = document.getElementById("txt_rango");
    txt_rango.innerText = "El rango es: " +resultado;
}