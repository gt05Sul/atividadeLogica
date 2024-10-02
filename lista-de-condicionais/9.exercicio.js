/* 9)  Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  construa  um  algoritmo  que  
calcule seu peso ideal, utilizando as seguintes fórmulas: 
● para homens: (72.7 * h) – 58; 
● para mulheres: (62.1 * h) – 44.7. */

const altura = 1.67; 
const sexo = 'M';

let pesoIdeal;

if (sexo.toUpperCase() === 'M') {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo.toUpperCase() === 'F') {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    console.log("Sexo inválido! Por favor, insira 'M' para masculino ou 'F' para feminino.");
}

if (pesoIdeal) {
    console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg.`);
}
