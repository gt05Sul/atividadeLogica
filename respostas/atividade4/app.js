// 4)  Faça  um  algoritmo  que  leia  dois  valores  inteiros  A  e  B  se  os  valores  forem  iguais  deverá  se  
// somar  os  dois,  caso  contrário  multiplique  A  por  B.  Ao  final  de  qualquer  um  dos  cálculos  deve-se  
// atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

var A = Number(prompt("Digite um número inteiro"));
var B = Number(prompt("Digite um número inteiro"));
if (A == B) {
    let C = A + B;
    console.log(C);
} else {
    let C = A * B
    console.log(C);
}