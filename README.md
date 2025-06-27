# Portfolio de Michell Policarpio

## 🚀 Descripción

Portfolio profesional de Michell Policarpio, desarrollador Full Stack especializado en desarrollo iOS, análisis de datos y soluciones web. El sitio presenta un diseño moderno y responsivo con animaciones suaves y una experiencia de usuario optimizada.

## ✨ Características

- **Logo elegante**: El logo principal es el texto "Policarpio" con tipografía Playfair Display
- **Foto de perfil destacada**: Imagen en círculo animado en la portada (`assets/img/profile.jpg`)
- **Diseño Moderno**: Interfaz oscura con acentos naranjas
- **Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- **Animaciones Suaves**: Efectos de scroll y transiciones fluidas
- **Efecto de Cursor**: Luz difusa naranja que sigue al cursor
- **Menú Móvil**: Navegación hamburguesa para dispositivos móviles
- **Formulario de Contacto**: Funcional con procesamiento PHP
- **SEO Optimizado**: Metadatos y estructura semántica

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript**: Interactividad y animaciones
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografías Poppins, Roboto y Playfair Display

### Backend
- **PHP**: Procesamiento del formulario de contacto
- **MySQL**: Base de datos (opcional)

## 📁 Estructura del Proyecto

```
cv-website-main/
├── index.html              # Página principal
├── styles.css              # Estilos principales
├── main.js                 # JavaScript principal
├── assets/
│   ├── img/
│   │   ├── profile.jpg     # Foto de perfil en portada
│   │   ├── Michell.png     # Logo en el footer
│   │   ├── Cert_NASA_mapm.jpg
│   │   └── Const_SIC_mapm.jpg
│   └── js/
│       ├── menu.js         # Funcionalidad del menú móvil
│       ├── scroll-animations.js  # Animaciones de scroll
│       └── main.js         # Efectos adicionales
├── php/
│   └── procesar_formulario.php  # Procesamiento del formulario
├── proyectos/
│   ├── gestion-datos.html  # Página del proyecto de gestión de datos
│   ├── app-ios.html        # Página del proyecto iOS
│   ├── plataforma-analisis.html  # Página de la plataforma web
│   └── gestion-academica.html    # Página del sistema académico
└── README.md
```

## 🎨 Secciones del Portfolio

### 1. Header
- Logo de texto "Policarpio" con tipografía elegante
- Navegación principal
- Menú hamburguesa para móviles

### 2. Hero Section
- Presentación personal
- Foto de perfil en círculo animado
- Botón "Ver mis proyectos" centrado
- Efecto parallax suave

### 3. Sobre Mí
- Descripción profesional
- Habilidades técnicas con animaciones
- Información académica

### 4. Proyectos
- Tarjetas de proyectos con hover effects
- Tecnologías utilizadas
- Enlaces a páginas detalladas

### 5. Contacto
- Formulario funcional
- Beneficios de trabajar juntos
- Información de contacto

### 6. Footer
- Logo (imagen)
- Información adicional
- Enlaces de navegación
- Redes sociales

## 🚀 Instalación y Uso

### Requisitos
- Servidor web con soporte PHP (Apache, Nginx, etc.)
- PHP 7.4 o superior

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cv-website-main.git
   cd cv-website-main
   ```

2. **Configurar el servidor web**
   - Colocar los archivos en el directorio web del servidor
   - Asegurar que PHP esté habilitado

3. **Configurar el formulario de contacto**
   - Editar `php/procesar_formulario.php` con tu email
   - Verificar permisos de escritura para el log

4. **Personalizar el contenido**
   - Actualizar información personal en `index.html`
   - Cambiar foto de perfil en `assets/img/profile.jpg`
   - Modificar colores en `styles.css` (variables CSS)

## 🎯 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #FF4804;        /* Color principal */
    --color-primary-dark: #d83c03;   /* Color principal oscuro */
    --color-bg: #121212;             /* Fondo principal */
    --color-bg-secondary: #1a1a1a;   /* Fondo secundario */
}
```

### Actualizar Información
- **Datos personales**: Editar `index.html`
- **Proyectos**: Modificar sección de proyectos y crear páginas individuales
- **Contacto**: Actualizar información en footer y formulario
- **Foto de perfil**: Cambiar `assets/img/profile.jpg`

### Añadir Nuevos Proyectos
1. Crear nueva página en `proyectos/`
2. Añadir tarjeta en la sección de proyectos
3. Actualizar navegación del footer

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Funcionalidades JavaScript

### Menú Móvil
- Navegación hamburguesa
- Overlay de fondo
- Cierre automático al hacer clic

### Animaciones
- Efectos de scroll
- Animaciones de entrada
- Efecto parallax en hero
- Botón "volver arriba"
- Luz difusa naranja que sigue al cursor

### Formulario de Contacto
- Validación en tiempo real
- Envío asíncrono
- Mensajes de respuesta
- Protección anti-spam

## 📧 Configuración del Formulario

El formulario de contacto requiere:

1. **Servidor con PHP habilitado**
2. **Configuración de email** en `php/procesar_formulario.php`
3. **Permisos de escritura** para el archivo de log

### Configuración de Email
Editar línea 8 en `php/procesar_formulario.php`:
```php
$para = 'tu-email@gmail.com';
```

## 🌟 Características Destacadas

- **Logo elegante**: Texto "Policarpio" con tipografía Playfair Display
- **Foto de perfil animada**: Imagen en círculo con animación y brillo
- **Efecto de Cursor**: Luz difusa naranja que sigue al cursor
- **Animaciones Suaves**: Transiciones fluidas en todos los elementos
- **SEO Optimizado**: Estructura semántica y metadatos
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Performance**: Carga optimizada y lazy loading

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Michell Policarpio**
- Email: michellpolicarpio@gmail.com
- LinkedIn: [linkedin.com/in/michell-policarpio](https://www.linkedin.com/in/michell-alexis-policarpio-moran-332568348/)
- GitHub: [github.com/MichellPolicarpio](https://github.com/MichellPolicarpio)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

---

**Nota**: Este portfolio está inspirado en el diseño de Federico Egea, adaptado y personalizado para Michell Policarpio.
