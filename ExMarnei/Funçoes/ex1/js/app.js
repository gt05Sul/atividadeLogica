
// ===== Functions ===== //

// Busca o elemento HTML (da página ativa) e "ouve" o evento (click do mouse)
const formulario = document.getElementById('formCalcular');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();    // Previne o comportamento padrão 

    const valor1 = Number(formulario.valor1.value);
    const valor2 = Number(formulario.valor2.value);
    const operacao = Number(formulario.operacao.value);

    // alert(evento);
    console.log(valor1);
    console.log(valor2);
    console.log(operacao);

    calcularValor(valor1, valor2, operacao);
});

// Função Nomeada
function calcularValor(valor1, valor2, operacao = 1) {
    let resultado = '';

    switch (operacao) {
        case 1:
            resultado = somar(valor1, valor2);
            break;
    }

    mostrar('Resultado:', resultado);
}

function somar(v1, v2) {
    return v1 + v2;
}

function mostrar(titulo, mensagem, tipo = 0) {
    alert(`${titulo}\n${mensagem}`);
}