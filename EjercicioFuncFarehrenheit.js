function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
  
  }
  // Solicitar al usuario que ingrese un número
  let celsius = prompt("Ingrese un número:");
  console.log(`${celsius}°C son equivalentes a ${convertirCelsiusAFahrenheit(celsius)}°F`);
  