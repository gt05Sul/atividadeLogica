// exercicio 1

// const a = Number(prompt("Digite o primeiro valor: "));
// const b = Number(prompt("Digite o segundo valor: "));
// const c = Number(prompt("Digite o terceiro valor valor: "));

// if (a + b < c) {
//     console.log("A + B é menor que C");
// } else {
//     console.log("A + B é maior que C");
// }

// exercício 2

// const nome = prompt("Digite seu nome: ");
// const sexo = prompt("Qual seu sexo (M/F)");
// const estado_civil = prompt ("Qual seu estado civil? (solteiro(a)/casado(a)")

//     if (sexo === "F" && estado_civil === "casada") {
//         const tempo = Number(prompt("Casada há quanto tempo? (em anos)"));
//     }

// exercício 3

// const numero = Number(prompt("Digite um número: "));

//     if (numero % 2 === 0)  {
//         console.log("O número é par.");
//     } else {
//         console.log("o número é ímpar");
//     }


// exercício 4

// const a = Number(prompt("Digite o primiero valor: "));
// const b = Number(prompt("Digite o segundo valor: "));

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

// let numero = Number(prompt("Digite um número: "));

//     if (numero % 2 === 0)  {
//         numero = numero + 5;
//         console.log(`Como o valor é par, foi somado 5, logo o valor é = ${numero}`);
//     } else {
//         numero = numero + 8;
//         console.log(`Como o valor é par, foi somado 8, logo o valor é = ${numero}`);
//     }


//exercício 8

// const a = Number(prompt("Digite o primeiro valor: "));
// const b = Number(prompt("Digite o segundo valor: "));
// const c = Number(prompt("Digite o terceiro valor: "));

// if(a>b && b>c){
//     console.log(`Os valores em ordem decrescente: ${a}, ${b}, ${c}`);
// }else if (a>c && c>b){
//     console.log(`Os valores em ordem decrescente: ${a}, ${c}, ${b}`);
// } else if(b>a && a>c){
//     console.log(`Os valores em ordem decrescente: ${b}, ${a}, ${c}`);
// }else if(b>c && c>a){
//     console.log(`Os valores em ordem decrescente: ${b}, ${c}, ${a}`);
// } else if(c>a && a>b){
//     console.log(`Os valores em ordem decrescente: ${c}, ${a}, ${b}`);
// } else if(c>b && b>a){
//     console.log(`Os valores em ordem decrescente: ${c}, ${b}, ${a}`);
// } else{
//     console.log("error");
// }


// exercicio 9

// const altura = Number(prompt("Digite sua altura(em metros):"));
// const sexo = prompt("Digite seu sexto (M/F):");

// if (sexo === "M"){
//     console.log(`Seu peso ideal é: ${(72.7*altura)-58}`);
// } else if (sexo === M){
//     console.log(`Seu peso ideal é: ${(62.1*altura)-44.7}`);
// }


// exercício 10

// const altura = Number(prompt("Digite sua altura(em metros):"));
// const massa = Number(prompt("Digite seu peso(em kg):"));
// const result = massa/(altura**2)

// if (result<18.5){
//     console.log("Segundo o IMC, você está abaixo do peso");
// } else if(result<25){
//     console.log("Segundo o IMC, você está com peso normal");
// } else if(result<30){
//     console.log("Segundo o IMC, você está acima do peso");
// } else {
//     console.log("Segundo o IMC, você está obeso");
// }


// exercicio segundo tempo

let valora = "azul";
let valorb = "vermelho";
let valorc = "";

valorc = valora;
valora = valorb;
valorb = valorc;

console.log(valora,valorb);
