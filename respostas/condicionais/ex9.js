
// Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  construa  um  algoritmo  que  calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7.

let alturaM = 1.58;
let sexo = "F";

if(sexo === "F"){
    let pesoIdeal = (62.1 * alturaM) - 44.7;
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(1)}`);
} else {
    let pesoIdeal = (72.7 * alturaM)- 58;
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(1)}`);
}