// Função para calcular o próximo elemento da sequência a)
function sequenciaA() {
    const sequencia = [1, 3, 5, 7]; // Números ímpares
    const proximoElemento = sequencia[sequencia.length - 1] + 2;
    console.log(`a) Próximo elemento: ${proximoElemento}`);
}

// Função para calcular o próximo elemento da sequência b)
function sequenciaB() {
    const sequencia = [2, 4, 8, 16, 32, 64]; // Potências de 2
    const proximoElemento = sequencia[sequencia.length - 1] * 2;
    console.log(`b) Próximo elemento: ${proximoElemento}`);
}

// Função para calcular o próximo elemento da sequência c)
function sequenciaC() {
    const sequencia = [0, 1, 4, 9, 16, 25, 36]; // Quadrados dos inteiros
    const proximoElemento = Math.pow(sequencia.length, 2);
    console.log(`c) Próximo elemento: ${proximoElemento}`);
}

// Função para calcular o próximo elemento da sequência d)
function sequenciaD() {
    const sequencia = [4, 16, 36, 64]; // Quadrados dos números pares
    const proximoElemento = Math.pow((sequencia.length + 1) * 2, 2);
    console.log(`d) Próximo elemento: ${proximoElemento}`);
}

// Função para calcular o próximo elemento da sequência e)
function sequenciaE() {
    const sequencia = [1, 1, 2, 3, 5, 8]; // Sequência de Fibonacci
    const proximoElemento = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    console.log(`e) Próximo elemento: ${proximoElemento}`);
}

// Função para calcular o próximo elemento da sequência f)
function sequenciaF() {
    const sequencia = [2, 10, 12, 16, 17, 18, 19]; // Mistura de números
    const proximoElemento = 20; // Seguindo o padrão
    console.log(`f) Próximo elemento: ${proximoElemento}`);
}

// Executando todas as funções
sequenciaA();
sequenciaB();
sequenciaC();
sequenciaD();
sequenciaE();
sequenciaF();
