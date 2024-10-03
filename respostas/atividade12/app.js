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







