// 8)  Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem  
// decrescente. 



let A = 1000000000000
let B = 7
let C = 10

if (A > B && A > C){
    if (B > C){
        console.log (`ordem decrescente: ${A} , ${B} , ${C}`)
    } else {
        console.log(`Ordem decrescente: ${A} , ${C} , ${B} `)
    }
} else if (B > A && B > C){
    if(A > C){
        console.log(`Orde decrescente: ${B} , ${A} , ${C}`)
    } else {
        console.log(`Ordem decrescente: ${B} , ${C} , ${A}`)
    }
} else {
    if (A > B){
        console.log(`Ordem decrescente: ${C}, ${A} , ${B}`)
    } else {
        console.log(`Ordem decrescente: ${C}, ${B} , ${A}`)
    }
}