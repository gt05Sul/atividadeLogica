// Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
// 3  verificações  e  a  média  dos  exercícios  que  fazem  parte  da  avaliação,  e  calcule  a  média  de
// aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7

// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
// suas  notas,  a  média  dos  exercícios,  a  média  de  aproveitamento,  o  conceito  correspondente  e  a
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.

// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E

const alunoId = 1;
const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const mediaExercicios = 10; // Média dos exercícios (ME)

// Calcula a média de aproveitamento (MA)
const mediaDeAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;

// Determina o conceito baseado na média de aproveitamento
let conceito;
if (mediaDeAproveitamento >= 9) {
    conceito = "A";
} else if (mediaDeAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaDeAproveitamento >= 6) {
    conceito = "C";
} else if (mediaDeAproveitamento >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

// Exibe as informações do aluno e a avaliação final
console.log(`
    Aluno ${alunoId}
    Suas notas: Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}
    Média dos exercícios: ${mediaExercicios}
    Sua média de aproveitamento: ${mediaDeAproveitamento.toFixed(2)}
    Seu conceito: ${conceito}
`);

// Exibe se o aluno foi aprovado ou reprovado com base no conceito
if (conceito === "A" || conceito === "B" || conceito === "C") {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// const verificacao1 = {
//   nota1: 10,
//   nota2: 5,
//   nota3: 4,
//   media: nota1 + nota2 + nota3 / 3,
//   mediaDeAproveitamento: (nota1 + nota2 * 2 + nota3 * 3 + media) / 7,
// };

// const verificacao2 = {
//     nota1: 4,
//     nota2: 5,
//     nota3: 7,
//     media: (nota1 + nota2 + nota3) / 3,
//     mediaDeAproveitamento: (nota1 + nota2 * 2 + nota3 * 3 + media) / 7
// }

// const verificacao3 = {
//     nota1: 8,
//     nota2: 5.5,
//     nota3: 6,
//     media: (nota1 + nota2 + nota3) / 3,
//     mediaDeAproveitamento: (nota1 + nota2 * 2 + nota3 * 3 + media) / 7
// }
