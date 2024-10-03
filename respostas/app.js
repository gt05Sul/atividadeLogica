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

function verDesconto() {
    let produto = parseFloat(readline.question("Digite o valor do produto de acordo com a etiqueta: "));
    let formaPagamento = parseInt(readline.question("Informe a forma de pagamento: (1) A vista 10% - (2) Cartao 15% - (3) Normal 0% - (4) Juros de 10% "));

    let precoFinal;

    switch (formaPagamento) {
        case 1: precoFinal = produto * 0.9; break;
        case 2: precoFinal = produto * 0.85; break;
        case 3: precoFinal = produto; break;
        case 4: precoFinal = produto * 1.1; break;
    }

    console.log(`
            De acordo com a forma de pagamento,
            o total da sua compra ficou em ${precoFinal.toFixed(2)}
        `)
}
// verDesconto()

function verificaMedia() {
    let matricula = readline.question("Informe sua matricula: ");
    let nota1 = parseFloat(readline.question("Qual nota da av1?"));
    let nota2 = parseFloat(readline.question("Qual nota da av2?"));
    let nota3 = parseFloat(readline.question("Qual nota da av3?"));
    let me = parseFloat(readline.question("Qual a média de exercícios?"));

    let ma = (nota1 + (nota2 * 2) + (nota3 * 3) + me)/7;

    let conceito;
    switch (true) {
        case(ma >= 9):
            conceito = "A";
            break;
        case(ma >= 7.5):
            conceito = "B";
            break;
        case(ma >= 6):
            conceito = "C";
            break;
        case(ma >= 4):
            conceito = "D";
            break;
        default:
            conceito = "E";
            break;
    }

    let status = (conceito === "A" || conceito === "B" || conceito === "C") ? "Aprovado" : "Reprovado";

    console.log(`
            Referente à matricula: ${matricula},
            a média final foi ${ma.toFixed(2)},
            Conceito: ${conceito},
            status: ${status}
        `);
}
verificaMedia()