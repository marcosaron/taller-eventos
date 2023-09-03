


document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('.Button');

    const Button = document.querySelector('#button');
    
   
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert("¡Hola!")
    });

    div.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
})
