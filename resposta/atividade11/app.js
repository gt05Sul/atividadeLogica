// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal  deetiqueta  e  a  escolha  da  condição  de  pagamento.  Utilize  os  códigos  da  tabela  a  seguir  
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
 
// Código Condição de pagamento 
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2 À vista no cartão de crédito, recebe 15% de desconto 
// 3 Em duas vezes, preço normal de etiqueta sem juros 
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%


 tipoDePagamento = "credito"
 precoProduto

 switch (tipoDePagamento){
    case "dinheiro":
        case "cheque":
            console.log("vc recebeu um desconto de 10%")
            break
    case "credito":
        const tipoDePagamentoCredito = prompt("a vista ou parcelado (a vista/2 vezes/3 vezes) ?")
        if (tipoDePagamentoCredito === "a vista"){
            console.log("vc recebeu um desconte de 15%")
        }else if(tipoDePagamentoCredito === "2 vezes"){
            console.log("vc ira pagar o preço de etiqueta sem juros")
        }else if(tipoDePagamentoCredito === "3 vezes"){
            console.log("preço normal de etiqueta mais juros de 10%")
        }else{
            console.log("erro")
        }
        break
    
}
