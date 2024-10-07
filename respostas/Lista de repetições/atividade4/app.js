// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles 
// estão  nos  seguintes  intervalos:  [0-25],  [26-50],  [51-75]  e  [76-100].  A  entrada  de  dados  deve  
// terminar quando for lido um número negativo.

let intervalo1 = 0, intervalo2 = 0, intervalo3 = 0, intervalo4 = 0;
let valor;

do {
    valor = Number(prompt(`Digite um número: (número negativo para sair)`));

    if (valor >= 0 && valor <= 25) {
        intervalo1++;
        console.log(`Número(s) no intervalo 0-25: ${intervalo1}`);
    } else if (valor > 25 && valor <= 50) {
        intervalo2++;
        console.log(`Número(s) no intervalo 26-50: ${intervalo2}`);
    } else if (valor > 50 && valor <= 75) {
        intervalo3++;
        console.log(`Número(s) no intervalo 51-75: ${intervalo3}`);
    } else if (valor > 75 && valor <= 100) {
        intervalo4++;
        console.log(`Número(s) no intervalo 76-100: ${intervalo4}`);
    }

} while (valor >= 0);

console.log("Programa encerrado.");
console.log(`Totais por intervalo:
    Intervalo de 0-25: ${intervalo1}
    Intervalo de 26-50: ${intervalo2}
    Intervalo de 51-75: ${intervalo3}
    Intervalo de 76-100: ${intervalo4}`);

    // let media = contador > 0 ? soma / contador : 0;
    // console.log(`Média: ${media}`);
    // console.log(`Quantidade de positivos: ${positivos}`);
    // console.log(`Quantidade de negativos: ${negativos}`);











// for (let intervalo1 <= 25; i <= 15; i++) {
//     const altura = Number(prompt('Informe a altura (em cm)'));

//     if (altura > maiorAltura) {
//         maiorAltura = altura;
//     }

//     if (altura < menorAltura) {
//         menorAltura = altura;
//     }

//     console.log(`Altura: ${altura / 100}m`);
// }

// console.log(`A menor altura do grupo: ${menorAltura / 100}m`);
// console.log(`A maior altura do grupo: ${maiorAltura / 100}m`);

// ----------------- VERSAO 2

// let maiorAltura;
// let menorAltura;

// for (let i = 1; i <= 5; i++) {
//     const altura = Number(prompt('Informe a altura (em cm)'));

//     if (i == 1) {
//         menorAltura = altura;
//         maiorAltura = altura;
//     }

//     if (altura > maiorAltura) {
//         maiorAltura = altura;
//     }

//     if (altura < menorAltura) {
//         menorAltura = altura;
//     }

//     console.log(`Altura: ${altura / 100}m`);
// }

// console.log(`A menor altura do grupo: ${menorAltura / 100}m`);
// console.log(`A maior altura do grupo: ${maiorAltura / 100}m`);

