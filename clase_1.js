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

const MAYORIA_DE_EDAD = 18;

//const esMayordeEdad = function (persona) {
  //return persona.edad >= MAYORIA_DE_EDAD;
//} = es igual a lo puesto abajo

const esMayordeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

//Reto de la clase

const Es_Menor_De_Edad = ({edad})=> edad < MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  console.log(`${persona.nombre} es `);
  if (esMayordeEdad(persona)) {
    console.log('mayor de edad');
  } else {
    console.log('menor de edad');
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(ro);
imprimirSiEsMayorDeEdad(berta);
imprimirSiEsMayorDeEdad(lila);

function permitirAcceso(persona) {
  if (Es_Menor_De_Edad(persona)) {
    console.log('Accesso Denegado');
  }
}
