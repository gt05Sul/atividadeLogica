// exercicio 1

// const a = Number(prompt("Digite o primeiro valor: "))
// const b = Number(prompt("Digite o segundo valor: "))
// const c = Number(prompt("Digite o terceiro valor valor: "))

// if (a + b < c) {
//     console.log("A + B é menor que C");
// } else {
//     console.log("A + B é maior que C");
// }

// exercício 2

// const nome = prompt("Digite seu nome: ")
// const sexo = prompt("Qual seu sexo (M/F)")
// const estado_civil = prompt ("Qual seu estado civil? (solteiro(a)/casado(a)")

//     if (sexo === "F" && estado_civil === "casada") {
//         const tempo = Number(prompt("Casada há quanto tempo? (em anos)"))
//     }

// exercício 3

// const numero = Number(prompt("Digite um número: "))

//     if (numero % 2 === 0)  {
//         console.log("O número é par.");
//     } else {
//         console.log("o número é ímpar");
//     }


// exercício 4

// const a = Number(prompt("Digite o primiero valor: "))
// const b = Number(prompt("Digite o segundo valor: "))

// if (a === b){
//     console.log(`Os valores são iguais, então a soma deles é = ${a+b}`);
// } else{
//     console.log(`Os valores são diferentes, então o produto deles é = ${a*b}`);
// }


// exercício 5

// const numero = Number(prompt("Digite um número: "))

// if ( numero >=0){
//     console.log(`Como os número é positivo, o dobro dele é = ${numero*2}`);
// } else{
//     console.log(`Como o número é negativo, o triplo dele é = ${numero*3}`);   
// }


// exercício 6

// const cond1 = prompt("Dite um valor boolean(false/true)");
// const cond2 = prompt("Dite um valor boolean(false/true)");

// if (cond1 === "true" ){
//     const valor1 = true;
//     console.log(`O primeiro valor é ${valor1}`);
// } else {
//     const valor1 = false;
//     console.log(`O Primeiro valor é ${valor1}`);
// }

// if (cond2 === "true" ){
//     const valor2 = true;
//     console.log(`O segundo valor é ${valor2}`);
// } else {
//     const valor2 = false;
//     console.log(`O segundo valor é ${valor2}`);
// }


// exercício 7

let numero = Number(prompt("Digite um número: "))

    if (numero % 2 === 0)  {
        numero = numero + 5;
        console.log(`Como o valor é par, foi somado 5, logo o valor é = ${numero}`);
    } else {
        numero = numero + 8;
        console.log(`Como o valor é par, foi somado 8, logo o valor é = ${numero}`);
    }