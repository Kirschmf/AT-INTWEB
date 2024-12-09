const lista = document.getElementById('minhaLista');
const primeiroItem = lista.firstChild;

const primeiroItemLi = lista.firstElementChild;
console.log('Primeiro item da lista:', primeiroItemLi.textContent);

const ultimoItemLi = lista.lastElementChild;
console.log('Último item da lista:', ultimoItemLi.textContent);

const novoItem = document.createElement('li');
novoItem.textContent = 'Item 4';
lista.appendChild(novoItem);
console.log('Novo item adicionado:', novoItem.textContent);