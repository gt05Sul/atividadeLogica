// Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de 
// três e que se encontram no conjunto dos números de 1 até 500.

function calcularMultiplosdeTres(){
    let soma = 0

    for(let i = 1; i <= 500; i++){
        if(i % 2 !== 0 && i % 3 === 0 ){
            console.log(i)
            soma += i
        }
    }
    console.log(`a soma dos numeros impares e multiplos de 3 de 1 a 500 e: ${soma}`)
}

calcularMultiplosdeTres()
