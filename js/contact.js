const form = document.getElementById("formContact");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener('submit', function(event){
    if(email.value.trim() === ''){
        alert("Champ Email vide.");
        event.preventDefault();
    }
    if(nom.value.trim() === ''){
        alert("Champ nom vide.");
        event.preventDefault();
    }
    if(message.value.trim() === ''){
        alert("Champ message vide.");
        event.preventDefault();
    }
});