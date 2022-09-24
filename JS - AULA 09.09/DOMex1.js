//console.log(window);
//como utilizar atributos de um objetop
//alert(`sua resolução é:${window.innerHeigh} x ${window.innertWidth}`);
//meuTiltulo.innerText = 'Mudou';
//meuTitulo.style.backgroud = '#dedede';
let meuTitulo = document.getElementById('titulo');
let nav = window.navigator.userAgent; 
if(confirm('deixe uma mensagem!')){
    let msg = prompt('mensagem');
    meuTitulo.innerText = msg + 'navegador do:'+ window.navigator.vendor + ')';
    meuTitulo.style.background = 'green';
}else{
    meuTitulo.innerText = 'sem mensagem ';
    meuTitulo.style.background = '#dedede';
}
      
console.log(window.navigator);