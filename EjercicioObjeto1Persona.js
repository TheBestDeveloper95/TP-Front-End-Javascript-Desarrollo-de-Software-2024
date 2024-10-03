let persona = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Barcelona',
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  
  console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  persona.cambiarCiudad('Madrid');
  console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);