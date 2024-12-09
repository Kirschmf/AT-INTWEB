const carro = {
    marca: 'Toyota',
    modelo: 'Corolla GR',
    ano: 2024,
    
    mostrarDetalhes: function() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    },
    
    ligar: function() {
        console.log("O carro está ligado!");
    }
};

carro.mostrarDetalhes();

carro.ligar();