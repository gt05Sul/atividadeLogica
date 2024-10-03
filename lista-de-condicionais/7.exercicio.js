/* 7)  Faça  um  algoritmo  que  leia  uma  variável  e  some  5  caso  seja  par  ou  some  8  caso  seja  ímpar, imprimir o resultado desta operação.  */

const valor = 5;

const resultado = valor % 2 === 0 ? valor + 5 : valor + 8;

console.log(`O resultado é: ${resultado}`);
