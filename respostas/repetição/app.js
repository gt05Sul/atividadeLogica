
// alert("Hello World");

// function receberValor(){

//     let valor;
//     let conteudo = '';

//     do {
//         valor = prompt("Informe um valor: ");
//         console.log (valor);
        
//     } while (valor != 0 || valor != null);
//     document.getElementById('resultado').innerHTML += valor;
// }

// let menu;

// do{
//     // Usuário informa uma opção do menu:
//     menu = Number(prompt(`Informe uma opção: `));
//     menu = +prompt(`Informe uma opção: `);
//     menu = parseInt(prompt(`Informe uma opção: `));
//     menu = parseFloat(prompt(`Informe uma opção: `));

// switch(menu) {
//     case 0:
//         console.log("Sair");
//         break;
//     case 1:
//         console.log("Soma");
//         break;
//     case 2:
//         console.log("Subtrai");
//         break;
//     case 3:
//         console.log("Multiplica");
//         break;
//     case 4:
//         console.log("Divide");
//         break;
//     default:
//         console.log("Opção Inválida");
//         break;
// }

// } while(menu != 0);



let menorAltura;
let maiorAltura;

for (let i = 1; i <= 15; i++) {
    const altura = Number(prompt(`Informe a altura (em cm): `));

    if(i ==1){
        menorAltura = altura;
        maiorAltura = altura
    }

    if(altura > maiorAltura) {
        maiorAltura = altura;
    }
    if(altura < menorAltura){
        menorAltura = altura;
    }
}

console.log(`A menor altura do grupo : ${menorAltura / 100} m`);
console.log(`A maior altura do grupo : ${maiorAltura / 100} m`);
