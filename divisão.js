const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dividir(a, b) {
    if (b === 0) {
        return 'Erro: divisão por zero!';
    }
    return a / b;
}

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        const resultado = dividir(parseFloat(num1), parseFloat(num2));
        console.log(`Resultado: ${resultado}`);
        rl.close();
    });
});