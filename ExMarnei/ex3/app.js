// let menorAltura = 0;
// let maiorAltura = 1000;

for (let i = 1; i <= 15; i++) {
    const altura = Number(prompt("Informe a altura (em cm)"));

    if (i == 1) {
        menorAltura = altura;
        maiorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura > menorAltura) {
        menorAltura = altura;
    }

    console.log(`Altura: ${altura / 100}m`);
}

console.log(`A menor altura do grupo: ${menorAltura / 100}m`);
console.log(`A maior altura do grupo: ${maiorAltura / 100}m`);
