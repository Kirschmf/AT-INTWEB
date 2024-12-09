const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

adicionarBtn.addEventListener('click', () => {
    const tarefaTexto = tarefaInput.value.trim(); 

    if (tarefaTexto) { 
        const li = document.createElement('li'); 
        li.textContent = tarefaTexto; 

        const removerBtn = document.createElement('button'); 
        removerBtn.textContent = 'Remover'; 
        removerBtn.classList.add('remover'); 

        removerBtn.addEventListener('click', () => {
            listaTarefas.removeChild(li); 
        });

        li.appendChild(removerBtn); 
        listaTarefas.appendChild(li); 
        tarefaInput.value = ''; 
    } else {
        alert('Por favor, digite uma tarefa.'); 
    }
});