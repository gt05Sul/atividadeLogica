// Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem
// decrescente

let a = 70;
let b = 10;
let c = 60;

if (a > b && b > c) {
    console.log(a,b,c);
}else if (a > c && c > b) {
    console.log(a,c,b);
}else if (b > c && c > a) {
    console.log(b,c,a);
}else if (b > c && a > c) {
    console.log(b,a,c);
}else if (c > b && b > a) {
    console.log(c,b,a);
}else if (c > b && a > b) {
    console.log(c,a,b);
}else{
    console.log("erro")
}
