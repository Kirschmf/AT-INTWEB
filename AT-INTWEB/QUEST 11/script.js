const botao = document.getElementById('meuBotao');

botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = '#007BFF';
});

botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = ''; 
});

botao.addEventListener('mousedown', () => {
    botao.textContent = 'Alterado'; 
});