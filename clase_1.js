var sacha = { nombre: 'sacha', apellido: 'Lifszyc', edad: 28 }//objeto

var dario = { nombre: 'Dario', apellido: 'Susnisky', edad: 27 }

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona //var nombre = persona.nombre
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);


function cumpleaños(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

//Desafio clase anterior
function imprimirNombreYedad(persona) {
var { nombre } = persona
var { edad } = persona
  console.log('hola ' + persona.nombre + ' tu edad es de ' + persona.edad);
}

imprimirNombreYedad(sacha);
imprimirNombreYedad(dario);
