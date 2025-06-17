// index.js
const subtrair = require('./subtracao');

// Exemplos de subtração com positivos e negativos
const exemplos = [
  { a: 10, b: 5 },
  { a: -8, b: 3 },
  { a: 4, b: -7 },
  { a: -10, b: -2 },
  { a: 0, b: 5 },
  { a: 5, b: 0 }
];

exemplos.forEach(({ a, b }) => {
  const resultado = subtrair(a, b);
  console.log(`Subtração: ${a} - ${b} = ${resultado}`);
});
