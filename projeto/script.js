/* Listener for services cards */

document.addEventListener('DOMContentLoaded', () => {
    const servicesInfo = {
        cafe: {
            title: 'Cafeteria',
            description: 'Nossa cafeteria é o refúgio perfeito para os amantes do café. \n\nAqui, você encontrará uma seleção que vai desde os cafés tradicionais até os especiais, preparados com métodos variados - do espresso ao French press, do pour-over a outras técnicas artesanais. Cada xícara é uma experiência única, feita com grãos de alta qualidade e muita paixão, garantindo sabores marcantes e um aroma inconfundível.',
        },
        library: {
            title: 'Livraria',
            description: 'A nossa livraria oferece uma curadoria diversificada com títulos de vários gêneros, para todos os gostos e idades. \n\nÉ o lugar ideal para descobrir novas histórias ou encontrar aquele clássico que você tanto ama, complementando a sua experiência cultural e sensorial.',
        },
        studies: {
            title: 'Espaço de Estudos',
            description: 'Pensando no seu conforto e produtividade, nossa cafeteria dispõe de um espaço dedicado aos estudos. \n\nCom mesas largas e ambiente silencioso, o local foi cuidadosamente planejado para atender tanto quem prefere momentos de concentração individual quanto grupos de estudos.',
        },
        events: {
            title: 'Eventos',
            description: 'Mais do que um local para apreciar café e livros, nosso ambiente é um verdadeiro ponto de encontro cultural. \n\nRegularmente, promovemos eventos que aproximam a comunidade, como encontros do clube do livro, sessões de recitação de poesia e apresentações musicais.',
        },
    };

    document.querySelectorAll('.services-card').forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.id.split('-')[0];
            const service = servicesInfo[serviceId];
            
            document.getElementById('modal-title').innerText = service.title;
            document.getElementById('modal-body').innerText = service.description;
            
            const modal = new bootstrap.Modal(document.getElementById('service-modal'));
            modal.show();
        });
    });
});

/* Scroll */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajusta a rolagem para compensar a navbar fixa
                    behavior: 'smooth'
                });
            }
        });
    });
});