var nombre = 'Rodrigo', apellido = 'Salmoran';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);

var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var tu = "tu nombre es: " + `${nombre} ${apellido}` + ' y las ultimas dos letras de tu apellido son: ' + `${apellido.substr(apellido.length - 1)}`;
