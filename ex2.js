let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault();

        let serv = document.getElementById('servico');
        let prazo = document.getElementById('prazo');
        let res = document.getElementById('resultado');

        /*recuperar os dados da matriz*/
        let preco = calculaPreco( serv.value, prazo.value);

        res.innerText = `O preço é ${preco}`;

        //ver dados do evento (click) no console 
        console.log(evento);

        //obter os valores de serviço e praço
});


function calculaPreco (servico, prazo){
    
    let tabela = [  ['$$$','$$','$'],
                    ['$$$$', '$$$', '$$'],
                    ['Não faz', 'Não faz', '$$$']];
}


/* btnCalcular.addEvenListener('click', executa()); 

function executa(){
        alert('Clicou');
}
*/
