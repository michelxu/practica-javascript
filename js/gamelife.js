let validacion_pais = false; //Validar inputs del formulario
let validacion_escolaridad = false;
let validacion_genero = false;
const pp_m = ["8bitpix_m1", "8bitpix_m2", "8bitpix_m3"]; //nombre de archivos de profile picture
const pp_f = ["8bitpix_f1", "8bitpix_f2", "8bitpix_f3"];
let paisData = {};

//Funciones
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function setProfilePicture(genero){
    if (genero == "Hombre"){
        const hombre = getRandomInt(3);
        return pp_m[hombre];
    } else if (genero == "Mujer"){
        const mujer = getRandomInt(3);
        return pp_f[mujer];
    } else {
        const hm = ["8bitpix_m", "8bitpix_f"];
        const gen = getRandomInt(2);
        const number = getRandomInt(2);
        return hm[gen]+[number+1];
    }
}

function setBarColor(number){
    if(number >= 75){
        return "progress-bar bg-success";
    } else if (number >= 55 && number < 75){
        return "bg-info bg-warning";
    } else{
        return "bg-info bg-danger"
    }
}

function setMainBarColor(number){
    if(number >= 65){
        return "progress-bar progress-bar-striped bg-danger progress-bar-animated";
    } else if (number >= 50 && number < 65){
        return "progress-bar progress-bar-striped bg-warning progress-bar-animated";
    } else{
        return "progress-bar progress-bar-striped bg-success progress-bar-animated";
    }
}

function buscarPais(name){
    const resultado = paises.find(pais => pais.nombre == name);
    if (resultado){
        validacion_pais = true;
        return resultado;
    } else{
        alert("Ingrese un país de la lista.");
        return resultado;
    }
}

function validarForm(escolaridad, genero){
    if (escolaridad != "Básica" && escolaridad != "Media Superior" && escolaridad != "Superior"){
        alert("Ingrese una escolaridad de la lista.")
    } else{
        validacion_escolaridad = true;
    }

    if(genero != "Hombre" && genero != "Mujer" && genero != "Otro"){
        alert("Ingrese un género de la lista")
    } else{
        validacion_genero = true;
    }
}

function calcularPorcentajeSalario(salario){
    let resultado;
    resultado = (salario*100)/paisData.salario;
    if (resultado > 100){
        resultado = 100;
    } else if(resultado < 0){
        resultado = 0;
    }
    return resultado;
}

function calcularPorcentajeEscolaridad(escolaridad){
    switch(escolaridad){
        case 'Básica':
            return 5;
            break;
        case 'Media Superior':
            return 30;
            break;
        case 'Superior':
            return 60;
            break;
    }
}

function generarRasgos(){
    //Obtener 3 números aleatorios distintos e ingresarlos en un array.
    const rasgos_aleatorios = [{}];
    let n1 = getRandomInt(14);
    let n2 = getRandomInt(14);
    while(n2 == n1){
        n2 = getRandomInt(14);
    }
    let n3 = getRandomInt(14);
    while(n3 == n2 || n3 == n1){
        n3 = getRandomInt(14);
    }

    rasgos_aleatorios[0] = rasgos[n1];
    rasgos_aleatorios[1] = rasgos[n2];
    rasgos_aleatorios[2] = rasgos[n3];
    return rasgos_aleatorios;
}

function calcularPorcentajeDificultad(qol, escolaridad, salario, fisico, inteligencia, rasgos){
    //media ponderada
    //((qol*2) + (escolaridad*.7) + (salario*.3) + (fisico*.7) + (inteligencia*.7) + (rasgos *.5)) / 4.9 MENOS 10
    return (((qol*2) +(escolaridad*.7) +(salario*.3) +(fisico*.7) +(inteligencia*.7) +(rasgos*.5))/5)-16
}



