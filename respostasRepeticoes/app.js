const readline = require('readline-sync');

function calcularMultiplosDeTres() {
    let soma = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
            console.log(i);
        }
    }
    console.log(`A soma dos numeros ímpares e múltiplos de 3 de 1 até 500 é: ${soma}`);
}
// calcularMultiplosDeTres();

function alturaPessoas() {
    let alturas = [];

    for (let i = 0; i < 15; i++) {
        let altura  = parseFloat(readline.question(`Digite a altura da pessoa: ${i  + 1}`));
        alturas.push(altura);
    }

    let menor = Math.min(...alturas);
    let maior = Math.max(...alturas);
    console.log(`A menor altura é: ${menor}`)
    console.log(`A maior altura é: ${maior}`)
}
// alturaPessoas();

function mediaPositivosENegativos() {
    let soma = 0, positivos = 0, negativos = 0, contador = 0;
    let valor;

    do {
        valor = parseFloat(readline.question(`Digite um numero: (0 pra sair)`));
        if (valor != 0) {
            soma += valor;
            console.log(valor);
            contador++;

            if (valor > 0) positivos++;
            else negativos++;
        }
    } while (valor != 0);

    let media = contador > 0 ? soma / contador : 0;
    console.log(`Média: ${media}`);
    console.log(`Quantidade de positivos: ${positivos}`);
    console.log(`Quantidade de negativos: ${negativos}`);
}
mediaPositivosENegativos()