// Menu Mobile Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Fechar menu ao clicar em um link mobile
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Lógica do Formulário enviando para o seu WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const negocio = document.getElementById('negocio').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Seu número configurado
    const seuNumeroWhatsApp = "5551992934189"; 
    
    let texto = `Olá Gabriel, me chamo *${nome}*.\n\n`;
    texto += `Tenho um negócio: *${negocio}*.\n\n`;
    texto += `Gostaria de conversar sobre a criação de um site. `;
    
    if(mensagem) {
        texto += `\n\nDetalhes da ideia:\n${mensagem}`;
    }

    const url = `https://wa.me/${seuNumeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});