/* SCRIPT.JS - Portfólio Comercial Gabriel */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-whatsapp');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Dados dos Projetos para o Modal
const projectsData = {
    1: {
        title: "BLACK BEARD",
        cat: "Barbearia",
        desc: "Landing page moderna para uma barbearia, com apresentação dos serviços, galeria, depoimentos, informações de contato e chamada para agendamento.",
        img: "img/black-beard.png",
        url: "https://barbeariaexemplo-gamma.vercel.app/"
    },
    2: {
        title: "SABOR & BRASA",
        cat: "Restaurante",
        desc: "Site profissional para restaurante, com destaque para o cardápio, apresentação do estabelecimento, galeria, avaliações e contato.",
        img: "img/sabor-brasa.png",
        url: "https://restauranteexemplo-mu.vercel.app/"
    },
    3: {
        title: "LUCAS ALMEIDA",
        cat: "Personal Trainer",
        desc: "Site profissional para personal trainer, apresentando serviços, metodologia, resultados, depoimentos e formas de contato.",
        img: "img/personal.png",
        url: "https://personalexemplo.vercel.app/"
    }
};

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalCat = document.getElementById('modalCat');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalLinkBox = document.getElementById('modalLinkBox');

    const project = projectsData[projectId];
    if (project) {
        modalImage.src = project.img;
        modalCat.textContent = project.cat;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.desc;
        modalLinkBox.innerHTML = `<a href="${project.url}" target="_blank" class="btn btn-primary">VISITAR SITE COMPLETO ↗</a>`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Enviar formulário direcionando para WhatsApp
function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;
    const negocio = document.getElementById('negocio').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Gabriel! Meu nome é *${nome}* (${whatsapp}).\nMeu negócio é do ramo de *${negocio}* e tenho interesse em criar um site.\n\nDetalhes:\n${mensagem}\n\nE-mail: ${email}`;
    const textoCodificado = encodeURIComponent(texto);
    
    const urlWhatsApp = `https://wa.me/5551999999999?text=${textoCodificado}`;
    window.open(urlWhatsApp, '_blank');
}
