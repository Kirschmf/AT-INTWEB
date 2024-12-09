window.addEventListener('load', () => {
    console.log('A página foi carregada!'); 

    const language = navigator.language || navigator.userLanguage; 
    const url = window.location.href; 

    const infoElement = document.getElementById('info');
    infoElement.textContent = `Idioma do navegador: ${language} | URL: ${url}`;

    setTimeout(() => {
        alert('As informações foram inseridas na página!'); 
        window.location.href = 'https://www.infnet.edu.br'; 
    }, 1000); 
});