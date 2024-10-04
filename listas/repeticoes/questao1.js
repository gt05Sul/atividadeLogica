//questão 01

// const readline = require('readline-sync')

function calcularMultiplosDeTres() {
    let soma = 0;

    for (let i = 1; 1 <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
            console.log(i);
        }
    } 
    console.log(`A soma numeros impares e multiplos de 3 de 1 até 500 é: ${soma}`);
}
calcularMultiplosDeTres();

