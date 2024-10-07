// Escreva um algoritimo que receba um valor e verifique se é par. se sim, mostre na tela. o sistema encerra quando o usúario informar 0 (zero)

// function receberValor() {

//     let valor = prompt("Informe um valor");

//     if (valor % 2 === 0) {
//         console.log("Par");
//     } else {
//         console.log("ímpar");
//     }

//     while (receberValor % 2 === 0){
//         // console.log("Par");
//     }
// }

function receberValor() {

    let valor;

    do {
        valor = prompt("Digite um valor: ");

        // Verificar se é Par
        if (valor % 2 == 0) {
            console.log(valor);
        }

    } while (valor != 0);
}
