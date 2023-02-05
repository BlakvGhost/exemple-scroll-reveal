// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use strict"

    // Sélectionne tous les éléments avec la classe "animate-on-scroll"
    const elements = document.querySelectorAll(".animate-on-scroll");

    // Options pour l'observateur d'intersection
    const options = {
        threshold: 0.25
    };

    // Instanciation de l'observateur d'intersection
    const observer = new IntersectionObserver(function (entries, observer) {
        // Boucle sur chaque entrée pour traiter les intersections
        entries.forEach(entry => {
            // Si l'entrée est en train d'intersecter avec la zone visible
            if (entry.isIntersecting) {
                // Ajouter la classe "is-visible" pour déclencher l'animation
                entry.target.classList.add("is-visible");
                // Cesser d'observer cet élément
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observer chaque élément
    elements.forEach(element => {
        observer.observe(element);
    });

})();