//****************************************** Interacción HTML 
function onClickBtnDosomtin(){
    //******************** 1. Obtener datos del formulario ********************
    const inputUser = document.getElementById("inputUsername");
    const usernameValue = inputUser.value;

    const inputGenero = document.getElementById("inputGenero");
    const generoValue = inputGenero.value;

    const inputPais = document.getElementById("inputPais");
    const paisValue = inputPais.value;
    const paisDatos = buscarPais(paisValue);
    paisData = paisDatos;
    console.log(paisDatos);

    const inputEscolaridad = document.getElementById("inputEscolaridad");
    const escolaridadValue = inputEscolaridad.value;

    const inputSalario = document.getElementById("inputSalario");
    const salarioValue = inputSalario.value;
    
    const inputFisico = document.getElementById("inputFisico");
    const fisicoValue = inputFisico.value;

    const inputInteligencia = document.getElementById("inputInteligencia");
    const inteligenciaValue = inputInteligencia.value;
    
    console.log("Username: " + usernameValue + " Género: " +generoValue + " País: " +paisValue + " Educación: "
    +escolaridadValue + " Salario: " +salarioValue + " Físico: " +fisicoValue + " Inteligencia: " +inteligenciaValue);

    //******************** 1. Obtener datos del formulario ********************

    //******************** 2. Hacer cálculos ********************
    validarForm(escolaridadValue, generoValue);
    if(validacion_pais == true && validacion_escolaridad == true && validacion_genero == true)
    {
        const img_pp = setProfilePicture(generoValue);
        let salarioPorcentaje = calcularPorcentajeSalario(salarioValue);
        salarioPorcentaje = salarioPorcentaje.toFixed(2);
        const escolaridadPorcentaje = calcularPorcentajeEscolaridad(escolaridadValue);
        const rasgos_generados = generarRasgos();
        const rasgosValue = rasgos_generados[0].valor + rasgos_generados[1].valor + rasgos_generados[2].valor;
        console.log(rasgos_generados);

        const dificultadPorcentaje = calcularPorcentajeDificultad(paisDatos.qol, escolaridadPorcentaje, salarioPorcentaje, fisicoValue, inteligenciaValue, rasgosValue);
        let dificultadLVL = 100 - dificultadPorcentaje;
        dificultadLVL = dificultadLVL.toFixed(2);
        console.log("Qol: " +paisDatos.qol +" Escolaridad: " +escolaridadPorcentaje +" Salario: " +salarioPorcentaje +" Físico: "
        +fisicoValue +" Inteligencia: " +inteligenciaValue + " Rasgos: " +rasgosValue);

        //******************** 2. Hacer cálculos ********************


        //******************** 3. Mostrar datos en HTML ********************
        let img_profile = document.getElementById("img_profile"); //ProfileP
        img_profile.src = "/img/" + img_pp +".png";
        img_profile.className = "img-fluid;";
        if (generoValue == "Otro"){
            img_profile.className = "img-fluid; rotate180";
        }

        let txt_username = document.getElementById("txt_username"); //Username
        txt_username.innerText = "Username: " + usernameValue;

        let txt_title_username = document.getElementById("txt_title_username"); //Username en título
        txt_title_username.innerText = usernameValue;

        let txt_pais = document.getElementById("txt_pais"); //País
        txt_pais.innerText = "País: " +paisDatos.nombre;

        let txt_rasgos = document.getElementById("txt_rasgos"); //País
        txt_rasgos.innerText = "Rasgos: " +rasgos_generados[0].nombre +", " +rasgos_generados[1].nombre +", " +rasgos_generados[2].nombre +".";

        //Bars
        let bar_dificultad = document.getElementById("bar_dificultad"); //Dificultad (Main bar)
        bar_dificultad.style = "width:" +dificultadLVL+ "%; height:30px";
        bar_dificultad.className = setMainBarColor(dificultadLVL);
        //let bar_dificultad_txt = document.getElementById("bar_dificultad_txt");
        //bar_dificultad_txt.innerHTML = "Dificultad: " + dificultadLVL +"%";
        //dificultad <p> bar
        let bar_dificultad_txt2 = document.getElementById("bar_dificultad_txt2");
        bar_dificultad_txt2.innerHTML = dificultadLVL +"%";

        let bar_qol = document.getElementById("bar_qol"); //País Qol
        bar_qol.style = "width:" +paisDatos.qol+ "%; height:25px";
        bar_qol.className = setBarColor(paisDatos.qol);
        let bar_qol_txt = document.getElementById("bar_qol_txt");
        bar_qol_txt.innerHTML = "El nivel de Calidad de Vida (QOL) en " +paisDatos.nombre +" es de " +paisDatos.qol +"/100.";

        let bar_escolaridad = document.getElementById("bar_escolaridad"); //Escolaridad
        bar_escolaridad.style = "width:" +escolaridadPorcentaje+ "%; height:25px";
        bar_escolaridad.className = setBarColor(escolaridadPorcentaje);
        let bar_escolaridad_txt = document.getElementById("bar_escolaridad_txt");
        bar_escolaridad_txt.innerHTML = "Escolaridad: " +escolaridadPorcentaje +"%.";

        let bar_salario = document.getElementById("bar_salario"); //Salario
        bar_salario.style = "width:" +salarioPorcentaje+ "%; height:25px";
        bar_salario.className = setBarColor(salarioPorcentaje);
        let bar_salario_txt = document.getElementById("bar_salario_txt");
        bar_salario_txt.innerHTML = "El salario promedio de " +paisDatos.nombre +" es de " +paisDatos.salario +" USD.";
        
        //******************** 3. Mostrar datos en HTML ********************
        }
}

function onClickBtnLimpiarInputs(){
    inputUsername.value = "";
    inputGenero.value = "";
    inputPais.value = "";
    inputEscolaridad.value = "";
    inputSalario.value = "";
}