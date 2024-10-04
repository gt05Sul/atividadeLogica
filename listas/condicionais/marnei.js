// var valorA = "azul";
// var valorB = "vermelho";

// console.log(` "valores iniciais" ${valorA} ${valorB}`);

// valorB = valorA;
// valorA = valorB;

// console.log(`valores alterados ${valorA} ${valorB}`);

// console.log(valorA);

// if (valorA == "azul") {
//     var valorA = "vermelho";
//     // console.log(`${valorA} Valor A aletarado de azul para vermelho`);
// } else {
//     console.log("O valor de A está vermelho");
// }

// if (valorA == "vermelho") {
//     var valorA = "azul";
//     // console.log(`${valorA} Valor alterado de veremlho para azul`)
// } else {
//     console.log("O valor de A está azul");
// }
// console.log(valorA);

// //  if (valorB == "vermelho"){
// //     var valorB = "azul";
// //     console.log(`${valorB} Valor B aleterado de vermelho para azul`);
// // } else {
// //     var valorB = "vermelho";
// //     console.log(`${valorB} valor B alterado de azul para vermelho`);
// // }

// let menu;

// do {
//   //Usuário informa uma opção do menu
//   menu = +prompt("informe uma opção");

//   switch (menu) {
//     case "0":
//       console.log("Sair");
//       break;
//     case "1":
//       console.log("Adição");
//       break;
//     case "2":
//       console.log("Subtração");
//       break;
//     case "3":
//       console.log("Multiplicaçãpr");
//       break;
//     case "4":
//       console.log("Divisão");
//       break;
//     default:
//       console.log("Opção Inválida");
//       break;
//   }
// } while (menu != 0);

let menorAltura = 1000;
let maiorAltura = 0;

for (let i = 0; i <= 15; i ++){
    const altura = Number(prompt('Informe a altura'));

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }
}

console.log(`A menor altura do grupo: ${menorAltura / 100} m`);
console.log(`A maior altura do grupo: ${maiorAltura / 100} m`);
