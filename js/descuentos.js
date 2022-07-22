total = 0; //Precio total del Carrito

//Array de productos
const item = [{
    id: 1,
    nombre: "SNES MINI",
    precio: 199
},
{
    id: 2,
    nombre: "PS2 MINI",
    precio: 149
},
{
    id: 3,
    nombre: "PS5 SLIM",
    precio: 549
}];


function buscarProducto(id){
    precio = 0;
    nombre = ""; //Variables del objeto que retornará
    item_det = {
        precio,
        nombre
    }
    for (var i = 0; i<item.length; i++){
        if(item[i].id == id){
            item_det = {
                precio: item[i].precio,
                nombre: item[i].nombre
            }
        }
    }
    return item_det;
}

function calcularPrecioDto(precio, dto){
    precioDto = (precio*(100-dto))/100;
    return precioDto;
}

function addToCart(){
    var id_item = event.target.id; // 1. Al hacer clic en el HTML recoge el ID del producto.
    console.log("id = "+id_item);
    
    item_ = buscarProducto(id_item); //2. Busca el precio y nombre del producto mediante el ID recogido en el paso 1.
    console.log(item[id_item-1])
    //console.log(item.find(o => o.id == id_item));

    //3. Mostrarlo en el Cart en el HTML
    const lbl_articulos = document.getElementById("articulos");
    lbl_articulos.innerText = lbl_articulos.innerText + " "+ item_.nombre +". ";

    total = total+item_.precio;
    const lbl_total = document.getElementById("total");
    lbl_total.innerText = "Total: $" + total +" USD";  
}


//Interacción con HTML **********************************
function onClickBtnDescuento(){
    const label_total = document.getElementById("total");
    const totalValue = label_total.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    console.log(cuponValue);

    //Validar cupón
    if(cuponValue == "MINI"){
        total_con_dto = calcularPrecioDto(total,5);

        const label_total = document.getElementById("total");
        label_total.innerText = "Total: $" + total_con_dto +" USD"; 
        alert("Se aplicó un descuento del 5%");
    } else if(cuponValue === "ALMENOSUNO"){
        total_con_dto = calcularPrecioDto(total,1);

        const label_total = document.getElementById("total");
        label_total.innerText = "Total: $" + total_con_dto +" USD"; 
        alert("Se aplicó un descuento del 1%");      
    } else{
        alert("Cupón inválido. Prueba con: ALMENOSUNO");
    }
}

//VACIAR CART - Limpiar los textos de HTML y limpiar la variable total.
function onClickBtnVaciar(){
    total = 0;

    const lbl_articulos = document.getElementById("articulos");
    lbl_articulos.innerText = "Artículos: ";

    const lbl_total = document.getElementById("total");
    lbl_total.innerText = "Total: ";    
}