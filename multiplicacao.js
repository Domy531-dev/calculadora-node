// index.js

const readline = require('readline');

// Criando interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Multiplicação de dois números");

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    const resultado = parseFloat(num1) * parseFloat(num2);
    console.log(`\nResultado: ${num1} x ${num2} = ${resultado}`);
    rl.close();
  });
});
