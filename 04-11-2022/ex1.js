document.
    querySelector('button')
        addEventListener('click', recuperaConteudoViaAjax);

function recuperaConteudoViaAjax(){

     //XHR serve pra armazenar objetos, executa ações
    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5050/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){

            //Recupera a string JSON e transforma
            //em objeto JSON
            let dados = JSON.parse(this.responseText);

            //Looping para ler todo o vetor
            dados.forEach(function(valor){

                //verifica a idade da pessoa
                //para mostrar se é maior ou menor
                //de idade

                console.log(valor);
            })

            // document.querySelector('#dadoRecuperado').innerHTML
            //    = this.responseText;
        }


    }

    XHR.send();
}document.
    querySelector('button')
        addEventListener('click', recuperaConteudoViaAjax);

function recuperaConteudoViaAjax(){

     //XHR serve pra armazenar objetos, executa ações
    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5050/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){

            //Recupera a string JSON e transforma
            //em objeto JSON
            let dados = JSON.parse(this.responseText);

            //Looping para ler todo o vetor
            dados.forEach(function(valor){

                //verifica a idade da pessoa
                //para mostrar se é maior ou menor
                //de idade

                console.log(valor);
            })

            // document.querySelector('#dadoRecuperado').innerHTML
            //    = this.responseText;
        }


    }

    XHR.send();
}