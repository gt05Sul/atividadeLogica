
// alert("Hello World");

function receberValor(){

    let valor;
    let conteudo = '';

    do {
        valor = prompt("Informe um valor: ");
        console.log (valor);
        
    } while (valor != 0 || valor != null);
    document.getElementById('resultado').innerHTML += valor;
}
