function saudacao() {
    console.log("Olá!");
    console.log("Buenas?");

}
// saudacao();

/* ----------------------- */

function saudacao(nome) {
    console.log(`Olá ${nome}!`)
}
// saudacao("John");
// saudacao("Lucas");

/* ----------------------- */

function soma(a, b) {
    return a + b;
}

// const result = soma(2, 3);
// console.log(result * 2);

/* ----------------------- */

function maiorNumero(a, b) {
    // return a > b ? a : b; com ternario

    // com if e else
    if (a > b) {
        return a
    } else {
        return b
    }
}
// console.log(maiorNumero(10, 35));

function parOuImpar(number) {
    return number % 2 === 0 ? `par` : `Impar`;
}
// console.log(parOuImpar(7));

/* ----------------------- */

function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    
    for (const letra of texto) {
        console.log(letra)
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
// console.log(contarVogais(`Faiz o L`));

// O método includes() em JavaScript é uma ferramenta poderosa para verificar se uma string contém um determinado valor.

function somarTodos(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
}
console.log(somarTodos(1, 2, 3, 4, 5));
