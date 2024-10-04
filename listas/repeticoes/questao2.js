const readline = require('readline-sync')

function alturaPessoas() {
    let alturas = [];

    for (let i = 0; i < 15; i++) {
        let altura = parseFloat(readline.question(`Digite a altura da pessoa: ${i + 1}`));
        alturas.push(altura);
    }
    
    let menor = Math.min(...alturas);
    let maior = Math.max(...alturas);

    console.log(`A menor altura é: ${menor}`);
    console.log(`A maior altura é ${maior}`);
}
alturaPessoas();