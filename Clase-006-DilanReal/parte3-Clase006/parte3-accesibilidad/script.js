// Script para manejo del modal accesible con WAI-ARIA

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('notification-modal');
    let lastFocusedElement;

    // Abrir modal
    openModalBtn.addEventListener('click', () => {
        // Guardar el elemento que tenía el foco
        lastFocusedElement = document.activeElement;
        
        // Mostrar modal
        modal.removeAttribute('hidden');
        
        // Mover foco al modal
        closeModalBtn.focus();
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
        
        // Anunciar apertura a lectores de pantalla
        announceToScreenReader('Modal abierto');
    });

    // Cerrar modal
    const closeModal = () => {
        // Ocultar modal
        modal.setAttribute('hidden', '');
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
        
        // Devolver foco al elemento que lo tenía antes
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
        
        // Anunciar cierre a lectores de pantalla
        announceToScreenReader('Modal cerrado');
    };

    closeModalBtn.addEventListener('click', closeModal);

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
            closeModal();
        }
    });

    // Cerrar modal al hacer click fuera de él
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Trap focus dentro del modal (importante para accesibilidad)
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });

    // Función auxiliar para anunciar mensajes a lectores de pantalla
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'visually-hidden';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        // Remover después de anunciar
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Validación de formulario accesible
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validación básica
        if (name && email && message) {
            announceToScreenReader('Formulario enviado exitosamente');
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        } else {
            announceToScreenReader('Por favor completa todos los campos requeridos');
        }
    });

    // Agregar indicadores visuales de validación en tiempo real
    const requiredInputs = contactForm.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.setAttribute('aria-invalid', 'true');
            } else {
                input.setAttribute('aria-invalid', 'false');
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.setAttribute('aria-invalid', 'false');
            }
        });
    });

    // Mejorar navegación por teclado en el menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextLink = navLinks[index + 1] || navLinks[0];
                nextLink.focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevLink = navLinks[index - 1] || navLinks[navLinks.length - 1];
                prevLink.focus();
            }
        });
    });

    console.log('✅ Implementación WCAG 2.2 y WAI-ARIA cargada exitosamente');
    console.log('Características de accesibilidad implementadas:');
    console.log('- Skip links para navegación rápida');
    console.log('- ARIA roles, states y properties');
    console.log('- Modal con focus trap');
    console.log('- Formularios con labels y validación accesible');
    console.log('- Navegación por teclado mejorada');
    console.log('- Anuncios para lectores de pantalla');
    console.log('- Alto contraste y focus visible (WCAG 2.2)');
});
