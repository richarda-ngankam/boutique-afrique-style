let nombreArticles = 0;

const compteur = document.getElementById("compteur-panier");
const boutons = document.querySelectorAll(".btn-panier");

boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    nombreArticles++;
    compteur.textContent = nombreArticles;
  });
});