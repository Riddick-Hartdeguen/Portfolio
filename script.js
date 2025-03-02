document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const section = link.textContent.trim();
            const title = document.getElementById('titreh2');
            const image = document.getElementById('monImage');

            // Ajouter la classe fade-out au titre
            title.classList.add('fade-out');

            // Attendre la fin de l'animation fade-out avant de changer le texte et d'ajouter fade-in
            title.addEventListener('animationend', function handleTitleAnimationEnd() {
                title.textContent = section;

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

            // Ajouter la classe fade-out à l'image
            image.classList.add('fade-out');

            // Attendre la fin de l'animation fade-out avant de changer l'image et d'ajouter fade-in
            image.addEventListener('animationend', function handleImageAnimationEnd() {
                if (section === 'Présentation') {
                    image.src = 'images/liberté.jpg';
                } else {
                    image.src = '/images/villedenuit1.jpg'; // Remettre l'image par défaut pour les autres sections
                }

                // Retirer la classe fade-out et ajouter la classe fade-in
                image.classList.remove('fade-out');
                image.classList.add('fade-in');

                // Retirer la classe fade-in après l'animation
                image.addEventListener('animationend', function removeImageFadeIn() {
                    image.classList.remove('fade-in');
                    image.removeEventListener('animationend', removeImageFadeIn);
                });

                image.removeEventListener('animationend', handleImageAnimationEnd);
            });
        });
    });
});