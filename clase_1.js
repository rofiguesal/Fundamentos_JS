var sacha = {
  nombre: 'sacha',
  apellido: 'Sanchez',
  edad: 28,
  peso: 75
}

const Incremento_Peso = 0.200;

const Dias_Del_Año = 365;

const aumentarDePeso = persona => persona.peso += Incremento_Peso;

const adelgaza = persona => persona.peso = persona.peso - Incremento_Peso;

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`);

for (var i = 1; i <= Dias_Del_Año; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha);
  } else if (random < 0.5) {
    adelgaza(sacha);
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`);
