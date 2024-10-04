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
let maiorAltura = 0;
let menorAltura = 0;

for (let i=1; i<16; i++){
    let altura_da_vez = Number(prompt(`Digite a altura da ${i}º:`));
    if (altura_da_vez > maiorAltura){
        maiorAltura = altura_da_vez;
    } 

    if (i === 1) {
        menorAltura = altura_da_vez
    } else if (altura_da_vez < menorAltura)
        menorAltura = altura_da_vez;
}
console.log(`A maior altura é ${maiorAltura} e a menor altura é ${menorAltura}.`);
