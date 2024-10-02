
// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
// estado civil seja “CASADA”, solicitar o tempo de casada (anos).

let nome = "Júlio";
let sexo = "M";
let estadoCivil = "Casada";

let anosCasada = 5;


if(sexo === "F" && estadoCivil === "Casada" ){
    console.log(`A ${nome} está casada há ${anosCasada} anos`);
} else if (sexo === "F" && estadoCivil !== "Casada"){
    console.log(`A ${nome} não é casada`);
} else {
    console.log(`O ${nome} não é do sexo feminino`);
}