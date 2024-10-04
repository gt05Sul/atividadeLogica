// 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de 
// três e que se encontram no conjunto dos números de 1 até 500

// Inicializa um array para armazenar os números
    // let num = []

    let soma = 0;

    // Percorre todos os números de 1 a 500
    for (let prox = 1; prox <= 500 ; prox++){
        if (prox % 2 !== 0 && prox % 3 === 0){
            // num.push(prox)
            soma += prox;
            console.log(prox)
        }

    }


    // let somar = num.reduce((acc , curr) => acc + curr , 0);

    console.log(`A soma dos números é ímpares que são múltiplos de 3 de 1 a 500 é: ${soma} `)