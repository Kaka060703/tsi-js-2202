let peso = prompt('qual seu peso?');
let altura = prompt('qual é sua altura?');
let resultado = calcularImc(peso,altura);
alert(resultado);
function calcularImc(peso,altura){
       
    let imc = peso/(altura*altura);
    let retorno = '';
    if (imc > 25) {
            retorno ='acima do peso';
    }else if(imc>=18 && imc<= 25){
        retorno = 'peso ideal'
    }else{
        retorno = 'abaixo do peso;'
    }
    return retorno;
}