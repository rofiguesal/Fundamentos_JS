var sacha = {
  nombre: 'sacha',
  apellido: 'Sanchez',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`);

const Incremento_Peso = 0.200;

const Dias_Del_Año = 365;

const aumentarDePeso = persona => persona.peso += Incremento_Peso;

const adelgaza = persona => persona.peso = persona.peso - Incremento_Peso;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = sacha.peso - 3;
var dias = 0

while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(sacha);
  }
  if (realizaDeporte()) {
    adelgaza(sacha);
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3 kg`);
