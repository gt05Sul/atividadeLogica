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

// let contadorP = 0;
// let contadorN = 0;
// let contador = 0;
// let soma = 0;
// let media = 0;
// let numero;

// while (numero != 0){
//     numero = Number(prompt("Digite um valor (digite 0 para parar):"))
//     if (numero >0){
//         contadorP++;
//     } else if (numero < 0){
//         contadorN++;
//     } else{
//         break
//     }
//     contador++;
//     soma += numero;
// }

// media = (soma/contador);
// let porcentagemP = (100 * contadorP)/contador;
// let porcentagemN = (100 * contadorN)/contador;

// console.log(`
// A media aritmética dos valor enviados foi = ${media};
// a quantidade de valores positivos: ${contadorP} e negativos: ${contadorN}; 
// a porcentagem de valores positivos: %${porcentagemP} e a porcentagem de números negativos: %${porcentagemN}.`);


// exercício 4

// let numero = 0;
// let contador1 = 0;
// let contador2 = 0;
// let contador3 = 0;
// let contador4 = 0;

// while (numero >= 0){
//     numero = Number(prompt("Digite um valor de 0 a 100(digite um valor negativo para parar):"))
//     if (numero < 0 ){
//         break
//     } else if (numero >= 0 && numero <= 25){
//         contador1++;
//     } else if (numero <= 50){
//         contador2++;
//         console.log(contador2);
        
//     } else if(numero <= 75){
//         contador3++;
//     }else if(numero <= 100){
//         contador4++;
//     } else {
//         break
//     }
// }

// console.log(`Quantidade de números contados foram:
// entre 0 e 25= ${contador1}
// entre 26 e 50= ${contador2}
// entre 51 e 75= ${contador3}
// entre 76 e 100= ${contador4}`);


//exercício 5

// let contadorPar = 0;
// let contadorImpar = 0;
// let contador = 0;
// let somaPar = 0;
// let soma = 0;
// let media = 0;
// let mediaPar = 0;
// let numero;

// while (numero != 0){
//     numero = Number(prompt("Digite um valor positivo: "))
//     if (numero >0){
//         if (numero % 2 === 0){
//             contadorPar++;
//             somaPar += numero
//         } else{
//             contadorImpar++;
//         }
//     } else{
//         break
//     }
//     contador++;
//     soma += numero;
// }

// mediaPar = (somaPar/contadorPar);
// media = (soma/contador);

// console.log(`
// A quantidade de número pares: ${contadorPar} e ímpares: ${contadorImpar}; 
// A media dos valor pares enviados foi = ${mediaPar};
// A media geral dos valor enviados foi = ${media};`);


// exercício 6

// for (let i = 100; i<=200; i++){
//     if (i % 2 === 1){
//         console.log(i);
//     }
// }


//exercício 7

// let contador = Number.parseInt(prompt("Digite um número entre 1 e 10:"))

// if (contador < 0 && contador > 10){
//     alert("Tente novamente.")
// } else {
//     console.log(`Tabuada do ${contador} de 0 a 10:`);
    
//     for (let i = 0; i<=10; i++){
//         console.log(`${i} x ${contador} = ${i*contador}`);
//     }
// }


// exercício 8

let pa = 0;
let a = Number.parseInt(prompt("Digite o valor do primeiro termo da P.A: "))
let razao = Number.parseInt(prompt("Digite o valor da razão da P.A: "))

for (let i=1; i<=20; i++){
    pa = a + (i-1)*razao
    console.log(`Termo a${i} = ${pa}`);
}


//exercício 9