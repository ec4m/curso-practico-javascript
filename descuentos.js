// const precioOriginal = 120;
// const descuento = 18;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPrinceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento del " + discountValue +"% es de: $" + precioConDescuento;
}