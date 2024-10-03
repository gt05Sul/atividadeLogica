/* 10)  O  IMC  –  Indice  de  Massa  Corporal  é  um  critério  da  Organização  Mundial  de  Saúde  para  dar umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2  
Elabore  um  algoritmo  que  leia  o  peso  e  a  altura  de  um  adulto  e  mostre  sua  condição  de  acordo com a tabela abaixo. 
 
IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso 
 */


const peso = 60;
const altura = 1.70;

const IMC = peso / (altura * altura);

let condicao;

if (IMC < 18.5) {
    condicao = "Abaixo do peso";
} else if (IMC >= 18.5 && IMC < 25) {
    condicao = "Peso normal";
} else if (IMC >= 25 && IMC < 30) {
    condicao = "Acima do peso";
} else {
    condicao = "Obeso";
}

console.log(`Seu IMC é: ${IMC.toFixed(2)} e sua condição é: ${condicao}.`);
