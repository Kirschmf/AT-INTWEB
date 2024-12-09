const imagem = document.getElementById('canhao');

imagem.src = 'https://firearmsbrasil.com.br/wp-content/uploads/2016/10/browning.jpg'; // Nova imagem

imagem.alt = 'Imagem Atualizada';

imagem.setAttribute('title', 'Esta é uma imagem atualizada');

console.log('Novo src:', imagem.src);
console.log('Novo alt:', imagem.alt);
console.log('Novo title:', imagem.getAttribute('title'));