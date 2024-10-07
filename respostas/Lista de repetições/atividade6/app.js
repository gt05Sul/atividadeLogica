// 6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

function numerosImpares() {
    let soma = 0;
    for (let i = 100; i <= 200; i++) {
        if (i % 2 !== 0) {
            soma += i;
            console.log(i);
        }
    }
}

numerosImpares();
