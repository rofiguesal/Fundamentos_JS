var sacha = { nombre: 'sacha', apellido: 'Lifszyc', edad: 28 }//objeto

var dario = { nombre: 'Dario', apellido: 'Susnisky', edad: 27 }

function imprimirNombreEnMayusculas(persona)
{
  var { nombre } = persona //var nombre = personba.nombre
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
