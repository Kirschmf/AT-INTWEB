const caixa = document.getElementById('minhaCaixa');
const botao = document.getElementById('meuBotao');

caixa.classList.add('ativa');
caixa.classList.remove('caixa');

botao.addEventListener('click', () => {
    if (caixa.classList.contains('ativa')) {
        caixa.classList.remove('ativa');
        caixa.classList.add('inativa');
    } else {
        caixa.classList.remove('inativa');
        caixa.classList.add('ativa');
    }
});