function heredaDe(prototipohijo, prototipopadre) { //La herencia no existe en JS, solo hay prototipos y le herencia prototipla.
  var fn = function () {}
  fn.prototype = prototipopadre.prototype;
  prototipohijo.ptototype = new fn;
  prototipohijo.prototype.constructor = prototipohijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  return this;
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.SoyAlto = function () {
  return this.altura > 1.8;
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};


//var sacha = new Persona('Sacha', 'Lifszyc', 1.82);
//var erika = new Persona('Ericka', 'Luna', 1.64);
//var arturo = new Persona('Arturo', 'Gimenez', 1.73);
