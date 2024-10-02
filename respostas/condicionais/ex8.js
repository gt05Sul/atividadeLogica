
// Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem decrescente.

let valor1 = -5;
let valor2 = 5;
let valor3 = 20;

if(valor1 > valor2 && valor2 > valor3){
    console.log(valor1, valor2, valor3);
} 
else if(valor1 > valor2 && valor3 > valor2){
    console.log(valor1, valor3, valor2);
} 
else if(valor2 > valor1 && valor1 > valor3){
    console.log(valor2, valor1, valor3);
} 
else if(valor2 > valor1 && valor3 > valor1){
    console.log(valor2, valor3, valor1);
} 
else if(valor3 > valor2 && valor2 > valor1){
    console.log(valor3, valor2, valor1);
} 
else if(valor3 > valor2 && valor1 > valor2){
    console.log(valor3, valor1, valor2);
} 
else {
    console.log(erro);
}