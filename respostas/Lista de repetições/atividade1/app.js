function calcularMultiplosDeTres() {
    let soma = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
            console.log(i);
        }
    }

    console.log( `A soma dos numeros ímpares e multipls de 3 de 1 até 500 é: ${soma}`);
}

calcularMultiplosDeTres();
