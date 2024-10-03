// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal  deetiqueta  e  a  escolha  da  condição  de  pagamento.  Utilize  os  códigos  da  tabela  a  seguir  
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 

// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%


// const condicaofirts = 0.1 * 100 + "%"
// const condicaosecond = 0.15 * 100 + "%"
// const condicaothird = valor
// const condicaoforth = valor * 0.1 * 100 + "%"

// let valor = 80

// console.log(condicaoforth)




function calcularPagamento(precoNormal, condicaoPagamento) {
    let precoFinal;

    switch (condicaoPagamento) {
        case 1: // À vista em dinheiro ou cheque
            precoFinal = precoNormal * 0.90; // 10% de desconto
            break;
        case 2: // À vista no cartão de crédito
            precoFinal = precoNormal * 0.85; // 15% de desconto
            break;
        case 3: // Em duas vezes, sem juros
            precoFinal = precoNormal; // preço normal
            break;
        case 4: // Em duas vezes, com juros de 10%
            precoFinal = precoNormal * 1.10; // 10% de juros
            break;
        default:
            console.log("Condição de pagamento inválida.");
            return;
    }

    console.log(`O preço final a ser pago é: R$ ${precoFinal.toFixed(2)}`);
}

// Exemplo de uso
const precoNormal = 100; // Preço normal do produto
const condicaoPagamento = 4; // Condição de pagamento escolhida

calcularPagamento(precoNormal, condicaoPagamento);

