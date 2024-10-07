function mediaPositivosENegativos() {
    let soma = 0, positivos = 0, negativos = 0, contador =0;
    let valor;

    do {
        valor = parseFloat(prompt(`Digite um número: (0 para sair)`));
        if (valor != 0) {
            soma += valor;
            console.log(valor);
            contador++;

            if (valor > 0) positivos++;
            else negativos++;
        }
    } while (valor != 0);

    let media = contador > 0 ? soma / contador : 0;
    console.log(`Média: ${media}`);
    console.log(`Quantidade de positivos: ${positivos}`);
    console.log(`Quantidade de negativos: ${negativos}`);
}

mediaPositivosENegativos();
