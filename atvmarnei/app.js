
function verificarValor() {
     
    let valor;
    let conteudo = "";

    do {
        valor = prompt("Informe um valor");
        console.log(valor);

        if (valor % 2 == 0) {
            console.log(valor);
            conteudo += valor;
        }
        
    } while (valor != 0);
    document.getElementById('resultado').innerHTML = valor;
}