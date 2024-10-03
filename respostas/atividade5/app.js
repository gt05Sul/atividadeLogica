// 5)  Encontrar  o  dobro  de  um  número  caso  ele  seja  positivo  e  o  seu  triplo  caso  seja  negativo,  
// imprimindo o resultado.

var valor = Number(prompt("Digite um número inteiro"));

if (valor >= 0) {
    valor = valor * 2;
    console.log(valor);
} else {
    valor = valor * 3;
    console.log(valor);
}