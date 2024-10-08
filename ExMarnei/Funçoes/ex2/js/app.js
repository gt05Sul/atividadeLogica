// Criar um Array
const carros = [
    {
        id: 1,
        fabricante: "Honda",
        modelo: "Civic",
        potencia: 120.3,
        cambio: "manual"
    }
];

// console.log(carros);
// console.log(carros[0].modelo);

// Criar um Objeto
const carro = {
    id: 2,
    fabricante: "Fiat",
    modelo: "Toro",
    potencia: 110.5,
    cambio: "automatico"
};

// Adicionar no final do array
carros.push(carro);

console.log(carros);

// Adicionar no início do array
carros.unshift(carro);

console.log(carros);

// Remove do final do array
carros.pop(carro);

console.log(carros);

// Remove do início do array
carros.shift(carro);

console.log(carros);

// Adicionar no final do array
carros.push(carro);

// Criar um Objeto
const carro2 = {
    id: 3,
    fabricante: "Volkswagen",
    modelo: "Fusca",
    potencia: 60.9,
    cambio: "manual"
};

// Adicionar no início do array
carros.unshift(carro2);

console.log(carros[1].cambio = 'automatico');

console.log(carros);