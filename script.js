document.addEventListener('DOMContentLoaded', function () {
    // ==================================================
    // 1. ÉLÉMENTS HTML UTILISÉS PAR LE JAVASCRIPT
    // ==================================================

    // Ces constantes relient le JavaScript aux éléments présents dans index.html.
    const liensNavigation = document.querySelectorAll('nav ul li a');
    const sectionPrincipale = document.getElementById('section');
    const titre = document.getElementById('titreh2');
    const paragraphe = document.getElementById('textep');
    const zoneLecture = document.querySelector('.zone-lecture');
    const image = document.getElementById('monImage');
    const liensProjets = document.getElementById('projetsLiens');

    // ==================================================
    // 2. CONTENU DES SECTIONS
    // ==================================================

    const contenuAccueil = {
        titre: 'Bienvenue',
        texte: paragraphe.innerHTML,
        sourceImage: 'images/villedenuit1.jpg',
        descriptionImage: image.alt
    };

    const contenuCompetences = {
        titre: 'Compétences',
        texte: `Mes compétences représentent les outils que j'utilise aujourd'hui et ceux que je suis
            en train d'apprivoiser pour construire des projets plus complets.
            <br />
            Je consolide les bases avec HTML, CSS et JavaScript, puis j'avance vers TypeScript, React,
            Node.js, Express, MongoDB, Git, GitHub et les outils liés à l'IA comme Codex.`,
        sourceImage: 'images/competences-v2.png',
        descriptionImage: 'Logos des compétences web, full stack et IA'
    };

    const contenuProjets = {
        titre: 'Projets',
        texte: `Mes projets sont la partie concrète de mon apprentissage : c'est ici que les idées
            deviennent des interfaces, des essais, puis de vraies réalisations.
            <br />
            Chaque projet me permet de pratiquer, de corriger mes erreurs et de montrer mon évolution en tant
            que développeur web, étape par étape.`,
        sourceImage: 'images/liberté.jpg',
        descriptionImage: 'Image de présentation des projets'
    };

    // Cet objet permet de retrouver un contenu grâce au nom du lien cliqué.
    const contenusParSection = {
        Accueil: contenuAccueil,
        Compétences: contenuCompetences,
        Projets: contenuProjets
    };

    // ==================================================
    // 3. FONCTION : PRÉCHARGER LES IMAGES
    // ==================================================

    // Le navigateur charge les images à l'avance pour les afficher rapidement au clic.
    function prechargerImages() {
        const sourcesImages = [
            contenuAccueil.sourceImage,
            contenuCompetences.sourceImage,
            contenuProjets.sourceImage
        ];

        sourcesImages.forEach(function (sourceImage) {
            const imagePrechargee = new Image();
            imagePrechargee.src = sourceImage;
        });
    }

    // ==================================================
    // 4. FONCTION : AFFICHER OU CACHER LES PROJETS
    // ==================================================

    // La classe "visible" est présente uniquement quand la section Projets est choisie.
    function mettreAJourLiensProjets(nomSection) {
        const afficherProjets = nomSection === 'Projets';
        liensProjets.classList.toggle('visible', afficherProjets);
    }

    // ==================================================
    // 5. FONCTION : ANIMER LE TITRE ET LE TEXTE
    // ==================================================

    // Le titre disparaît, le contenu change, puis le titre réapparaît.
    function animerTitreEtTexte(contenu, estAccueil) {
        titre.classList.add('fade-out');
        paragraphe.classList.add('fade-out');

        titre.addEventListener('animationend', function terminerDisparition() {
            titre.textContent = contenu.titre;
            paragraphe.innerHTML = contenu.texte;
            sectionPrincipale.classList.toggle('accueil', estAccueil);
            zoneLecture.scrollTop = 0;
            titre.classList.remove('fade-out');
            paragraphe.classList.remove('fade-out');
            titre.classList.add('fade-in');
            paragraphe.classList.add('fade-in');

            titre.addEventListener('animationend', function terminerApparition() {
                titre.classList.remove('fade-in');
                paragraphe.classList.remove('fade-in');
            }, { once: true });
        }, { once: true });
    }

    // ==================================================
    // 6. FONCTION : ANIMER LE CHANGEMENT D'IMAGE
    // ==================================================

    // Une image temporaire vérifie que le fichier est chargé avant de l'afficher.
    function animerImage(contenu) {
        image.classList.remove('fade-in', 'fade-out');
        image.classList.add('fade-out');

        setTimeout(function () {
            const nouvelleImage = new Image();

            nouvelleImage.addEventListener('load', function () {
                image.src = contenu.sourceImage;
                image.alt = contenu.descriptionImage;
                image.classList.remove('fade-out');
                image.classList.add('fade-in');

                setTimeout(function () {
                    image.classList.remove('fade-in');
                }, 300);
            });

            nouvelleImage.src = contenu.sourceImage;
        }, 300);
    }

    // ==================================================
    // 7. FONCTION : GÉRER UN CLIC DANS LA NAVIGATION
    // ==================================================

    // Cette fonction coordonne les petites fonctions précédentes après un clic.
    function gererClicNavigation(event) {
        event.preventDefault();

        const lienClique = event.currentTarget;
        const nomSection = lienClique.textContent.trim();
        const contenu = contenusParSection[nomSection];

        // Cette vérification évite une erreur si un lien inconnu est ajouté à la navigation.
        if (!contenu) {
            console.error(`Aucun contenu trouvé pour la section : ${nomSection}`);
            return;
        }

        const estAccueil = nomSection === 'Accueil';

        mettreAJourLiensProjets(nomSection);
        animerTitreEtTexte(contenu, estAccueil);
        animerImage(contenu);
    }

    // ==================================================
    // 8. DÉMARRAGE DU JAVASCRIPT
    // ==================================================

    prechargerImages();

    // Chaque lien de navigation déclenche la même fonction lors d'un clic.
    liensNavigation.forEach(function (lien) {
        lien.addEventListener('click', gererClicNavigation);
    });
});
