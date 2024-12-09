const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const numero = document.getElementById('numeroInput').value.trim();
    const mensagem = document.getElementById('mensagemInput').value.trim();

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});