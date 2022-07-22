//funcion exportada del otro .js
function calcularMediaAritmerica(lista){
    //Alternativa al ciclo FOR con el método REDUCE() de ARRAYS[]
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;
    //linea extra para redondear
    //const promedioRedondeado = Number(promedioLista.toFixed(2));
    return promedioLista;
}

let lista = [];

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}


function calcularMediana(lista){
    const mitadLista = parseInt(lista.length/2);
    let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista -1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmerica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
    return mediana;

} else{
    //Es impar
    mediana = lista[mitadLista];
    return mediana;
}
}


//********** Interacción onClick HTML
//AGREGAR un número al array (push) y ORDENAR el array (sort)
function onClickBtnAgregar(){
    //obtener elemento del html
    let inputNumber = document.getElementById("inputNumber");
    let numberValue = Number(inputNumber.value);
    console.log("Num. Añadido: " +numberValue);
    lista.push(numberValue);
    lista.sort((a,b) => a-b);
    console.log(lista);

    //actualizar el html
    //Limpiar input
    inputNumber.value = "";
    //Actualizar lista
    let txt_lista = document.getElementById("txt_lista");
    txt_lista.innerText = "Lista ordenada: " + lista + ".";
    //Limpiar txt mediana (por si tras calcular se añade otro número)
    let txt_mediana = document.getElementById("txt_mediana");
    txt_mediana.innerText = 0;
}

function onClickBtnCalcularMediana(){
    resultado = calcularMediana(lista);
    console.log("Mediana: " +resultado);
    
    //Actualizar HTML
    let txt_mediana = document.getElementById("txt_mediana");
    txt_mediana.innerText = resultado;
}

function onClickBtnLimpiarArray(){
    lista = [];
    console.log(lista);
    //actualizar el html
    //Limpiar input
    inputNumber.value = "";
    //Actualizar lista
    let txt_lista = document.getElementById("txt_lista");
    txt_lista.innerText = "Lista ordenada: ";
    //Limpiar txt mediana (por si tras calcular se añade otro número)
    let txt_mediana = document.getElementById("txt_mediana");
    txt_mediana.innerText = 0;
}