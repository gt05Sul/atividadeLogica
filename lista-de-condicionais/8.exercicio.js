/* 8)  Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem  
decrescente. */

let A = 15;
let B = 8;
let C = 22;
let maior, medio, menor;

if (A > B && A > C) {
    maior = A;
    medio = (B > C) ? B : C;
    menor = (B > C) ? C : B;
} else if (B > A && B > C) {
    maior = B;
    medio = (A > C) ? A : C;
    menor = (A > C) ? C : A;
} else {
    maior = C;
    medio = (A > B) ? A : B;
    menor = (A > B) ? B : A;
}

console.log(`Valores em ordem decrescente: ${maior}, ${medio}, ${menor}`);
