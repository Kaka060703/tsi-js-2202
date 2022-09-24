//estrutura de repetição for 
for(let i = 1; i < 11; i ++){
    document.write("linha "+ i + "<br>");
    console.log('numero da linha' + i);
}
//estrutura de repetição while
i=0;
while(i<10){
    
    console.log('numero da linha ' + i );
    i++;
}
//estrutura de repetição do while 
i=0;
do{
    console.log('numero da linha com do'+ i);
    i++;
}while(i < 10);
///////////////
//condicionais 
// se a >b escreva a maior que b
//se não a não é menor que b 
 let a=10;
 let b=5;
 if(a > b){
    console.log(a + ' é maior que ' + b);
 }
 else if(a == b){
    console.log('são iguais');
 }
 
 
 else {
    console.log(a + ' é menor que' + b);
 }
 let n=2;
 switch(n){
    case 0:
        console.log('domingo');
        break;
        
    case 1:
        console.log('segunda');
        break;
    case 2:
        console.log('terça');
        break;
    case 3:
        console.log('quarta');
        break;
    case 4:
        console.log('quinta');
        break;
    case 5:
        console;log('sexta');
        break;
    case 6:
        console.log('sabado');
        break;
    
    default:
        console.log('default');
 }
 //operador ternario
 let x = 4;
 let y = 2;
 let resultado = x > y ? 'x maior' : 'não é maior ';
 console.log(resultado);
//let genero= prompt('entre M ou F ');
genero ='F';
let saida = genero == 'M'? ' masculino'  : 'feminino';
console.log(saida);
//Coalescente
let coisa;
let variavel= coisa ?? 'Não há';
console.log(variavel);