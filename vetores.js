let amigos = ['Bono', 'Paulo', 'Karina', 'Brenda'];

console.log(amigos.length);

//Looping com o vetor
for (let i = 0; i < amigos.length; i++){
    //Template string (interpolação)
    console.log(`Amigo: ${amigos[i]}`); // <- Template
}

//Foreach For = para each - cada
amigos.forEach(function( valor, indice){
    console.log(`${indice}: ${valor}`);
})

amigos.map(function(valor, indice){
    console.log(`${indice}: ${valor}`);
});
