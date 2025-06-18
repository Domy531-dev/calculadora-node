// Importa o módulo readline para entrada do usuário
const readline = require('readline');

// Cria interface de leitura no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer divisão
function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero não é permitida.";
    }
    return a / b;
}

// Pede os números ao usuário
rl.question("Digite o dividendo: ", (dividendoInput) => {
    rl.question("Digite o divisor: ", (divisorInput) => {
        const a = parseFloat(dividendoInput);
        const b = parseFloat(divisorInput);

        if (isNaN(a) || isNaN(b)) {
            console.log("Erro: entrada inválida. Use apenas números.");
        } else {
            const resultado = dividir(a, b);
            console.log(`Resultado da divisão: ${resultado}`);
        }

        rl.close();
    });
});
