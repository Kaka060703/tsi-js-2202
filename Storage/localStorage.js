//localStorage.setItem('nome', 'Camila');
//localStorage.setItem('sobrenome', 'Silva');

//COMO TRABALHAR COM LOCAL STORAGE

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar (evento){

        evento.preventDefault();

        let entrada = document.getElementById('entrada');
        let mostrar = document.getElementById('mostrar');
        let valor = entrada.value;
        mostrar.innerText = valor;
        entrada.value = '';

        /*após obtermos o dado do usuario vamos guarda lá
        no local storage */

        localStorage.setItem('dadosDoUsuario', valor);

}

/*Para recuperar o dado do local storage usamos o 
localStorage.getItem();*/

document.querySelector('#mostar').innerText = 
    localStorage.getItem('dadoDoUsuario');

//E para apagar no local Storage :: removeItem();

//localStorage.removeItem('dadoDoUsuario');

