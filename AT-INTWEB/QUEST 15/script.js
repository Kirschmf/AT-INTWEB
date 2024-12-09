const deputadosContainer = document.getElementById('deputados');
const searchInput = document.getElementById('search');

async function fetchDeputados() {
    const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?itens=3');
    const data = await response.json();
    return data.dados;
}

function displayDeputados(deputados) {
    deputadosContainer.innerHTML = '';
    deputados.forEach(deputado => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${deputado.urlFoto}" alt="${deputado.nome}">
            <h2>${deputado.nome}</h2>
            <p>Partido: ${deputado.siglaPartido}</p>
            <p>UF: ${deputado.siglaUf}</p>
        `;
        deputadosContainer.appendChild(card);
    });
}

function filterDeputados(deputados) {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDeputados = deputados.filter(deputado => 
        deputado.nome.toLowerCase().includes(searchTerm)
    );
    displayDeputados(filteredDeputados);
}

let deputados = [];

fetchDeputados().then(data => {
    deputados = data;
    displayDeputados(deputados);
});

searchInput.addEventListener('input', () => filterDeputados(deputados));