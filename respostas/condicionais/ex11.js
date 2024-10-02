// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal  deetiqueta  e  a  escolha  da  condição  de  pagamento.  Utilize  os  códigos  da  tabela  a  seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 

// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

let valorR$ = 100;
let formaDePagamento = "débito" ;
let parcelas = 1;

if(formaDePagamento == "dinheiro" || formaDePagamento == "cheque" && parcelas == 1) {
    let desconto = valorR$ * 0.9;
    console.log(`O produto custa ${desconto}`);
} else if(formaDePagamento == "crédito" && parcelas == 1) {
    let desconto = valorR$ * 0.85;
    console.log(`O produto custa ${desconto}`);
} else if(formaDePagamento == "crédito" && parcelas == 2) {
    console.log(`O produto custa ${valorR$}`);
} else if(formaDePagamento == "crédito" && parcelas > 2) {
    let desconto = valorR$ * 1.1;
    console.log(`O produto custa ${desconto}`);
} else {
    console.log("Escolha uma forma de pagamento válida!")
}