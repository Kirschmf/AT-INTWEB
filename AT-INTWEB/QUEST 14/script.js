async function fetchProdutos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

function exibirProdutos(produtos) {
    const produtosContainer = document.getElementById('produtosContainer');

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}">
            <h2>${produto.title}</h2>
            <p class="preco">R$ ${produto.price.toFixed(2)}</p>
            <p>${produto.description}</p>
        `;

        produtosContainer.appendChild(card);
    });
}

fetchProdutos();