function calcularFibonacci(limite) {
    const fibonacci = [0, 1];

    while (true) {
        const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (proximo > limite) break;
        fibonacci.push(proximo);
    }

    return fibonacci;
}

// Função para verificar se um número pertence à sequência
function pertenceAFibonacci(numero) {
    const fibonacci = calcularFibonacci(numero);
    return fibonacci.includes(numero);
}

// Exemplo de uso: número pré-definido
const numeroInformado = 21;
const resultado = pertenceAFibonacci(numeroInformado);

if (resultado) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}

// Entrada do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita um número ao usuário
readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numeroUsuario = parseInt(input);
    const resultadoUsuario = pertenceAFibonacci(numeroUsuario);

    if (resultadoUsuario) {
        console.log(`O número ${numeroUsuario} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numeroUsuario} NÃO pertence à sequência de Fibonacci.`);
    }

    readline.close();
});
