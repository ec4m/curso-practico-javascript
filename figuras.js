// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
  return lado * 4;  
}
// console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm.")

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El area del cuadrado es " + areaCuadrado + "cm al cuadrado.")

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm y " 
//     + baseTriangulo 
//     + "cm"
// );
    
// const alturaTriangulo =  5.5;
// console.log("La altura del triángulo es de " + alturaTriangulo + "cm.")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es " + perimetroTriangulo + "cm.")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triángulo es " + areaTriangulo + "cm cuadrados.")

console.groupEnd();

//Código del círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es " + radioCirculo + "cm.");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del círculo es " + diametroCirculo + "cm.");

//PI
const PI = Math.PI;
console.log("PI equivale a " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
    //or
    // diametro = diametroCirculo(radio);
    // return diametro * PI;
} 
// console.log("El perimetro del círculo es " + perimetroCirculo + "cm.");

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI; 
} 
//console.log("El area del círculo es " + areaCirculo + "cm al cuadrado.");

console.groupEnd();