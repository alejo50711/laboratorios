const { calcularArea, calcularPerimetro, generarHash } = require('./calculos');

const lado = 5;
const area = calcularArea(lado);
const perimetro = calcularPerimetro(lado);
const respuesta = area + perimetro;
const hash = generarHash(respuesta);

console.log(`El área del cuadrado es: ${area}`);
console.log(`El perímetro del cuadrado es: ${perimetro}`);
console.log(`La respuesta (área + perímetro) es: ${respuesta}`);
console.log(`El hash de la respuesta es: ${hash}`);
