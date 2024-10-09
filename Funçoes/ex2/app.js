const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

// Primeira questão: 1. Listar o nome de todas as empresas

const listaDeEmpresas = empresas.map((empresa) => (empresa.nome)) // Jairo
console.log(listaDeEmpresas); // Jairo

empresas.forEach((empresa)=>{ //Victor
    console.log(empresa.nome); //Victor
}); // Victor

const nomesMapeados = empresas.map(empresa => empresa.nome);
console.log(nomesMapeados)

// Segunda questão: 2. Filtrar empresas com valor de mercado maior que 100

const valoDaEmpresa = empresas.filter((empresa) => { // Davi
    if(empresa.valorDeMercado > 100){ // Davi
        console.log(empresa.nome) // Davi
        console.log(empresa.valorDeMercado) // Davi
    } // Davi
}) // Davi

const valoresMapeados = empresas.filter(empresa => empresa.valorDeMercado > 100);
console.log("\nEmpresas com valor de marcado superior a 100: ")
console.log(valoDaEmpresa);

const valor = empresas.filter(empresa => {  // Ryan
    return empresa.valorDeMercado > 100 // Ryan
}); // Ryan

console.log(valor) // Ryan

// Terceira questão: 3. Calcular o valor total de mercado de todas as empresas

const valorDeMercadoTotal = empresas.reduce((accumulator, valor) => {
    return valor.valorDeMercado + accumulator
}, 0)

console.log(valorDeMercadoTotal)

let soma = 0;

empresas.forEach((empresa)=>{soma += empresa.valorDeMercado})
console.log(soma);

// Quarta questão: 4. Encontrar a empresa mais antiga

const empresaMaisAntiga = empresas.reduce((maisAntiga, empresa) => {
    return (empresa.anoDeCriacao < maisAntiga.anoDeCriacao) ? empresa : maisAntiga;
}, empresas[0]);
console.log(empresaMaisAntiga);



// Quinta questão: 5. Criar um novo array com nome e CEO das empresas

const nomes = [];
empresas.forEach(empresa => {
    nomes.push({
        nome: empresa.nome,
        CEO: empresa.CEO
    })
})

console.log(nomes);

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} e a empresa: ${valores[pos]}`);
// }

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

for(let pos in empresas) {
    console.log(`A posição ${pos} tem o valor ${empresas[pos]}`);
}