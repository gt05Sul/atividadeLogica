// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
// números lidos. O número que encerrará a leitura será zero.
let pares = 0, impares = 0, contador = 0, soma = 0, contadorPar = 0, contadorImpa = 0; 
let valor;

do {
    valor = Number(prompt(`Digite um número: (número zero (0) para sair)`));

    if (valor !== 0) {
        soma += valor;
        contador++;
    }

    if (valor % 2 === 0 && valor !== 0) {
        pares += valor;
        contadorPar++;
        console.log(`Quantidade de números pares: ${contadorPar}`);
    } else if (valor !== 0) {
        impares += valor;
        contadorImpa++;
        console.log(`Quantidade de números ímpares: ${contadorImpa}`);
    }

} while (valor !== 0);

if (contador > 0) {
    let mediaGeral = soma / contador;
    console.log(`A média Geral dos valores é: ${mediaGeral}`);

    if (contadorPar > 0) {
        let mediaPar = pares / contadorPar;
        console.log(`A média dos valores pares é: ${mediaPar}`);
    } else {
        console.log("Nenhum número par foi inserido.");
    }

    // if (contadorImpa > 0) {
    //     let mediaImpar = impares / contadorImpa;
    //     console.log(`A média dos valores ímpares é: ${mediaImpar}`);
    // } else {
    //     console.log("Nenhum número ímpar foi inserido.");
    // }

} else {
    console.log("Nenhum valor foi inserido.");
}