//LÓGICA COM MATEMÁTICA BÁSICA PARA BURROS OK

// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
// estado civil seja “CASADA”, solicitar o tempo de casada (anos).

const nome = "amainda"
const sexo = "F"
const estadoCivil = "casada" 
const tempoCasado = ""

if (sexo === "F" && estadoCivil === "casada"){
    console.log(`${nome} a quanto tempo você é ${estadoCivil}? ${tempoCasado} anos?`)
} else if (sexo === "M" && estadoCivil === "casado"){
    console.log("ok")
}