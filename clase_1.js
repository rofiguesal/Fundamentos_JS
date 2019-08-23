function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  return this;
}

//problema resuelto, se puso la altura e hice que retornara si eran bajos o altos.

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.SoyAlto = function () {
  return this.altura > 1.8;
};

var sacha = new Persona('Sacha', 'Lifszyc', 1.82);
var erika = new Persona('Ericka', 'Luna', 1.64);
var arturo = new Persona('Arutro', 'Gimenez', 1.73);
