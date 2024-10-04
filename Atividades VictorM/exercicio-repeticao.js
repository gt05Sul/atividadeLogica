// exercício 1
// let contador = 1;
// let soma = 0;

// while (contador <= 500) {
//     if (contador % 3 === 0 && contador % 2  === 1){
//         soma += contador;
//         console.log(soma);
        
//     }
//     contador ++
// }

// console.log(`A soma é = ${soma}`);


// exercício 02
// let maiorAltura = 0;
// let menorAltura = 0;

// for (let i=1; i<16; i++){
//     let altura_da_vez = Number(prompt(`Digite a altura da ${i}º:`));
//     if (altura_da_vez > maiorAltura){
//         maiorAltura = altura_da_vez;
//     } 

//     if (i === 1) {
//         menorAltura = altura_da_vez
//     } else if (altura_da_vez < menorAltura)
//         menorAltura = altura_da_vez;
// }
// console.log(`A maior altura é ${maiorAltura} e a menor altura é ${menorAltura}.`);


// exercício 03
let contadorP = 0;
let contadorN = 0;
let contador = 0;
let soma = 0;
let media = 0;
let numero;

while (numero != 0){
    numero = Number(prompt("Digite um valor (digite 0 para parar):"))
    if (numero >0){
        contadorP++;
    } else if (numero < 0){
        contadorN++;
    } else{
        break
    }
    contador++;
    soma += numero;
}

media = (soma/contador);
let porcentagemP = (100 * contadorP)/contador;
let porcentagemN = (100 * contadorN)/contador;

console.log(`
A media aritmética dos valor enviados foi = ${media};
a quantidade de valores positivos: ${contadorP} e negativos: ${contadorN}; 
a porcentagem de valores positivos: %${porcentagemP} e a porcentagem de números negativos: %${porcentagemN}.`);


