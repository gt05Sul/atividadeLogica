// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
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

let aluno = parseInt(prompt("Qual o Número do aluno?"));

let nota1 = parseFloat(prompt("Nota 1:"));
let nota2 = parseFloat(prompt("Nota 2:"));
let nota3 = parseFloat(prompt("Nota 3:"));

let ME = (nota1 + nota2 + nota3) / 3;
let MA = (nota1 + (nota2 * 2) + (nota3 * 3) + ME) / 7;

let conceito;


if (MA >= 9.0) {
    conceito = "A";
    console.log(`Aluno: ${aluno}\nSeu conceito é: ${conceito}\nSua média de exercícios foi de: ${ME.toFixed(2)}\nSua média de aproveitamento é: ${MA.toFixed(2)}\n"Aprovado"`);
} else if (MA >= 7.5 && MA < 9.0) {
    conceito = "B";
    console.log(`Aluno: ${aluno}\nSeu conceito é: ${conceito}\nSua média de exercícios foi de: ${ME.toFixed(2)}\nSua média de aproveitamento é: ${MA.toFixed(2)}\n"Aprovado"`);
} else if (MA >= 6.0 && MA < 7.5) {
    conceito = "C";
    console.log(`Aluno: ${aluno}\nSeu conceito é: ${conceito}\nSua média de exercícios foi de: ${ME.toFixed(2)}\nSua média de aproveitamento é: ${MA.toFixed(2)}\n"Aprovado"`);
} else if (MA >= 4.0 && MA < 6.0) {
    conceito = "D";
    console.log(`Aluno: ${aluno}\nSeu conceito é: ${conceito}\nSua média de exercícios foi de: ${ME.toFixed(2)}\nSua média de aproveitamento é: ${MA.toFixed(2)}\n"Reprovado"`);
} else {
    conceito = "E";
    console.log(`Aluno: ${aluno}\nSeu conceito é: ${conceito}\nSua média de exercícios foi de: ${ME.toFixed(2)}\nSua média de aproveitamento é: ${MA.toFixed(2)}\n"Reprovado"`);
}







