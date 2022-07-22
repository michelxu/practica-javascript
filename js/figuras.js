console.log("hola2");

//Cuadrado **********************************
console.group("Cuadrados");

function perimCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Triángulo **********************************
function perimTriangulo(lado1, lado2, base){
    return parseInt(lado1)+parseInt(lado2)+parseInt(base);
}

function areaTriangulo(base, altura){
    return (base*altura) / 2;
}

function alturaIsosceles(lado1, base){
    l1 = Number(lado1);
    b = Number(base);
    resultado = Math.sqrt(Math.pow(l1,2) - ((Math.pow(b,2))/(4)));
    return resultado;
}

//Círculo **********************************
const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2; 
}

function perimCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio*radio) * PI;
}


//Interacción con HTML **********************************
function calcularPerimCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimTriangulo(){
    const input = document.getElementById("InputTrianguloL1");
    const l1 = input.value;
    const input2 = document.getElementById("InputTrianguloL2");
    const l2 = input2.value;
    const input3 = document.getElementById("InputTrianguloB");
    const base = input3.value;

    const perimetro = perimTriangulo(l1,l2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input2 = document.getElementById("InputTrianguloL2");
    const l2 = input2.value;
    const input3 = document.getElementById("InputTrianguloB");
    const base = input3.value;

    const area = areaTriangulo(l2,base);
    alert(area);
}

function calcularPerimCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    perimetro = perimCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    area= areaCirculo(value);
    alert(area);
}

function calcularAlturaIsos(){
    const input = document.getElementById("InputTrianguloL1");
    const l1 = input.value;
    const input2 = document.getElementById("InputTrianguloL2");
    const l2 = input2.value;
    const input3 = document.getElementById("InputTrianguloB");
    const base = input3.value;

    if (l1 == l2 && l1 != base){
        altura = alturaIsosceles(l1, base);
        alert(altura);
    } else{
        alert("NO es isósceles");
    }
}
