total = 0;
const coupons = [
    {
        name: "mini5",
        discount: 5,
    },
    {
        name: "uno",
        discount: 1,
    },
    {
        name: "10wow",
        discount: 10,
    },
];


function calcularPrecioDto(precio, dto){
    precioDto = (precio*(100-dto))/100;
    return precioDto;
}






//Interacción con HTML **********************************

function onClickBtnPrecioDto(){
    //**********1. Tomar los datos de los inputs
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    //**********2. Verificar si el cupón existe en nuestro array (o base de datos en un futuro)
    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    console.log(userCoupon);

    //********** 3. Lanzar mensaje de error o aplicar descuento
    if (!userCoupon){
        alert("El cupón " +couponValue +" no es válido o ha expirado.");
    } else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioDto(priceValue, descuento);
    
        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "$"+precioConDescuento +" USD";
    }
}

/*
function onClickBtnPrecioDto(precio, dto){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const precioDto = calcularPrecioDto(priceValue, couponValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "$" + precioDto;
}
*/

/*
function onClickBtnAddProduct(clicked_id){
    alert(event.target.id);
}
*/