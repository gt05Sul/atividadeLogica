const readline = require('readline-sync');


function calcularMultiplosDeTres() {
    let soma = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 != 0 && i % 3 == 0){
            soma += i;
        }
    }
    console.log(`A soma dos número ímpares múltiplos de 3 é ${soma} `);
}

calcularMultiplosDeTres();

