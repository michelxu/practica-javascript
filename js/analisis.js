//Funciones Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

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

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmerica([personaMitad1, personaMitad2]);
        return mediana;
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General de Colombia
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

// ordenar salarios
const salariosColSorted =  salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
//splice hace un corte dentro de un array: desde una posición x - hasta un número de elementos x para traerlo a un nuevo array.
const spliceStart = salariosColSorted.length * .90;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});