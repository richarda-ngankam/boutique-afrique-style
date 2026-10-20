# Boutique Afrique Style

Site vitrine d'une boutique en ligne de vêtements africains, réalisé en équipe avec HTML, CSS et JavaScript.

## Équipe

| Membre | Rôle |
|--------|------|
| Richarda | Mainteneur, page d'accueil, design global |
| Tayouo Yan  | Page catalogue |
| Zuteu henry | Page contact |

## Pages du site

- Accueil (`index.html`)
- Catalogue (`catalogue.html`)
- Contact (`contact.html`)

## Lien du site

(https://richarda-ngankam.github.io/boutique-afrique-style/)


## Retour d'expérience

### Ce qui a bien fonctionné
- Une bonne entente et un vrai esprit d'équipe.
- Une collaboration efficace entre les membres.
- L'apprentissage de nouvelles notions (branches, Pull Requests, revue de code, résolution de conflit, GitHub Pages).

### Problèmes rencontrés
- **Formulaire de contact** : le traitement côté serveur (PHP) n'est pas en place. Quand on envoie le formulaire, un message d'erreur s'affiche. Seule la validation JavaScript fonctionne. GitHub Pages ne peut héberger que des sites statiques, il ne peut donc pas exécuter de PHP.
- **Oublis dans les commits** : lors de certaines PR, des fichiers manquaient parce qu'on faisait `git add index.html` au lieu de `git add .`, et les autres fichiers modifiés n'étaient pas pris en compte.
- **Notions nouvelles** : le merge était compliqué au départ, car c'était un concept nouveau pour nous.
- **Attente des validations** : il fallait patienter qu'un autre membre approuve la PR avant de pouvoir fusionner.

### Ce que nous ferions différemment
- Répartir les rôles et les tâches plus équitablement dès le départ : dans une équipe de 3, un membre cumulait deux rôles (accueil, design et README). La prochaine fois, nous partagerons mieux ces tâches.
- Travailler avec des forks, comme sur un projet open source.
- Lancer `git status` avant chaque commit pour vérifier que tous les fichiers voulus sont bien préparés.