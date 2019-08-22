var sacha = {
  nombre: 'Sacha',
  apellido: 'Sanchez',
  altura: 1.89
}

var rodrigo = {
  nombre: 'Rodrigo',
  apellido: 'Figueroa',
  altura: 1.68
}

var roberto = {
  nombre: 'Roberto',
  apellido: 'Jimenez',
  altura: 1.75
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'De la paz',
  altura: 1.59
}

var xavier = {
  nombre: 'Xavier',
  apellido: 'Gutierrez',
  altura: 1.82
}

var alan = {
  nombre: 'Alan',
  apellido: 'Gomez',
  altura: 1.93
}

var personas = [sacha, rodrigo, roberto, vicky, xavier, alan];

//var personasAltas = personas.filter(function (persona) {
  //return persona.altura >= 1.8;
//}) es igual a lo de abajo.

const esAlta = ({altura}) => altura >= 1.8;

var personasAltas = personas.filter(esAlta);

console.log(personasAltas);
