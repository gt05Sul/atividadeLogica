
let menu;

do {
    //Usuário infoorma uma opção do menu
    menu = Number(prompt("Informe uma opção"));
    // menu = +prompt("Informe uma opção");

    switch (menu) {
        case 0:
            console.log("Sair");
            break;

        case 1:
            console.log("Adição");
            break;

        case 2:
            console.log("Subtração");
            break;

        case 4:
            console.log("Multiplicação");
            break;

        case 5:
            console.log("Divisão");
            break;

        default:
            console.log("Opção invalida");
            break;
    }
} while (menu != 0);