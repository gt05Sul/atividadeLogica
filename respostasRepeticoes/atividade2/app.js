// Desenvolver  um  algoritmo  que  leia  a  altura  de  15  pessoas.  Este  programa  deverá  calcular  e  
// mostrar : 
// a. A menor altura do grupo; 
// b. A maior altura do grupo

let menorAltura 
let maiorAltura 

for(let i = 1; i <= 15; i++ ){
    const altura = Number(prompt("informe a altura"));

    if (i == 1){
        menorAltura = altura
        maiorAltura = altura
    }

    if (altura > maiorAltura){
        maiorAltura = altura
    }

    if(altura < menorAltura){
        menorAltura = altura
    }

    console.log(`altura ${altura / 100}m`)
}

console.log(`a menor altura do grupo ${menorAltura / 100}`)
console.log(`a maior altura do grupo ${maiorAltura / 100}`)