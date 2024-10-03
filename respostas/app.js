const readline = require('readline-sync');

function somaMaior() {
    let a = parseFloat(readline.question("Digite um valor: "));
    let b = parseFloat(readline.question("Digite um valor: "));
    let c = parseFloat(readline.question("Digite um valor: "));
    let soma = a + b;

    if(soma < c) {
        console.log("A soma de A e B é menor que C")
    } else {
        console.log("então tá")
    }
}
// somaMaior();

function tempoCasada() {
    let nome = readline.question("Qual o seu nome? ");
    let sexo = readline.question("Voce e do sexo feminino ou masculino? ");
    let estadoCivil = readline.question("Qual seu estado civil? ")

    if (sexo.toLocaleLowerCase() === 'feminino' && estadoCivil.toLocaleLowerCase() === 'casada') {
        let tempoCasada = parseFloat(readline.question("A quanto tempo? "));
        console.log(`Parabens pelo ${tempoCasada} anos de casada, ${nome.charAt(0).toUpperCase() + nome.slice(1)}`)
    }
}
// tempoCasada()

