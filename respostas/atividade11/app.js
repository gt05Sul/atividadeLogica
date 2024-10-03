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
