// 2)  Desenvolver  um  algoritmo  que  leia  a  altura  de  15  pessoas.  Este  programa  deverá  calcular  e  
// mostrar : 
// a. A menor altura do grupo; 
// b. A maior altura do grupo;

function alturaPessoas() {
    let alturas = [];

    for (let i = 0; i < 15; i++) {
       let altura = parseFloat(prompt(`Digite a altura da pessoa: ${i + 1}`));
       alturas.push(altura);
    }

    let menor = Math.min(...alturas);
    let maior = Math.max(...alturas);
    console.log(`A menor altura é: ${menor}`);
    console.log(`A maior altura é: ${maior}`);
    
    console.log( `A soma dos numeros ímpares e multipls de 3 de 1 até 500 é: ${soma}`);
}

alturaPessoas();
