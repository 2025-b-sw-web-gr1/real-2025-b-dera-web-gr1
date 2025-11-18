# 📋 PARTE 2: Exploración de Estándares W3C

## Los 5 Estándares W3C Seleccionados

---

### 1️⃣ **WebAssembly (Wasm)**

**Descripción:**  
WebAssembly es un formato de código binario de bajo nivel que permite ejecutar código de alto rendimiento en navegadores web a velocidades cercanas al nativo. Es un complemento a JavaScript, no un reemplazo.

**Características principales:**
- Ejecución de código C, C++, Rust y otros lenguajes en el navegador
- Rendimiento casi nativo (ideal para juegos, edición de video/audio, CAD)
- Tamaño de archivo compacto y carga rápida
- Seguro: se ejecuta en un entorno aislado (sandbox)
- Compatible con JavaScript: pueden interactuar entre sí

**Casos de uso reales:**
- Figma (herramienta de diseño) usa Wasm para renderizado rápido
- AutoCAD Web usa Wasm para ejecutar su motor CAD
- Juegos 3D en navegador (Unity, Unreal Engine)
- Edición de imágenes y video en la web

**Justificación de selección:**  
WebAssembly está revolucionando lo que es posible hacer en el navegador. Como ingenieros de sistemas, nos permite llevar aplicaciones de escritorio completas a la web sin sacrificar rendimiento, abriendo nuevas posibilidades profesionales.

---

### 2️⃣ **Web Components**

**Descripción:**  
Web Components es un conjunto de APIs que permite crear elementos HTML personalizados, reutilizables y encapsulados sin necesidad de frameworks externos como React o Vue.

**Tecnologías que lo componen:**
- **Custom Elements**: Define nuevos elementos HTML (`<mi-componente>`)
- **Shadow DOM**: Encapsulación de estilos y markup
- **HTML Templates**: Fragmentos de HTML reutilizables con `<template>` y `<slot>`

**Ventajas:**
- Framework-agnostic: funcionan en cualquier proyecto
- Reutilización real de componentes
- Encapsulación nativa de estilos (no hay conflictos CSS)
- Interoperabilidad entre proyectos

**Casos de uso:**
- Sistemas de diseño empresariales
- Componentes compartidos entre múltiples aplicaciones
- Widgets embebibles en diferentes sitios

**Justificación de selección:**  
Los Web Components son el futuro de la modularización web. Grandes empresas como Google, Microsoft y Adobe los usan en producción. Aprenderlos nos da independencia de frameworks y habilidades que perdurarán en el tiempo.

---

### 3️⃣ **WebRTC** (Web Real-Time Communication)

**Descripción:**  
WebRTC es un estándar que permite comunicación en tiempo real peer-to-peer directamente en el navegador, sin plugins ni servidores intermediarios para transmitir audio, video y datos.

**Capacidades principales:**
- **Audio/Video en vivo**: Videollamadas y conferencias
- **Screen Sharing**: Compartir pantalla
- **Data Channels**: Transferencia de datos P2P de baja latencia
- **Sin plugins**: 100% nativo en navegadores modernos

**Aplicaciones populares que usan WebRTC:**
- Google Meet, Zoom (versión web)
- Discord (llamadas de voz/video)
- WhatsApp Web (llamadas)
- Aplicaciones de telemedicina
- Streaming en vivo interactivo

**Justificación de selección:**  
La comunicación en tiempo real es esencial en la era post-pandemia. WebRTC nos permite construir aplicaciones de videollamadas, colaboración remota y juegos multijugador, habilidades muy demandadas en el mercado actual.

---

### 4️⃣ **Progressive Web Apps (PWA) - Manifest & Service Workers**

**Descripción:**  
PWA es un conjunto de estándares que permite crear aplicaciones web que se comportan como apps nativas: funcionan offline, se pueden instalar, envían notificaciones push y cargan instantáneamente.

**Tecnologías clave:**
- **Web App Manifest**: Archivo JSON que define cómo se instala la app (ícono, nombre, colores)
- **Service Workers**: Scripts que funcionan en background, permitiendo:
  - Funcionamiento offline con cache inteligente
  - Sincronización en background
  - Notificaciones push
  - Actualización automática de contenido

**Ventajas sobre apps nativas:**
- Una sola codebase para todas las plataformas
- No requieren tiendas de apps (App Store, Play Store)
- Actualizaciones instantáneas
- Menor tamaño de descarga
- Descubribles por motores de búsqueda

**Ejemplos exitosos:**
- Twitter Lite (redujo 97% el tamaño de descarga)
- Pinterest (aumento 60% el engagement)
- Starbucks PWA (funciona offline para pedir)

**Justificación de selección:**  
Las PWAs ofrecen lo mejor de ambos mundos: alcance de la web + capacidades de apps nativas. Empresas buscan desarrolladores que puedan crear una sola aplicación que funcione en iOS, Android y escritorio.

---

### 5️⃣ **Web Accessibility Initiative (WAI) - WCAG 2.2**

**Descripción:**  
WCAG (Web Content Accessibility Guidelines) 2.2 es la versión más reciente de las directrices de accesibilidad que garantizan que los sitios web sean utilizables por personas con discapacidades visuales, auditivas, motoras y cognitivas.

**Principios fundamentales (POUR):**
- **Perceptible**: Alternativas de texto, subtítulos, contraste suficiente
- **Operable**: Navegable por teclado, tiempo suficiente para leer
- **Comprensible**: Texto legible, funcionamiento predecible
- **Robusto**: Compatible con tecnologías asistivas (lectores de pantalla)

**Nuevas características en WCAG 2.2 (2023):**
- Focus visible mejorado
- Arrastrar y soltar accesible
- Ayuda consistente
- Autenticación accesible (sin CAPTCHA complejos)

**Impacto legal y comercial:**
- **Legal**: En USA, UE y Colombia existen leyes que exigen accesibilidad
- **Comercial**: 15% de la población mundial tiene alguna discapacidad
- **SEO**: Google prioriza sitios accesibles
- **Reputación**: Muestra responsabilidad social corporativa

**Justificación de selección:**  
La accesibilidad es un derecho humano, un requisito legal en aumento y una ventaja competitiva. Desarrolladores que crean sitios accesibles están en alta demanda y demuestran profesionalismo ético. Además, un sitio accesible es mejor para todos los usuarios.

---

## 🎯 Conclusión

Estos cinco estándares representan las fronteras más innovadoras del desarrollo web:

1. **WebAssembly** → Rendimiento extremo en el navegador
2. **Web Components** → Componentización nativa y reutilizable
3. **WebRTC** → Comunicación en tiempo real P2P
4. **PWA (Manifest + Service Workers)** → Apps web que parecen nativas
5. **WCAG 2.2** → Web inclusiva y accesible para todos

Dominarlos nos convierte en desarrolladores completos, capaces de crear experiencias web profesionales, inclusivas y de alta calidad.

---

**Estudiante:** Dilan Real  
**Curso:** 2025-B SW Web GR1  
**Fecha:** 17 de noviembre de 2025
