function contarA(string) {
    let contador = 0; 

    for (let i = 0; i < string.length; i++) {
        const char = string[i]; 

        if (char === 'a' || char === 'A') {
            contador++; 
        }
    }

    return contador; 
}

// Exemplo de uso: string pré-definida
const stringOriginal = "A casa é amarela e agradável."; 
const quantidade = contarA(stringOriginal); 

console.log(`A letra 'a' ocorre ${quantidade} vez(es) na string: "${stringOriginal}"`);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma string para contar a letra "a": ', (input) => {
    const quantidadeUsuario = contarA(input); 
    console.log(`A letra 'a' ocorre ${quantidadeUsuario} vez(es) na string: "${input}"`); 
    readline.close(); 
});
