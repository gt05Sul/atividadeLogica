// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
// média  aritmética  dos  valores  lidos,  a  quantidade  de  valores  positivos,  a  quantidade  de  valores  
// negativos e o percentual de valores negativos e positivos


function mediaPositivasENegativos(){
    let soma = 0 , positivos = 0 , negativos = 0, contador = 0 ;
    let valor;

    do {
        valor = parseFloat(prompt(`digite um número : (0 pra sair)`));
        if (valor != 0) {
            soma += valor;
            console.log(valor)
            contador++;

            if(valor > 0) positivos++;
            else negativos++;
            
        }

    } while (valor != 0);

    let media = contador > 0 ? soma / contador : 0;
    console.log(`Media: ${media}`);
    console.log(`Quantidade de positivos: ${positivos}`);
    console.log(`Quantidade de positivos: ${negativos}`);

}

mediaPositivasENegativos()