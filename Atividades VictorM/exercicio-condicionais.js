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

// let valora = "azul";
// let valorb = "vermelho";
// let valorc = "";

// valorc = valora;
// valora = valorb;
// valorb = valorc;

// console.log(valora,valorb);


// exercício 11

// const produto1 = "picanha";
// const valor1 = 65;
// const produto2 = "cupim";
// const valor2 = 35;

// const select = prompt(`Escolha um produto: ${produto1} ou ${produto2}`)

// if (select === produto1){
//     const pagamento = Number(prompt(`
//         o produto ${produto1} custa R$${valor1}. Qual a forma de pagamento?
//         1 À vista em dinheiro ou cheque, recebe 10% de desconto,
//         2 À vista no cartão de crédito, recebe 15% de desconto,
//         3 Em duas vezes, preço normal de etiqueta sem juros,
//         4 Em duas vezes, preço normal de etiqueta mais juros de 10%.`))
//     if (pagamento === 1){
//         console.log(`O valor total da compra foi de R$${valor1*0.9}`);
//     } else if (pagamento === 2){
//         console.log(`O valor total da compra foi de R$${valor1*0.85}`);
//     } else if(pagamento === 3){
//         console.log(`O valor total da compra foi de R$${valor1}`);
//     } else if(pagamento === 4){
//         console.log(`O valor total da compra foi de R$${valor1*1.1}`);
//     } else {
//         console.log("Opção inválida!");
//     }
// } else if (select === produto2){
//     const pagamento = Number(prompt(`
//         o produto ${produto2} custa R$${valor2}. Qual a forma de pagamento?
//         1 À vista em dinheiro ou cheque, recebe 10% de desconto,
//         2 À vista no cartão de crédito, recebe 15% de desconto,
//         3 Em duas vezes, preço normal de etiqueta sem juros,
//         4 Em duas vezes, preço normal de etiqueta mais juros de 10%.`))
//     if (pagamento === 2){
//         console.log(`O valor total da compra foi de R$${valor2*0.9}`);
//     } else if (pagamento === 2){
//         console.log(`O valor total da compra foi de R$${valor2*0.85}`);
//     } else if(pagamento === 3){
//         console.log(`O valor total da compra foi de R$${valor2}`);
//     } else if(pagamento === 4){
//         console.log(`O valor total da compra foi de R$${valor2*1.1}`);
//     } else {
//         console.log("Opção inválida!");
//     }
// } else{
//     console.log("Opção inválida!");
// }


// exercício 12

const id = Number(prompt("Digite a id do aluno: "))
const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))
const nota3 = Number(prompt("Digite a terceira nota: "))
const me = Number(prompt("Digite a média dos exercícios: "))
const ma = ((nota1)+(nota2*2)+(nota3*3)+me)/7

if (ma >= 60 && ma <= 100){
    console.log(`
        O aluno de identificação ${id} obteve as seguintes notas:
        Nota 1: ${nota1}; Nota 2: ${nota2}; Nota 3: ${nota3} e média dos exercícios: ${me}
        A média de aproveitamento foi de: ${ma}. Então o aluno está Aprovado`);
} else if(ma >= 0 && ma < 60){
    console.log(`
O aluno de identificação ${id} obteve as seguintes notas:
Nota 1: ${nota1}; Nota 2: ${nota2}; Nota 3: ${nota3} e média dos exercícios: ${me}
A média de aproveitamento foi de: ${ma}. Então o aluno está Reprovado`);
} else{
    console.log("Erro na atribuição dos valores!");
}