// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal  deetiqueta  e  a  escolha  da  condição  de  pagamento.  Utilize  os  códigos  da  tabela  a  seguir  
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
 
// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
let formadePagamento = prompt("Qual a forma de pagamento? (Dinheiro, PIX ou Cartão)");

let desconto = 0;
let juros = 0;

if (formadePagamento === "Dinheiro" || formadePagamento === "PIX") {
    desconto = 0.15;
    precoProduto = precoProduto - (precoProduto * desconto);
    console.log(`Você recebeu um desconto de 15%. O valor final é: R$ ${precoProduto.toFixed(2)}`);
} else if (formadePagamento === "Cartão") {
    let parcelas = parseInt(prompt("Em quantas vezes deseja parcelar? (1 vez s/juros ou 2 vezes c/juros)"));

   if (parcelas == "1") {
        console.log(`Você não recebeu desconto. O valor final é: R$ ${precoProduto.toFixed(2)}`);
    } else if (parcelas == "2") {
        juros = 0.10;
        precoProduto = precoProduto + (precoProduto * juros);
        console.log(`Juros de 10%. O valor final é: R$ ${precoProduto.toFixed(2)}`);
    } else {
        console.log("Número de parcelas inválido.");
    }
} else {
    console.log("Método de pagamento inválido.");
}
