// exercício 1
let contador = 1;
let soma = 0;

while (contador < 500) {
    if (contador % 3 === 0 && contador % 2  === 1){
        soma += contador;
        console.log(soma);
        
    }
    contador ++
}

console.log(`A soma é = ${soma}`);
