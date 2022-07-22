let lista = [];

function calcularMediaAritmerica(lista){
    /*let sumaLista = 0;

    for(let i = 0; i<lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    //Alternativa al ciclo FOR con el método REDUCE() de ARRAYS[]
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    //linea extra para redondear
    const promedioRedondeado = Number(promedioLista.toFixed(2));
    return promedioRedondeado;
}



//********** Interacción onClick HTML
function onClickBtnAgregar(){
    //obtener elemento del html
    let inputNumber = document.getElementById("inputNumber");
    let numberValue = Number(inputNumber.value);
    console.log("Num. Añadido: " +numberValue);
    lista.push(numberValue);

    //actualizar el html
    // no es necesario
    // podría mostrarse los números que se han añadido, cantidad, etc
    //Limpiar input
    inputNumber.value = "";
}

function onClickBtnCalcular(){
    console.log(lista);
    result = calcularMediaAritmerica(lista);
    console.log("Promedio: " + result);
    //alert(result);

    //Actualizar html
    const txt_promedio = document.getElementById("txt_promedio");
    txt_promedio.innerText = "   " + result;
    
}

