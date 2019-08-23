function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  return this;
}

Persona.prototype.saludar = function () {
  console.log( `me llamo ${this.nombre} ${this.apellido}`);
};

var sacha = new Persona('Sacha', 'sanchez', 1.82);
var erika = new Persona('Ericka', 'Luna', 1.64);
var arturo = new Persona('Arutro', 'Gimenez', 1.73);
