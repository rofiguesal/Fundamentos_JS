function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  return this;
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

var sacha = new Persona('Sacha', 'sanchez');
var erika = new Persona('Ericka', 'Luna');
var arturo = new Persona('Arutro', 'Gimenez');
