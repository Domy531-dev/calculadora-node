feature-divisão
const divisao = require('./divisao');

// Exemplos de divisão com positivos e negativos
const exemplos = [
  { a: 10, b: 5 },
  { a: -8, b: 2 },
  { a: 4, b: -2 },
  { a: -10, b: -5 },
  { a: 0, b: 5 },
  { a: 5, b: 0 } // esse caso mostra erro
];

exemplos.forEach(({ a, b }) => {
  const resultado = divisao(a, b);
  console.log(`Divisão: ${a} / ${b} = ${resultado}`);

