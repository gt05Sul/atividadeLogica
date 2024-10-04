// ;)  Desenvolver  um  algoritmo  que  leia  a  altura  de  15  pessoas.  Este  programa  deverá  calcular  e  
// mostrar : 
// a. A menor altura do grupo; 
// b. A maior altura do grupo; 

    // Inicializa um array para armazenar as alturas
let alturas = [];

// Lê a altura de 15 pessoas
for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} em metros:`));
    alturas.push(altura); // Adiciona a altura ao array
}


// Inicializa as variáveis para a menor e maior altura
let menorAltura = alturas[0];
let maiorAltura = alturas[0];

// Percorre o array para encontrar a menor e a maior altura
for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i]; // Atualiza a menor altura
    }
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i]; // Atualiza a maior altura
    }
}

// Exibe os resultados
console.log("A menor altura do grupo é:", menorAltura, "metros");
console.log("A maior altura do grupo é:", maiorAltura, "metros");
