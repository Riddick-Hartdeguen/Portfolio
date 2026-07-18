
// // Déclaration des objets

const accueil = {
  titre: "Bienvenue sur mon portfolio",
  texte: `Après plus de vingt ans de carrière dans l'armée, dont douze passés au sein des unités spéciales, j'ai choisi de me reconvertir dans le développement web.<br>
						Au cours de mon parcours militaire, j'ai appris à évoluer dans des environnements exigeants où la rigueur, l'autonomie, l'esprit d'équipe et l'adaptation sont essentiels.<br> Aujourd'hui, je mets ces qualités au service de mon nouveau projet professionnel.
						Je me forme actuellement au développement web full stack et prépare une alternance en Conception et Développement d'Applications (CDA).<br>
						Ce portfolio retrace ma progression à travers les projets que je réalise. Au-delà du résultat, j'accorde une importance particulière à la compréhension du code, à la qualité des réalisations et à une progression constante.`,
  image: 'images/villedenuit1.jpg',
  afficherProjets: false
};

const competences = {
  titre: "Mes compétences",
  texte: `Mes compétences représentent les outils que j'utilise aujourd'hui et ceux que je suis
            en train d'apprivoiser pour construire des projets plus complets.
            <br />
            Je consolide les bases avec HTML, CSS et JavaScript, puis j'avance vers TypeScript, React,
            Node.js, Express, MongoDB, Git, GitHub et les outils liés à l'IA comme Codex.`,
  image: 'images/competences-v2.png',
  afficherProjets: false
};

const projets = {
  titre: "Mes projets",
  texte: `Mes projets sont la partie concrète de mon apprentissage : c'est ici que les idées
            deviennent des interfaces, des essais, puis de vraies réalisations.
            <br />
            Chaque projet me permet de pratiquer, de corriger mes erreurs et de montrer mon évolution en tant
            que développeur web, étape par étape.`,
  image: 'images/liberté.jpg',
  afficherProjets: true
};

// Fonction qui change le contenu

function changerContenu(contenu) {

  const titre = document.getElementById("titreh2");
  const paragraphe = document.getElementById("textep");
  const image = document.getElementById("monImage");
  const blocsProjets = document.getElementById("projetsLiens");

  titre.textContent = contenu.titre;
  paragraphe.innerHTML = contenu.texte;
  image.src = contenu.image;
  image.alt = `Illustration de ${contenu.titre}`;
  
  if (contenu.afficherProjets) {
  blocsProjets.classList.add("visible");
  } else {
  blocsProjets.classList.remove("visible");
  }
}

// appel de la fonction pour afficher l'accueil au chargement de la page

changerContenu(accueil);

// Menu burger

const boutonBurger = document.getElementById("menuBurger");
const navigationMobile = document.getElementById("menuNavigation");

// Ajoute ou retire la classe qui affiche le menu mobile.
boutonBurger.addEventListener("click", () => {
  navigationMobile.classList.toggle("ouvert");
});

navigationMobile.addEventListener("click", () => {
  navigationMobile.classList.remove("ouvert");
});
