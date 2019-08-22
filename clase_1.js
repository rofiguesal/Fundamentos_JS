var signo = prompt('Cuál es tu signo?');

switch (signo) {
  case 'acuario':
    console.log('tiende a la originalidad y la aventura, de manera que casa a la perfección con Sagitario y Aries, otros dos signos con clara vocación hacia lo imprevisible.');
    break;
  case 'picis':
    console.log('encuentra puntos en común con Escorpio y Cáncer, especialmente en el ámbito del arte');
    break;
  case 'cancer':
    console.log('requiere seguridad y por eso Tauro y Virgo son los que mejor congenian. Al compartir el elemento de agua con Piscis y Escorpio pueden forjar grandes amistades');
    break;
  case 'geminis':
  case 'géminis':
    console.log('requiere seguridad y por eso Tauro y Virgo son los que mejor congenian. Al compartir el elemento de agua con Piscis y Escorpio pueden forjar grandes amistades');
    break;
  case 'tauro':
    console.log('en el amor son muy sensuales y románticos, deforma que la unión con los Escorpio puede hacer saltar chispas');
    break;
  case 'aries':
    console.log('suele llevarse muy bien con los Géminis y los Acuario, ya que todos ellos tienen como punto en común la energía, que da lugar a relaciones pasionales e impulsiva');
    break;
  case 'leo':
    console.log('representa el fuego y por eso Libra es el contrapunto perfecto para mantener el equilibrio y dar lugar a una relación consolidada y alargada en el tiempo.');
    break;
  case 'virgo':
    console.log('es un signo desconfiado por naturaleza, de forma que se recomienda juntarse con Cáncer y Escorpio, que en ese sentido transmiten seguridad.');
    break;
  case 'libra':
    console.log('tiene especial predilección por los Sagitario y Leo');
    break;
  case 'escorpio':
    console.log('es un signo muy aventurero, con ganas de vivir experiencias nuevas y originales, por eso no sorprende verlo compatibilizar con Acuario o con Libra para encontrar el equilibrio. De igual manera, su amistad es muy fuerte cuando se junta con Leo y Aries.');
    break;
  case 'capricornio':
    console.log('tiende a cerrarse en sí mismo y por eso le cuesta tejer amistades fuertes o relaciones amorosas duraderas. Los mejores candidatos son Piscis y Escorpio, que son capaces de empatizar a la perfección.');
    break;
  default:
    console.log('no es su signo zodiacal valido');
    break;
}
