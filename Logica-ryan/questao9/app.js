// 9)  Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  construa  um  algoritmo  que  
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7.


const sexo = ""
const h = 1.56

if (sexo === "Masc"){
    let pesoIdeal = (72.5 * h) - 58;
    console.log(`seu gênero ${sexo} e seu peso ideal é ${pesoIdeal}` )
} else if (sexo === "Fem"){
    let pesoIdeal = (62.1 * h) - 44.7;
    console.log(`seu gênero ${sexo} e seu peso ideal é ${pesoIdeal}`)
} else {
    console.log("insira seu gênero")
}