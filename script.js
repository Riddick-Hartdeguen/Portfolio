
// // Déclaration des objets

const accueil = {
  titre: "Bienvenue sur mon portfolio",
  texte: `Après plus de vingt ans de carrière dans l'armée, dont douze passés au sein des unités spéciales, j'ai choisi de me reconvertir dans le développement web.<br>
						Au cours de mon parcours militaire, j'ai appris à évoluer dans des environnements exigeants où la rigueur, l'autonomie, l'esprit d'équipe et l'adaptation sont essentiels.<br> Aujourd'hui, je mets ces qualités au service de mon nouveau projet professionnel.
						Je me forme actuellement au développement web full stack et prépare une alternance en Conception et Développement d'Applications (CDA).<br>
						Ce portfolio retrace ma progression à travers les projets que je réalise. Au-delà du résultat, j'accorde une importance particulière à la compréhension du code, à la qualité des réalisations et à une progression constante.`,
  // WebP réduit le poids de l'illustration tout en gardant une bonne qualité visuelle.
  image: 'images/villedenuit1.webp',
  afficherProjets: false
};

const competences = {
  titre: "Mes compétences",
  texte: `Mes compétences représentent les outils que j'utilise aujourd'hui et ceux que je suis
            en train d'apprivoiser pour construire des projets plus complets.
            <br />
            Je consolide les bases avec HTML, CSS et JavaScript, puis j'avance vers TypeScript, React,
            Node.js, Express, MongoDB, Git, GitHub et les outils liés à l'IA comme Codex.`,
  image: 'images/competences-v2.webp',
  afficherProjets: false
};

const projets = {
  titre: "Mes projets",
  texte: `Mes projets sont la partie concrète de mon apprentissage : c'est ici que les idées
            deviennent des interfaces, des essais, puis de vraies réalisations.
            <br />
            Chaque projet me permet de pratiquer, de corriger mes erreurs et de montrer mon évolution en tant
            que développeur web, étape par étape.`,
  image: 'images/liberté.webp',
  afficherProjets: true
};
const sourcesImages = [ accueil.image, competences.image, projets.image];

function prechargerImages() {

  sourcesImages.forEach((sourceImage) => {
    const imagePrechargee = new Image();
    imagePrechargee.src = sourceImage;
  });

}

// Fonction qui change le contenu

function changerContenu(contenu, premierAffichage) {

  const titre = document.getElementById("titreh2");
  const paragraphe = document.getElementById("textep");
  const image = document.getElementById("monImage");
  const blocsProjets = document.getElementById("projetsLiens");
  const elementsAnimes = [titre, paragraphe, image];

  function mettreAJourContenu() {
    titre.innerHTML = contenu.titre;
    paragraphe.innerHTML = contenu.texte;
    image.src = contenu.image;
    image.alt = `Illustration de ${contenu.titre}`;
  }

  if (premierAffichage) {

  mettreAJourContenu();
  
  elementsAnimes.forEach((element) => {
      element.classList.add("fade-in");
    });

  } else {

  elementsAnimes.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });

  // Attente la fin de l'animation avant de changer le contenu

  if (!contenu.afficherProjets) {
  blocsProjets.classList.add("cache-projets");

  setTimeout(() => {
    blocsProjets.classList.remove("visible");
    blocsProjets.classList.remove("cache-projets");
  }, 300);
}

  setTimeout(() => {
    mettreAJourContenu();

  // Le bloc Projets commence son fade-in en même temps que l'image.
  if (contenu.afficherProjets) {
    blocsProjets.classList.add("visible");
  }

  elementsAnimes.forEach((element) => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
  }, 300);
 }

}

// appel des fonctions pour charger les images et afficher le contenu initial

prechargerImages();
changerContenu(accueil, true);

// Menu burger

const boutonBurger = document.getElementById("menuBurger");
const navigationMobile = document.getElementById("menuNavigation");

// Ajoute ou retire la classe qui affiche le menu mobile.
boutonBurger.addEventListener("click", () => {
  navigationMobile.classList.toggle("ouvert");
});

navigationMobile.addEventListener("click", () => {
  setTimeout(() => {
    navigationMobile.classList.remove("ouvert");
  }, 300);
});
