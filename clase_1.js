class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    return this;
  }

  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }
  SoyAlto(){
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona { //extend es lo mismo de heredar
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura); // super llama al prototipo padre
    // Esto es lo mismo que poner: this.nombre = nombre;this.apellido = apellido; this.altura = altura
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
}
