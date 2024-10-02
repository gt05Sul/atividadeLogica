
// O  IMC  –  Indice  de  Massa  Corporal  é  um  critério  da  Organização  Mundial  de  Saúde  para  dar  uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2  
// Elabore  um  algoritmo  que  leia  o  peso  e  a  altura  de  um  adulto  e  mostre  sua  condição  de  acordo com a tabela abaixo. 
 
// IMC em adultos 
// Condição 
// Abaixo de 18,5 Abaixo do peso 
// Entre 18,5 e 25 Peso normal 
// Entre 25 e 30 Acima do peso 
// Acima de 30 obeso

let pesoKg = 56;
let alturaM = 1.58;

let IMC = (pesoKg / (alturaM)**2);

if(IMC < 18.5){
    console.log (`Você está abaixo do peso ideal!`);
} else if(IMC > 18.5 && IMC < 25){
    console.log (`Você está no peso ideal!`);
} else if(IMC > 25 && IMC < 30){
    console.log (`Você está acima do peso ideal!`);
} else {
    console.log (`Você está obeso!`);
}