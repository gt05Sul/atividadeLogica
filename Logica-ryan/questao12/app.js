function calcularMediaAproveitamento() {
    // Leitura dos dados do aluno
    const numeroIdentificacao = prompt("Digite o número de identificação do aluno:");
    const nota1 = parseFloat(prompt("Digite a nota 1:"));
    const nota2 = parseFloat(prompt("Digite a nota 2:"));
    const nota3 = parseFloat(prompt("Digite a nota 3:"));
    const mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    // Cálculo da média de aproveitamento
    const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

    // Determinação do conceito
    let conceito;
    
    switch (true) {
        case mediaAproveitamento >= 90:
            conceito = 'A';
            break;
        case mediaAproveitamento >= 75:
            conceito = 'B';
            break;
        case mediaAproveitamento >= 60:
            conceito = 'C';
            break;
        case mediaAproveitamento >= 40:
            conceito = 'D';
            break;
        default:
            conceito = 'E';
            break;
    }

    // Mensagem de aprovação ou reprovação
    const status = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? 'Aprovado' : 'Reprovado';

    // Exibição dos resultados
    console.log(`Número do Aluno: ${numeroIdentificacao}`);
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
    console.log(`Média dos Exercícios: ${mediaExercicios}`);
    console.log(`Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}`);
    console.log(`Conceito: ${conceito}`);
    console.log(`Status: ${status}`);
}

// Chamada da função
calcularMediaAproveitamento();
