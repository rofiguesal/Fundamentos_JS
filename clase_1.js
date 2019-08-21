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
