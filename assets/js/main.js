// Script principal para efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de luz difusa que sigue al cursor
    document.addEventListener('mousemove', function(e) {
        const body = document.body;
        const x = e.clientX;
        const y = e.clientY;
        
        // Aplicar posición del cursor usando CSS custom properties
        body.style.setProperty('--cursor-x', x + 'px');
        body.style.setProperty('--cursor-y', y + 'px');
        
        // Asegurar que el efecto esté activo
        if (!body.classList.contains('cursor-effect')) {
            body.classList.add('cursor-effect');
        }
    });
    
    // Smooth scroll para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de parallax suave para el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Animación de escritura para el título principal
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar animación después de un pequeño delay
        setTimeout(typeWriter, 500);
    }
    
    // Efecto hover para las tarjetas de proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        proyecto.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de carga progresiva para las habilidades
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.style.animation = 'fadeInScale 0.6s ease forwards';
    });
    
    // Añadir estilos CSS dinámicamente para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efecto hover para enlaces (sin cursor personalizado)
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Efecto hover sin cursor personalizado
        });
        
        link.addEventListener('mouseleave', function() {
            // Efecto hover sin cursor personalizado
        });
    });
    
    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
}); 