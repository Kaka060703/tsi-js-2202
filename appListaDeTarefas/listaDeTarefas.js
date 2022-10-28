const entradaTarefa = document.querySelector('#tarefa'); 
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefas = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){


    //evento para adicionar tarefas
    btnAddTarefa.addEventListener('click', adicionarTarefa);

    //evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    //evento para limpar toda a lista
    btnLimpaTudo.addEventListener('click', apagarTudo);
    //evento para filtrar tarefas
    filtroDeTarefas.addEventListener('keyup', filtrar);
    //evento para recuperar as tarefas
    document.addEventListener('DOMContentLoaded',recuperaTarefa);

}
carregaMonitoresDeEventos();

function recuperaTarefa(){
    let tarefas = localStorage.getItem('tarefas');
    if ( tarefas == null ){
        tarefas = []
    }
    tarefas = JSON.parse(tarefas);
 
    console.log(tarefas);
}

function filtrar(evento){
    //capturamos o que o usuário está digitando
    //passando tudo para minúsculo
    const procurado = evento.target.value.toLowerCase();
    //captuamos todos os elementos li existentes
    console.log(document.querySelectorAll('collection-item'));


    //Para cada tarefa existente, busque a string desejada
    listaDeTarefas.forEach(function(tarefa){
       
        //Recuperamos apenas o texto do elemento
       //li onde está a tarefa  
       textoTarefa = tarefa.innerText;

       //indexOf mostra o posição da primeira letra da string
       // != -1 porque a letra que não está na string é -1
       //Procuramos a string digitada no filtro no texto que está no <li>
       if( textoTarefa.toLowerCase().indexOf(procurado) != 1){

        tarefa.style.display = 'block';
       }else{

        tarefa.style.display = 'none';
       }

    })
}

function apagarTudo(evento){
    evento.preventDefault();

    listaDeTarefas.innerHTML = '';
}

function apagarTarefa(evento){

    //se o elemento pai tiver a classe apaga-tarefa,
    //ou seja, for o elemento "a", apague "li", ou seja, a tarefa

    //target = alvo
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){

        //apaga o elemento pai do "a", ou seja, o li, pois
        //o elemento alvo do evento foi o "i"
        evento.target.parentElement.parentElement.remove();
    }
}

function apagarDoLocalStorage(tarefa){
    // localStorage.removeItem()
}

function adicionarTarefa(evento){
    evento.preventDefault();

    //verifica se o usuário entrou em uma tarefa
    if(entradaTarefa.value === '' ){
        alert('Entre com uma tarefa');
        return false;
    }
    gravarTarefa(entradaTarefa.value)
    //cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item'; 
    li.appendChild(document.createTextNode(entradaTarefa.value));

    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';


    //cria ícone com c para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';


    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //apaga o input para entrada
    entradaTarefa.value = '';
}

function gravarTarefa(tarefa){

    let tarefas = [];

    //Recupera tarefas j[a gravadas no localStorage
    let tarefaDoStorage = localStorage.getItem('tarefas');
    
    if ( tarefaDoStorage != null ){

        //Se o localStorage já tiver alguma ino,
        //faz o parse da string JSON para um objeto JSON
        tarefa = JSON.parse(tarefaDoStorage);
    }

    //Adiciona a tarefa do JSON já existente
    tarefas.push(tarefa);

    //Grava o novo JSON no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}