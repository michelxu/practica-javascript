/*Archivo de mediana.js antes de la solución al reto:
1. Crear la función calcularMediana()
2. Usar el método .sort de los arrays para ordenar la lista_
_que el usuario ingrese.
*/


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

let lista1 = [
    100,
    200,
    300,
    500
];

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmerica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else{
    //Es impar
    mediana = lista1[mitadLista1];
}