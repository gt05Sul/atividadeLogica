// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
// estado civil seja “CASADA”, solicitar o tempo de casada (anos).

let nome = prompt("Qual seu nome?");
let sexo = prompt("Qual seu sexo? (M ou F)");
let estadoCivil = prompt("Qual seu estado civil?");


if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = parseFloat(prompt("Quanto tempo de casada em anos?"));
    console.log("Parabens pelos: " + tempoCasada + " anos de casada!");
} else {
    console.log("Ok");
}