
// Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem decrescente.

let valor1 = 8;
let valor2 = 9;
let valor3 = 10;

let valores = [valor1, valor2, valor3];

valores.sort(function(x, y) {
    return y - x; 
});

console.log(valores);