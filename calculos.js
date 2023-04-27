const bcrypt = require('bcryptjs');

function calcularArea(lado) {
  return lado ** 2;
}

function calcularPerimetro(lado) {
  return lado * 4;
}

function generarHash(respuesta) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(respuesta.toString(), salt);
}

module.exports = { calcularArea, calcularPerimetro, generarHash };
