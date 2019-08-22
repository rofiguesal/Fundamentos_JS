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
  altura: 1.79
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

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura} mts`);
}
