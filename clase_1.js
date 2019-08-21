var sacha = {
  nombre: 'sacha',
  apellido: 'Sanchez',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

//parte del reto de la clase.

var lila = {
  nombre: 'lila',
  edad: 42
}

var ro = {
  nombre: 'ro',
  edad: 18
}

var berta = {
  nombre: 'berta',
  edad: 16
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
      console.log('Ingeniero');
  } else {
      console.log('No es Ingeniero');
  }

  if (persona.cocinero) {
    console.log('cocinero');
  } else {
    console.log('No es Cocinero');
  }

  if (persona.cantante) {
    console.log('cantante');
  } else {
    console.log('No es cantante');
  }

  if (persona.dj) {
    console.log('DJ');
  } else {
    console.log('No es DJ');
  }

  if (persona.guitarrista) {
    console.log('Guitarrista');
  } else {
    console.log('No es Guitarrista');
  }

  if (persona.drone) {
    console.log('Piloto de drones');
  } else {
    console.log('No es piloto de drones');
  }

}

imprimirProfesiones(sacha);

//Reto hacer que la funcion te muestre si es mayo de edad o no.

function imprimirSiEsMayorDeEdad(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.edad >= 18) {
    console.log('mayor de edad');
  } else {
    console.log('menor de edad');
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(ro);
imprimirSiEsMayorDeEdad(berta);
imprimirSiEsMayorDeEdad(lila);
