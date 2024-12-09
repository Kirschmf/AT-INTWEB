const lista = document.getElementById('minhaLista');
const botaoAlterar = document.getElementById('botaoAlterar');
const botaoRemover = document.getElementById('botaoRemover');
const botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAlterar.addEventListener('click', () => {
    const item2 = lista.children[1]; 
    item2.textContent = "Item 2 Alterado"; 
});

botaoRemover.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild; 
    if (ultimoItem) {
        lista.removeChild(ultimoItem); 
    }
});

botaoAdicionar.addEventListener('click', () => {
    const novoItem = document.createElement('li'); 
    novoItem.textContent = "Novo Item"; 
    lista.appendChild(novoItem); 
});