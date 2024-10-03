function esPar(numero) {
    return numero % 2 === 0;
}

// Solicitar al usuario que ingrese un número
let numeroIngresado = prompt("Ingrese un número:");

// Convertir el número ingresado a un número entero
let numero = parseInt(numeroIngresado);

// Verificar si el número es par o impar
if (esPar(numero)) {
    console.log(`True`);
} else {
    console.log(`False`);
} 