document.addEventListener('DOMContentLoaded', function () {
    // Cette liste sert uniquement a precharger les images importantes du site.
    // Le navigateur les met en memoire des le debut, ce qui evite un petit saut
    // au premier clic sur "Accueil", "Competences" ou "Projets".
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

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const section = link.textContent.trim();
            // Dans la nav, "Accueil" est plus naturel.
            // A l'ecran, on garde "Bienvenue" comme titre de la premiere section.
            const titleText = section === 'Accueil' ? 'Bienvenue' : section;
            const title = document.getElementById('titreh2');
            const paragraph = document.getElementById('textep');
            const image = document.getElementById('monImage');
            let paragraphText = `C'est avec plaisir que je vous accueille dans mon royaume numérique ! Ici, vous êtes
                invités à explorer un monde où le code se transforme en sites web élégants et en applications
                mobiles fonctionnelles.
                <br />
                Mon portfolio est un laboratoire d'idées numériques, où je fusionne la technologie et la
                créativité pour donner naissance à des projets uniques. Laissez-vous immerger dans cet univers,
                où l'innovation est la clé de voûte de chaque ligne de code que je rédige.`;
            let imageSource = 'images/villedenuit1.jpg';
            let imageDescription = 'Ville de nuit';

            // Chaque section garde un contenu simple : un titre, un court texte et une image.
            // Cela permet de comprendre facilement ce qui change au clic dans la navigation.
            if (section === 'Compétences') {
                paragraphText = `Mes compétences représentent les outils que j'utilise aujourd'hui et ceux que je suis
                    en train d'apprivoiser pour construire des projets plus complets.
                    <br />
                    Je consolide les bases avec HTML, CSS et JavaScript, puis j'avance vers TypeScript, React,
                    Node.js, Express, MongoDB, Git, GitHub et les outils liés à l'IA comme Codex.`;
                imageSource = 'images/competences-v2.png';
                imageDescription = 'Logos des compétences web, full stack et IA';
            } else if (section === 'Projets') {
                paragraphText = `Mes projets sont la partie concrète de mon apprentissage : c'est ici que les idées
                    deviennent des interfaces, des essais, puis de vraies réalisations.
                    <br />
                    Chaque projet me permet de pratiquer, de corriger mes erreurs et de montrer mon évolution en tant
                    que développeur web, étape par étape.`;
                imageSource = 'images/liberté.jpg';
                imageDescription = 'Image de présentation des projets';
            }

            // Ajouter la classe fade-out au titre
            title.classList.add('fade-out');

            // Attendre la fin de l'animation fade-out avant de changer le texte et d'ajouter fade-in
            title.addEventListener('animationend', function handleTitleAnimationEnd() {
                title.textContent = titleText;
                paragraph.innerHTML = paragraphText;

                // Retirer la classe fade-out et ajouter la classe fade-in
                title.classList.remove('fade-out');
                title.classList.add('fade-in');

                // Retirer la classe fade-in après l'animation
                title.addEventListener('animationend', function removeTitleFadeIn() {
                    title.classList.remove('fade-in');
                    title.removeEventListener('animationend', removeTitleFadeIn);
                });

                title.removeEventListener('animationend', handleTitleAnimationEnd);
            });

            // On retire d'abord les anciennes classes pour repartir d'une animation propre.
            image.classList.remove('fade-in', 'fade-out');
            image.classList.add('fade-out');

            setTimeout(function () {
                // Cette image temporaire sert a verifier que le nouveau fichier est charge
                // avant de l'afficher dans la vraie balise <img>.
                const nouvelleImage = new Image();

                nouvelleImage.addEventListener('load', function () {
                    image.src = imageSource;
                    image.alt = imageDescription;

                    image.classList.remove('fade-out');
                    image.classList.add('fade-in');

                    setTimeout(function () {
                        image.classList.remove('fade-in');
                    }, 300);
                });

                nouvelleImage.src = imageSource;
            }, 300);
        });
    });
});
