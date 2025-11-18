# 🌐 Implementación Práctica: WCAG 2.2 y WAI-ARIA

## 📋 Descripción del Proyecto

Este proyecto demuestra la implementación de estándares de accesibilidad web **WCAG 2.2** y **WAI-ARIA** en un portal de noticias completamente accesible.

## ✨ Características Implementadas

### 1. **WCAG 2.2 - Web Content Accessibility Guidelines**

#### Perceptible
- ✅ **Alt text en imágenes**: Todas las imágenes tienen texto alternativo descriptivo
- ✅ **Contraste de color**: Relación de contraste 4.5:1 (nivel AA)
- ✅ **Texto redimensionable**: Compatible hasta 200% de zoom
- ✅ **Contenido semántico**: Uso correcto de HTML5 semántico

#### Operable
- ✅ **Navegación por teclado**: Todo es accesible sin mouse
- ✅ **Skip links**: Saltar directamente al contenido principal
- ✅ **Focus visible**: Indicador claro de foco (WCAG 2.2 mejorado)
- ✅ **Sin trampas de teclado**: El foco no queda atrapado

#### Comprensible
- ✅ **Labels en formularios**: Todos los inputs tienen etiquetas claras
- ✅ **Mensajes de error**: Validación clara y descriptiva
- ✅ **Idioma declarado**: `lang="es"` en HTML
- ✅ **Navegación predecible**: Estructura consistente

#### Robusto
- ✅ **HTML válido**: Código semántico y bien estructurado
- ✅ **Compatible con tecnologías asistivas**: Lectores de pantalla, magnificadores

---

### 2. **WAI-ARIA - Accessible Rich Internet Applications**

#### Roles Implementados
```html
- role="banner" (header)
- role="navigation" (nav)
- role="main" (contenido principal)
- role="search" (formulario de búsqueda)
- role="dialog" (modal)
- role="contentinfo" (footer)
```

#### Estados y Propiedades
```html
- aria-label: Etiquetas descriptivas
- aria-labelledby: Referencia a encabezados
- aria-describedby: Descripciones adicionales
- aria-current="page": Página activa en navegación
- aria-modal="true": Modal verdadero
- aria-hidden: Ocultar elementos decorativos
- aria-required: Campos obligatorios
- aria-invalid: Validación en tiempo real
- aria-live: Anuncios dinámicos
- aria-haspopup: Indicar popups/modals
```

#### Focus Management
- **Focus trap en modal**: El foco permanece dentro del modal mientras está abierto
- **Restauración de foco**: Al cerrar el modal, el foco vuelve al elemento original
- **Navegación con flechas**: En el menú de navegación

---

## 🎯 Casos de Uso Demostrados

### 1. **Modal Accesible**
- Se abre con click o Enter/Space
- El foco se mueve automáticamente al modal
- Se puede cerrar con Escape, click fuera, o botón cerrar
- El foco queda atrapado dentro mientras está abierto
- Al cerrar, el foco regresa al botón que lo abrió

### 2. **Formulario Accesible**
- Cada campo tiene un `<label>` asociado
- Campos requeridos marcados con `*` y `aria-required`
- Mensajes de ayuda con `aria-describedby`
- Validación en tiempo real con `aria-invalid`
- Errores anunciados a lectores de pantalla

### 3. **Navegación por Teclado**
- **Tab**: Navegar entre elementos interactivos
- **Enter/Space**: Activar botones y links
- **Escape**: Cerrar modal
- **Flechas**: Navegar menú (izquierda/derecha)

---

## 🔍 Cómo Probar la Accesibilidad

### Pruebas Manuales

#### 1. **Solo con teclado**
```
- Presiona Tab para navegar por toda la página
- Usa Enter/Space para activar elementos
- Verifica que el indicador de foco sea visible
- Asegúrate de poder llegar a todos los elementos
```

#### 2. **Con lector de pantalla**
- **Windows**: NVDA (gratuito) o JAWS
- **Mac**: VoiceOver (integrado)
- **Linux**: Orca

#### 3. **Zoom al 200%**
- Usa Ctrl + (+) para hacer zoom
- Verifica que todo el contenido sea legible
- No debe haber scroll horizontal

#### 4. **Contraste de color**
- Herramienta: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Verifica relación 4.5:1 para texto normal
- Verifica relación 3:1 para texto grande

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico**: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- **CSS3**: Variables CSS, Flexbox, Media Queries
- **WAI-ARIA**: Roles, estados y propiedades
- **JavaScript Vanilla**: Manejo de modal y validación

---

## 📚 Aprendizajes Clave

### Lo que aprendimos al implementar estos estándares:

1. **La accesibilidad beneficia a todos**
   - No solo para personas con discapacidad
   - Mejora la experiencia en general (SEO, usabilidad móvil)

2. **ARIA es un complemento, no un reemplazo**
   - Primero usar HTML semántico correcto
   - ARIA solo cuando HTML no es suficiente

3. **El foco es crítico**
   - Usuarios de teclado dependen del indicador de foco
   - WCAG 2.2 refuerza la importancia del foco visible

4. **Validación accesible**
   - Los errores deben ser claros y programáticamente determinables
   - `aria-invalid` y `aria-describedby` son esenciales

5. **Testing es esencial**
   - Probar con lector de pantalla revela muchos problemas
   - La navegación por teclado es obligatoria

---

## 🎓 Reflexión

### ¿Qué aprendimos sobre la importancia de los estándares?

Los estándares WCAG y WAI-ARIA no son simples recomendaciones, son **requisitos legales** en muchos países y **responsabilidad ética** como desarrolladores. 

### ¿Cómo influye la W3C en nuestro futuro como ingenieros?

La W3C define las reglas del juego en el desarrollo web. Conocer y aplicar sus estándares nos convierte en profesionales completos, capaces de crear productos que **cualquier persona** pueda usar.

### Desafíos encontrados:

1. **Modal accesible**: Implementar el focus trap correctamente fue complejo
2. **ARIA en formularios**: Balancear ayuda visual y para lectores de pantalla
3. **Testing**: Aprender a usar lectores de pantalla tiene curva de aprendizaje

---

## 🚀 Cómo Ejecutar

1. Abre `index.html` en tu navegador
2. Navega usando solo el teclado (Tab, Enter, Escape)
3. Prueba el modal accesible
4. Completa el formulario de contacto
5. Usa un lector de pantalla para verificar la accesibilidad

---

## 📖 Recursos Adicionales

- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM - Web Accessibility In Mind](https://webaim.org/)
- [The A11Y Project](https://www.a11yproject.com/)

---

**Desarrollado por**: Dilan Real  
**Curso**: 2025-B SW Web GR1  
**Estándar implementado**: WCAG 2.2 + WAI-ARIA  
**Fecha**: 17 de noviembre, 2025
