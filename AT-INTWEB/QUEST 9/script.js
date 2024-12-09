const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('meuParagrafo');

let contador = 0;

botao.addEventListener('click', () => {
    console.log('Botão clicado!'); 
    contador++;
    botao.textContent = `Clique aqui! (${contador})`;
});


botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = '#0056b3'; 
    botao.style.color = 'white'; 
});


botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = ''; 
    botao.style.color = ''; 
});