let e;
e = document.getElementsByClassName('collection-item');
array = Array.from(e);

//COM getElementsByClassName::

array.forEach(function(val){
    val.style.color = 'green';

    //val.innerText = 'outra tarefa';
    
    console.log(val.innerText);

});

//COM querySelectorAll ::

e = document.querySelectorAll('li');

e.forEach(function(val){

    console.log(val.innerText);

});

//Somente impares (par=odd, impar=even)
e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.background = '#dedede';

});

function fazAlgumaCoisa(val){

    console.log(val);

}