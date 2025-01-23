// Opcional: resaltado de navegación activo al hacer scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Ajuste para el header fijo
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
