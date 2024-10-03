/* 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal  deetiqueta  e  a  escolha  da  condição  de  pagamento.  Utilize  os  códigos  da  tabela  a  seguir  
para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
 
Código Condição de pagamento 
1 À vista em dinheiro ou cheque, recebe 10% de desconto 
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros 
4 Em duas vezes, preço normal de etiqueta mais juros de 10% */

const preco = 150.0;

const condicaoDePagamento = 2;

let valorFinal;

switch (condicaoDePagamento) {
  case 1:
    // 10% de desconto para pagamento à vista em dinheiro ou cheque
    valorFinal = preco * 0.9;
    break;
  case 2:
    // 15% de desconto para pagamento à vista no cartão de crédito
    valorFinal = preco * 0.85;
    break;
  case 3:
    // Preço normal de etiqueta sem juros em duas vezes
    valorFinal = preco;
    break;
  case 4:
    // Preço normal de etiqueta mais 10% de juros em duas vezes
    valorFinal = preco * 1.1;
    break;
  default:
    console.log("Condição de pagamento inválida.");
    break;
}

if (valorFinal) {
  console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)}`);
}
