document.addEventListener('DOMContentLoaded', function () {
    // ==============================
    // 1. Images a precharger
    // ==============================
    // Cette liste sert uniquement a charger les images importantes avant les clics.
    // Comme ca, le navigateur les connait deja quand on change de section.
    const imagesAPrecharger = [
        'images/villedenuit1.jpg',
        'images/competences-v2.png',
        'images/liberté.jpg'
    ];

    imagesAPrecharger.forEach(function (sourceImage) {
        // new Image() cree une image en JavaScript sans l'afficher dans la page.
        // En lui donnant un src, on force simplement le navigateur a charger le fichier.
        const imagePrechargee = new Image();
        imagePrechargee.src = sourceImage;
    });

    // ==============================
    // 2. Elements HTML utilises par le script
    // ==============================
    // On les recupere une seule fois au chargement de la page.
    // Comme ils existent deja dans le HTML, il est inutile de les chercher a chaque clic.
    const liensNavigation = document.querySelectorAll('nav ul li a');
    const titre = document.getElementById('titreh2');
    const paragraphe = document.getElementById('textep');
    const image = document.getElementById('monImage');
    const liensProjets = document.getElementById('projetsLiens');

    // ==============================
    // 3. Textes et images des sections
    // ==============================
    // Le texte d'accueil vient directement du HTML.
    // Ca evite d'avoir le meme texte ecrit deux fois dans le projet.
    const texteAccueil = paragraphe.innerHTML;
    const imageAccueil = 'images/villedenuit1.jpg';
    const descriptionAccueil = image.alt;

    // Les textes plus longs sont sortis du clic pour alleger la lecture.
    // Au moment du clic, on choisira simplement lequel afficher.
    const texteCompetences = `Mes compétences représentent les outils que j'utilise aujourd'hui et ceux que je suis
        en train d'apprivoiser pour construire des projets plus complets.
        <br />
        Je consolide les bases avec HTML, CSS et JavaScript, puis j'avance vers TypeScript, React,
        Node.js, Express, MongoDB, Git, GitHub et les outils liés à l'IA comme Codex.`;

    const texteProjets = `Mes projets sont la partie concrète de mon apprentissage : c'est ici que les idées
        deviennent des interfaces, des essais, puis de vraies réalisations.
        <br />
        Chaque projet me permet de pratiquer, de corriger mes erreurs et de montrer mon évolution en tant
        que développeur web, étape par étape.`;

    // ==============================
    // 4. Clics sur la navigation
    // ==============================
    liensNavigation.forEach(function (lien) {
        lien.addEventListener('click', function (event) {
            event.preventDefault();

            const section = lien.textContent.trim();

            // Dans la nav, "Accueil" est plus naturel.
            // A l'ecran, on garde "Bienvenue" comme titre de la premiere section.
            let texteTitre = section;

            if (section === 'Accueil') {
                texteTitre = 'Bienvenue';
            }

            // Par defaut, on prepare le contenu de l'accueil.
            // Si la section cliquee est differente, les if / else juste en dessous remplacent ces valeurs.
            let texteParagraphe = texteAccueil;
            let sourceImage = imageAccueil;
            let descriptionImage = descriptionAccueil;

            // Chaque section garde un contenu simple : un titre, un court texte et une image.
            // Cela permet de comprendre facilement ce qui change au clic dans la navigation.
            if (section === 'Compétences') {
                texteParagraphe = texteCompetences;
                sourceImage = 'images/competences-v2.png';
                descriptionImage = 'Logos des compétences web, full stack et IA';
            } else if (section === 'Projets') {
                texteParagraphe = texteProjets;
                sourceImage = 'images/liberté.jpg';
                descriptionImage = 'Image de présentation des projets';
            }

            // Le bloc de liens projets n'a de sens que dans la section Projets.
            // Sur Accueil et Competences, on le cache pour garder une page plus simple.
            if (section === 'Projets') {
                liensProjets.classList.add('visible');
            } else {
                liensProjets.classList.remove('visible');
            }

            // Ajouter la classe fade-out au titre
            titre.classList.add('fade-out');

            // Attendre la fin de l'animation fade-out avant de changer le texte et d'ajouter fade-in
            titre.addEventListener('animationend', function handleTitleAnimationEnd() {
                titre.textContent = texteTitre;
                paragraphe.innerHTML = texteParagraphe;

                // Retirer la classe fade-out et ajouter la classe fade-in
                titre.classList.remove('fade-out');
                titre.classList.add('fade-in');

                // Retirer la classe fade-in après l'animation
                titre.addEventListener('animationend', function removeTitleFadeIn() {
                    titre.classList.remove('fade-in');
                    titre.removeEventListener('animationend', removeTitleFadeIn);
                });

                titre.removeEventListener('animationend', handleTitleAnimationEnd);
            });

            // On retire d'abord les anciennes classes pour repartir d'une animation propre.
            image.classList.remove('fade-in', 'fade-out');
            image.classList.add('fade-out');

            setTimeout(function () {
                // Cette image temporaire sert a verifier que le nouveau fichier est charge
                // avant de l'afficher dans la vraie balise <img>.
                const nouvelleImage = new Image();

                nouvelleImage.addEventListener('load', function () {
                    image.src = sourceImage;
                    image.alt = descriptionImage;

                    image.classList.remove('fade-out');
                    image.classList.add('fade-in');

                    setTimeout(function () {
                        image.classList.remove('fade-in');
                    }, 300);
                });

                nouvelleImage.src = sourceImage;
            }, 300);
        });
    });
});
