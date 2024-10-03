let numero;

do {
  numero = parseInt(prompt('Ingresa un número mayor a 100:'));
  
  if (numero > 100) {
    console.log(`Ingresaste un número mayor a 100: ${numero}`);
  } else {
    console.log("El número es menor o igual a 100, intenta nuevamente.");
  }
} while (numero <= 100);