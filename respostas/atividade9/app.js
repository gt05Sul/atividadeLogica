// 9)  Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  construa  um  algoritmo  que  
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7.

let altura = parseFloat(prompt("Qual sua altura?"));
let sexo = prompt ("Qual seu sexo? M ou F");




if(sexo == "M") {
    let pesoIdeal = altura * 72.7;
    console.log("Seu peso ideal e:" + (pesoIdeal.toFixed(2)));
} else { (sexo == "F") 
    let pesoIdeal = altura * 62.1;
    console.log("Seu peso ideal e:" + (pesoIdeal.toFixed(2)));
}
