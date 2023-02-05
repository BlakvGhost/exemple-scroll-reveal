// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use strict"

    // Définir la fonction detectAndAnimate pour basculer la classe des éléments
    const detectAndAnimate = () => {
        // Sélectionner tous les éléments avec la classe 'animate-on-scroll'
        const elements = document.querySelectorAll('.animate-on-scroll');
        // Boucle sur tous les éléments sélectionnés
        elements.forEach(element => {
            // Vérifier si l'élément est visible dans la fenêtre du navigateur
            const isVisible = isElementInViewport(element);
            // Ajouter ou supprimer la classe 'is-visible' en fonction de la visibilité de l'élément
            element.classList.toggle('is-visible', isVisible);
        });
    };

    // Définir la fonction isElementInViewport pour vérifier la visibilité de l'élément dans la fenêtre du navigateur
    const isElementInViewport = el => {
        // Récupérer les dimensions de l'élément
        const rect = el.getBoundingClientRect();
        // Récupérer la hauteur de la fenêtre du navigateur
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        // Récupérer la largeur de la fenêtre du navigateur
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        // Retourner vrai si l'élément est entièrement visible dans la fenêtre du navigateur, sinon retourner faux
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= viewportHeight &&
            rect.right <= viewportWidth
        );
    };

    // Écouter l'événement de défilement de la fenêtre du navigateur et appeler la fonction detectAndAnimate
    window.addEventListener('scroll', detectAndAnimate);
    // Appeler la fonction detectAndAnimate une fois au démarrage pour mettre à jour l'état des éléments
    detectAndAnimate();

})()
