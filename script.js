function changeContent(event) {
    event.preventDefault();
    var textElement = document.getElementById("textep");
    textElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Suspendisse in mauris id ipsum imperdiet cursus. Nunc a nulla euismod nisl congue cursus. Etiam venenatis nunc elit, et sollicitudin magna facilisis eget. Maecenas tortor sapien, laoreet id accumsan sed, egestas sed ipsum. Integer id turpis eget metus fringilla gravida nec eget erat. Pellentesque in blandit ipsum. Vivamus mi ipsum, eleifend sit amet faucibus in, commodo et velit. Cras ut luctus dolor, suscipit auctor turpis.";
    textElement.classList.add("fadeIn");

    var titreElement = document.getElementById("titreh2");
    titreElement.textContent = "Présentation";
    titreElement.classList.add("fadeIn");


    var imageElement = document.getElementById("monImage");
    imageElement.src = "images/liberté.jpg";
    imageElement.classList.add("fadeIn");
}

function changeindex(event) {
    event.preventDefault();
    var textElement = document.getElementById("textep");
    textElement.innerHTML = "C'est avec plaisir que je vous accueil dans mon royaume numérique ! Ici, vous êtes invités à explorer un monde où le code se transforment en site web élégants et en applications mobiles fonctionnelles.<br />Mon portfolio est un laboratoire d'idée numériques,où je fusionne habilement la technologie et la créativité pour donner naissance à des projets uniques.Laissez-vous immerger dans cet univers, où l'innovation est la clé de voûte de chaque ligne de code que je rédige.";
    textElement.classList.add("fadeIn");

    var titreElement = document.getElementById("titreh2");
    titreElement.textContent = "Bienvenue";
    textElement.classList.add("fadeIn");

    var imageElement = document.getElementById("monImage");
    imageElement.src = "images/villedenuit1.jpg";
    imageElement.classList.add("fadeIn");
}


