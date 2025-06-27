// Script para animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);
    
    // Observar elementos con clases de animación
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Botón volver arriba
    const btnVolverArriba = document.querySelector('.btn-volver-arriba');
    if (btnVolverArriba) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                btnVolverArriba.style.display = 'flex';
                setTimeout(() => {
                    btnVolverArriba.style.opacity = '1';
                }, 10);
            } else {
                btnVolverArriba.style.opacity = '0';
                setTimeout(() => {
                    btnVolverArriba.style.display = 'none';
                }, 300);
            }
        });
        
        btnVolverArriba.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 