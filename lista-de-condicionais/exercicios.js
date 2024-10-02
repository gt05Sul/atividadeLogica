/* 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor 
que C. */

const A = 3
const B = 2
const C = 6

const soma = A + B

if (soma < C) {
    console.log(`O resultado da soma de A + B = ${soma}`)
}


/* 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa.
 Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). */

const usuario = {
    nome: "Maria",
    sexo: "F",
    estado_civil: "CASADA"
}

if (usuario.sexo === "F" && usuario.estado_civil === "CASADA") {
    console.log("Por favor, adicione o tempo de casado(a)")
}
