/* 5)  Encontrar  o  dobro  de  um  número  caso  ele  seja  positivo  e  o  seu  triplo  caso  seja  negativo, imprimindo o resultado. */

const valor = -4;

if (valor > 0) {
  const resultado = valor * 2;
  console.log(`O dobro do numero: ${resultado}`);
} else if (valor) {
  const resultado = valor * 3;
  console.log(`O triplo do numero ${resultado}`);
} else {
  console.log("O valor é zero.");
}
