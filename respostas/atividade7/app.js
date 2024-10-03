var valor = Number(prompt("Digite um número"));

if(valor % 2 === 0) {
    let total = valor + 5;
    console.log("Par: " + total);
} else {
    let total = valor + 8;
    console.log("Ímpar: " + total);
}
