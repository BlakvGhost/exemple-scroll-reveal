# Animation d'apparition au défilement avec JavaScript et CSS

Ce projet montre comment créer une animation d'apparition pour un élément au défilement en utilisant JavaScript et CSS par deux methodes, soit par l'écoute à l'event `scroll` ou soit par `l'objet IntersectionObserver`.

## Prérequis

- Connaissance de base de HTML, CSS et JavaScript
- Connaissance des sélecteurs CSS et des classes en JavaScript

## Fichiers

- `index.html` : Contient le code HTML pour afficher les éléments à animer.
- `style.css` : Contient le code CSS pour définir l'animation d'apparition.
- `app.js` : Contient le code JavaScript pour implémenter l'observateur d'intersection et déclencher l'animation d'apparition utilisant la methode `scroll`.
- `app.second.js` : Contient le code JavaScript pour implémenter l'observateur d'intersection et déclencher l'animation d'apparition utilisant la methode `IntersectionObserver`.

## Comment utiliser

- Veuillez cloner le repository Github sur votre ordinateur local
- Ouvrez le fichier `index.html` dans votre navigateur.
- Les éléments avec la classe `"animate-on-scroll"` seront animés lorsqu'ils seront visibles dans la fenêtre du navigateur.
- Modifier dans le fichier `index.html` les balises `script` avec le lien du bon fichier js pour changer de methode(methode de `scroll` par défaut).

## Personnalisation

Vous pouvez personnaliser l'animation d'apparition en modifiant le code CSS dans le fichier style.css.

Vous pouvez également ajouter ou supprimer des éléments à animer en modifiant le code HTML dans le fichier `index.html`. Assurez-vous de les ajouter avec la classe `"animate-on-scroll`" pour qu'ils soient animés.

## Licence

Ce projet est sous licence MIT.
