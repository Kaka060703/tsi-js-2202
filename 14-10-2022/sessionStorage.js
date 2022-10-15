//como trabalhar com session storage

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){

    evento.preventDefault();
    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText = valor;
    document.getElementById('entrada').value = '';

    //após obtermos o dado do usuario vamos guarda-lo no session storege
    sessionStorage.setItem('dadoDoUsuario', valor);

}

//para recuperar o dado de local storage usamos o sessionStorege.getItem()
document.querySelector('#mostrar').innerText = sessionStorage.getItem('dadoDoUsuario');

//para apagar no local storage
//removeItem()
//sessionStorage.removeItem('dadoDoUduario);



let vetor = ['pera', 'banana', 'manga'];
//armazenar esse vetor no sessionStorage

//para guardar algo que não seja uma string no localStorage ou sessinStrage, temos que converter para string. com metodo JSON.stringfy() transformamos vetores e objetos em string


sessionStorage.setItem('frutas', JSON.stringify (vetor));

let recupDado = JSON.parse(sessionStorage.getItem('frutas'));

//Alteraçoes no vetor recuperado do ssessionStorage
recupDado[3] = 'morango';
recupDado[1] = 'maracuja';
console.log(recupDado);


//transforma o vetor em tring para poder gravar em sessionStorage 
let strRecupDados = JSON.stringify(recupDado);


//console.log(strRecupDados);

//atualixa o item frutas no sessionStorage
sessionStorage.setItem('frutas', strRecupDados);
