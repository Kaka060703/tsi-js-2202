/* matriz com serviço 1,2 e 3 
quanto empo dura e quanto custa cada valor
solicitar qual serviço e wm quanto tempo o cliente deseja realisar
*/
let tabela = [['$$$','$$','$'],['$$$$', '$$$', '$$'],['$$$$$','$$$$', '$$$']];
let servico = prompt('Esccomo serviço entre (0 - Troca Troca de oleo ,1- balanceamento,2-cambagem)');
let prazo = prompt("Entre com o prazo \n0-um dia,\n1-fois dias, \n2- tres dias");
if( validaEntrada(servico) && validaEntrada(prazo) ){
        alert("o serviço ficara em: " + tabela[servico][prazo]);
}else{
        alert("ERRORR: Verifique os valores inseridos e tente novamente");
}
function validaEntrada(dadoUsuario){
        return dadoUsuario >= 0 && dadoUsuario <=2 ?true : false; 
}
