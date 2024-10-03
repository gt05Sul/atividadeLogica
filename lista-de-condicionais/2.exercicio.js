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

