// 7)  Faça  um  algoritmo  que  leia  uma  variável  e  some  5  caso  seja  par  ou  some  8  caso  seja  ímpar,  
// imprimir o resultado desta operação. 

let num = 4

if (num % 2 == 0){
 let par = num + 5
 console.log(`${par} é par + 5`)
} else {
    let impar  = num + 8
    console.log(`${impar} é impar + 8`)
}