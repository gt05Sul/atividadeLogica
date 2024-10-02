// Tendo  como  dados  de  entrada  a  altura  e  o  sexo  de  uma  pessoa,  construa  um  algoritmo  que  
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7

const altura = 1.80
const peso = 80
const sexo ="F"

function resultadoDoPeso(){
    if(sexo === "M"){
       const ResultadoM = peso * altura  - 58
       console.log(`seu resultado e ${ResultadoM}`)
    }else if(sexo === "F"){
        const ResultadoF = peso * altura - 44.7
        console.log(`seu resultado e ${ResultadoF}`)
    }else{
        console.log("erro")
    }
}

resultadoDoPeso()