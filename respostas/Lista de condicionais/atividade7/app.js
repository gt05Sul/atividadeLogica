// 7)  Faça  um  algoritmo  que  leia  uma  variável  e  some  5  caso  seja  par  ou  some  8  caso  seja  ímpar,  
// imprimir o resultado desta operação. 

var valor = Number(prompt("Digite um número"));

if(valor % 2 === 0) {
    let total = valor + 5;
    console.log("Par: " + total);
} else {
    let total = valor + 8;
    console.log("Ímpar: " + total);
}
