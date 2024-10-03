/* 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
3  verificações  e  a  média  dos  exercícios  que  fazem  parte  da  avaliação,  e  calcule  a  média  de  
aproveitamento, usando a fórmula: 
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
 
A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
suas  notas,  a  média  dos  exercícios,  a  média  de  aproveitamento,  o  conceito  correspondente  e  a  
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
 
Média de aproveitamento Conceito 
>= 90 A 
>= 75 e < 90 B 
>= 60 e < 75 C 
>= 40 e < 60 D 
< 40 E */

const numeroAluno = 12345;
const nota1 = 85;
const nota2 = 70;
const nota3 = 90;
const mediaDeExercicios = 80;

// Calculando a média de aproveitamento (MA) usando a fórmula fornecida
let mediaAproveitamento =
  (nota1 + nota2 * 2 + nota3 * 3 + mediaDeExercicios) / 7;

// Variável para armazenar o conceito e o status (Aprovado/Reprovado)
let conceito;
let statusDoAluno;

switch (true) {
  case mediaAproveitamento >= 90:
    conceito = "A";
    statusDoAluno = "Aprovado";
    break;
  case mediaAproveitamento >= 75:
    conceito = "B";
    statusDoAluno = "Aprovado";
    break;
  case mediaAproveitamento >= 60:
    conceito = "C";
    statusDoAluno = "Aprovado";
    break;
  case mediaAproveitamento >= 40:
    conceito = "D";
    statusDoAluno = "Reprovado";
    break;
  default:
    conceito = "E";
    statusDoAluno = "Reprovado";
    break;
}

// Exibindo as informações do aluno e o resultado final
console.log(`Número do aluno: ${numeroAluno}`);
console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Média dos exercícios: ${mediaDeExercicios}`);
console.log(`Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}`);
console.log(`Conceito: ${conceito}`);
console.log(`Status: ${statusDoAluno}`);
