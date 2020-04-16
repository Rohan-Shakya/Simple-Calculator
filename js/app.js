var p = document.querySelector('p');
var operator = document.querySelectorAll('#operator');
var number = document.querySelectorAll('#number');
var result = document.querySelector('#result');
var clear = document.getElementById('clear');

// Displaying numbers
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(e){
        var btn = e.target.getAttribute("data-nums");
        p.innerHTML += btn;
    })
}
// Displaying operators
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(e){
        var btn = e.target.getAttribute("data-nums");
        p.innerHTML += btn;
    })
}

// displaying result
result.addEventListener('click', function(){
    if(p.innerHTML === ''){
        alert('Input is empty');
    }
    else{
        let value = eval(p.innerHTML);
        p.innerHTML = value;
    }
})

// Clearing the screen
clear.addEventListener('click', function(){
    p.innerHTML = '';
})






