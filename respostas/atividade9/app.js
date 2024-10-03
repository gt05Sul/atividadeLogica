let altura = parseFloat(prompt("Qual sua altura?"));
let sexo = prompt ("Qual seu sexo? M ou F");




if(sexo == "M") {
    let pesoIdeal = altura * 72.7;
    console.log("Seu peso ideal e:" + (pesoIdeal.toFixed(2)));
} else { (sexo == "F") 
    let pesoIdeal = altura * 62.1;
    console.log("Seu peso ideal e:" + (pesoIdeal.toFixed(2)));
}
