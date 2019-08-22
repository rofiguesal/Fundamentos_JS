var sacha = {
  nombre: 'Sacha',
  apellido: 'Sanchez',
  altura: 1.89,
  cantidadDeLibros: 6
}

var rodrigo = {
  nombre: 'Rodrigo',
  apellido: 'Figueroa',
  altura: 1.68,
  cantidadDeLibros: 3
}

var roberto = {
  nombre: 'Roberto',
  apellido: 'Jimenez',
  altura: 1.75,
  cantidadDeLibros: 7
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'De la paz',
  altura: 1.59,
  cantidadDeLibros: 1
}

var xavier = {
  nombre: 'Xavier',
  apellido: 'Gutierrez',
  altura: 1.82,
  cantidadDeLibros: 2
}

var alan = {
  nombre: 'Alan',
  apellido: 'Gomez',
  altura: 1.93,
  cantidadDeLibros: 5
}

var personas = [sacha, rodrigo, roberto, vicky, xavier, alan];

//var personasAltas = personas.filter(function (persona) {
  //return persona.altura >= 1.8;
//}) es igual a lo de abajo.

const esAlta = ({altura}) => altura >= 1.8;

var personasAltas = personas.filter(esAlta);

//altura = altura * 100;
//persona.altura *= 100;

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);

//var acum = 0;

//for (var i = 0; i < personas.length; i++) {
  //acum = acum + personas[i].cantidadDeLibros;
//}

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);
