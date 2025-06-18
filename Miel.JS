document.addEventListener('DOMContentLoaded', function() {
        // Animation au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Gestion du formulaire de réservation
        const reservationForm = document.getElementById('reservationForm');
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            
            // Affichage d'un message de confirmation
            alert(`Merci ${name} ! Votre réservation pour le ${date} a bien été enregistrée. Nous vous attendons avec impatience !`);
            
            // Réinitialisation du formulaire
            reservationForm.reset();
        });
        
        // Changement d'image aléatoire dans la galerie au survol
        const galleryImages = document.querySelectorAll('.gallery img');
        const imageUrls = [
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1515002246390-7bf3e5dd9cc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        ];
        
        galleryImages.forEach(img => {
            img.addEventListener('mouseover', function() {
                const randomIndex = Math.floor(Math.random() * imageUrls.length);
                img.src = imageUrls[randomIndex];
            });
        });
    });
