//como criar elementos

//criar elemento li 
let novoItemNaLista = document.createElement('li');

//define o id do novo elemento 
novoItemNaLista.id = 'novo-item';

//efine a classe CSS do novo elemento
novoItemNaLista.className = 'collection-item';

//colocar atributo
novoItemNaLista.setAttribute('title','Novo Item na lista');

//adicionando o node de texto filho
novoItemNaLista.appendChild(document.createTextNode('Fazer exercício físico'));

//criar o lemento para dentro do li 


let elementoAncora = document.createElement('a');

elementoAncora.className ='delette-item secondary-content';

elementoAncora.setAttribute('href','#');

//criar sub elemento <i>
let elementoIcone = document.createElement('i');

elementoAncora.classNmae = 'fa fa-remove';

//Adiciona o <i> em <a>
elementoAncora.appendChild(elementoIcone);

//Adiciona o <a> em <li> 
novoItemNaLista.appendChild(elementoAncora);

//Como capturar o <ul> com querySelector 
//Let elementoUele = document.querySelector('ul.collection')
//elementoUele.appendChild(novoItemNaLista)

//Como capturar o <ul> pela classe
let elentoUele = document.getElementsByClassName('collection-item')
elementoUele[0].appendChild(novoItemNaLista);
