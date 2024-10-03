let libro = {
    titulo: 'El Quijote',
    autor: 'Cervantes',
    año: 1605,
    esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
    }
  };
  
  console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);