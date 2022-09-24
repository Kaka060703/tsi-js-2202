let amigos = ['Ester', 'julia' , 'Ana', 'Bia','Joana'];
console.log(amigos.length);
//looping com o vetor
for(let i=0;i<amigos.length;i++){
      console.log(`amiga ${amigos[i]}`);
}
//Foreach For = = para each = cada
amigos.forEach(function(valor,indice){
    console.log(`${indice}: ${valor}`);
});
amigos.map(function(valor,indice){
        console.log(`${indice}: ${valor}`);
});