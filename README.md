# Portfolio personnel — Jonathan Fradet

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## Présentation

Ce projet est mon portfolio personnel. Je l'ai développé dans le cadre de ma reconversion vers le développement web, afin de présenter mon parcours, les compétences que j'acquiers et les projets que je réalise pendant ma formation.

Je recherche actuellement une alternance en Conception et Développement d'Applications (CDA).

J'ai volontairement construit ce portfolio avec les technologies fondamentales du web. Mon objectif est de consolider mes bases en HTML, CSS et JavaScript avant de poursuivre mon apprentissage avec d'autres technologies.

## Objectifs du portfolio

- Présenter simplement mon parcours et mon projet professionnel.
- Montrer les compétences que je développe au fil de ma formation.
- Regrouper mes projets dans une interface claire et accessible sur différentes tailles d'écran.
- Mettre en pratique la manipulation du DOM et les bases du responsive design.
- Faire évoluer le site en même temps que mes connaissances.

## Fonctionnalités principales

- Navigation entre les sections Accueil, Compétences et Projets sans rechargement de la page.
- Mise à jour dynamique du titre, du texte et de l'image avec JavaScript.
- Transitions en fondu lors des changements de contenu.
- Préchargement des images utilisées par les différentes sections.
- Affichage conditionnel des cartes de projets.
- Menu burger sur tablette et téléphone.
- Mise en page adaptée aux écrans d'ordinateur, aux tablettes et aux téléphones.
- Liens vers mes profils et moyens de contact.

## Technologies utilisées

- **HTML5** pour la structure et le contenu de la page.
- **CSS3** pour la mise en page, les animations et le responsive design.
- **JavaScript** pour la manipulation du DOM et les interactions.
- **Git** pour suivre les modifications du projet.
- **GitHub** pour héberger et partager le dépôt.

## Points techniques

### Manipulation du DOM

Le contenu des sections est regroupé dans des objets JavaScript. La fonction principale récupère les informations de l'objet sélectionné, puis met à jour les éléments HTML correspondants.

### Animations

Les transitions utilisent des animations CSS `fadeIn` et `fadeOut`. JavaScript ajoute et retire les classes nécessaires au bon moment pour synchroniser la disparition de l'ancien contenu et l'apparition du nouveau.

### Gestion des images

Les images des différentes sections sont préchargées avec JavaScript. Cela limite les changements d'image trop visibles pendant la navigation.

### Responsive design

Le site possède des mises en page adaptées à l'ordinateur, à la tablette et au téléphone. Sur les écrans plus étroits, la navigation latérale est remplacée par un menu burger et les cartes de projets sont réorganisées pour éviter les débordements.

### Organisation du projet

Le HTML, le CSS et le JavaScript sont séparés dans des fichiers dédiés afin de garder une structure simple et facile à relire :

```text
Portfolio/
├── index.html
├── script.js
├── assets/
│   └── css/
│       └── style.css
└── images/
```

## Compétences développées

Ce projet m'a permis de travailler notamment sur :

- la création d'une structure HTML claire ;
- la mise en page avec Flexbox et Grid ;
- les media queries et l'adaptation aux différentes tailles d'écran ;
- les animations et transitions CSS ;
- la sélection et la modification d'éléments du DOM ;
- la gestion des événements en JavaScript ;
- l'organisation du code en fonctions simples ;
- l'utilisation de Git et GitHub pour suivre l'évolution du projet.

## Améliorations prévues

Ce portfolio est amené à évoluer avec ma formation. Je souhaite y ajouter progressivement de nouveaux projets, améliorer certains détails de l'interface et intégrer les nouvelles technologies que j'apprendrai lorsqu'elles seront réellement utilisées dans le projet.

## Installation

Le projet ne nécessite aucune dépendance.

### Ouvrir directement le site

1. Télécharger ou cloner le dépôt :

   ```bash
   git clone https://github.com/Riddick-Hartdeguen/Portfolio.git
   ```

2. Ouvrir le dossier du projet.
3. Ouvrir le fichier `index.html` dans un navigateur.

### Utiliser Live Server

Avec Visual Studio Code, il est également possible d'ouvrir le projet avec l'extension **Live Server**, puis de cliquer sur **Go Live** pour lancer le site en local.
