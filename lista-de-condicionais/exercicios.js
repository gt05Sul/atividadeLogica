/* 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor 
que C. */

/* const A = 3
const B = 2
const C = 6

const soma = A + B

if (soma < C) {
    console.log(`O resultado da soma de A + B = ${soma}`)
} */


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


/* 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.  */

/* const valor = 5

const verificaValor = valor % 2 === 0 ? 'PAR' : "IMPAR"

console.log(verificaValor) */


/* 4)  Faça  um  algoritmo  que  leia  dois  valores  inteiros  A  e  B  se  os  valores  forem  iguais  deverá  se  
somar  os  dois,  caso  contrário  multiplique  A  por  B.  Ao  final  de  qualquer  um  dos  cálculos  deve-se  
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.  */

const A = 3
const B = 4

function soma() {
    if (A === B) {
        let soma = A + B
        return soma
    } else {
        let soma = A * B
        return soma
    }
}

let C = soma()
console.log(C)


/* 5)  Encontrar  o  dobro  de  um  número  caso  ele  seja  positivo  e  o  seu  triplo  caso  seja  negativo,  
imprimindo o resultado. */

/* const valor = -4

if (valor > 0) {
    let resultado = valor * 2
    console.log(`O dobro do numero: ${resultado}`)
} else if (valor) {
    let resultado = valor * 3
    console.log(`O triplo do numero ${resultado}`)
} */

/* 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são 
VERDADEIROS ou FALSOS. */

const primeiroValor = true
const segundoValor = false

const resultado = primeiroValor && segundoValor ? 'VERDADEIROS' : 'FALSOS';
console.log(resultado)


/* 7)  Faça  um  algoritmo  que  leia  uma  variável  e  some  5  caso  seja  par  ou  some  8  caso  seja  ímpar,  
imprimir o resultado desta operação.  */

const valor = 5

if (valor % 2 === 0) {
    const resultado = valor + 5
    console.log("O número e par:",resultado)
} else {
    const resultado = valor + 8
    console.log("O número impar:",resultado)
}