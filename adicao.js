// adicao.js
/**
 * Realiza a adição de um ou mais números.
 * Aceita múltiplos argumentos para somá-los, assim como uma calculadora normal.
 * @param {...number} numeros - Os números a serem adicionados.
 * @returns {number} A soma total.
 */
function adicao(...numeros) {
  if (numeros.length === 0) {
    return 0; // Se nenhum número for fornecido, a soma é 0.
  }
  // Usa o método reduce para somar todos os números no array 'numeros'.
  
  return numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
}