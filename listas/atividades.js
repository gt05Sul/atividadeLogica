// Condicionais
// var idade = 16;

// if (idade >= 18) {
//     console.log("Maior");
// } else {
//     console.log("Menor");
// }
// //ternário
// (idade > 18) ? "Maior" : "Menor";

// //Switch
// switch (caregoriaCliente) {
//     case 'regular':
//         desconto = '5%'
//         break;
//     case 'vip':
//         desconto = '20%'
//         break;
//     default:
//         desconto = '0%';
// }

// Repetições

// let contador = 1;

// while (contador < 10) {
//     console.log(contador);
//     contador++
// }

// do {
//     console.log(contador);
//     contador++
// } while (contador < 10)

// for (let i = 0; i <= 10; i++) {
//     // const element = array[i];
//     console.log(i);
// }

// const numeros = [10, 20, 30, 40];
// let soma = 0;

// console.log(numeros.length);

// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }
// console.log(soma);

let frutas = ["Maçã", "Banana", "Morango"];

for (let fruta of frutas) {
    console.log(fruta);
}

let pessoa = { nome: "vini", idade: 19, cidade: "Fortal"}

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}