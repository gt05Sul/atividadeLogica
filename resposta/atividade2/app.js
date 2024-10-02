// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
// estado civil seja “CASADA”, solicitar o tempo de casada (anos).

const nome = "Davi"
const sexo = "F"
const estadoCivil = "CASADA"

if(estadoCivil === "CASADA" && sexo === "F"){
    let tempoDeCasada = prompt("quanto tempo casada?")
    console.log(`seu tempo de casada e ${tempoDeCasada} anos`);
}