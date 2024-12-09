function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.mostrarDetalhes = function() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    };

    this.ligar = function() {
        console.log("O carro está ligado!");
    };
}

const carro1 = new Carro('Toyota', 'Corolla GR', 2024);
const carro2 = new Carro('Honda', 'Civic Type R', 2023);
const carro3 = new Carro('Ford', 'Fusion Turbo', 2017);

carro1.mostrarDetalhes();
carro1.ligar();

carro2.mostrarDetalhes();
carro2.ligar();

carro3.mostrarDetalhes();
carro3.ligar();