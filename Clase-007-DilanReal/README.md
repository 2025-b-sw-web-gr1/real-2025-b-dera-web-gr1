# 🎧 Tienda de Fundas para AirPods - Proyecto con Jinja2

## 📋 Descripción del Proyecto

Este proyecto es una tienda web de fundas para AirPods creada con **Flask** y **Jinja2** como motor de renderizado. Fue desarrollado como parte del taller de la Clase 007 sobre Motores de Renderizado Web.

## 🚀 ¿Por qué elegí Jinja2?

### Razones principales:

1. **Sintaxis Pythónica y Clara**: Jinja2 usa una sintaxis similar a Python, lo que facilita enormemente el aprendizaje para desarrolladores que ya conocen Python.

2. **Sistema Robusto de Herencia de Plantillas**: Permite crear layouts base y extenderlos, reduciendo significativamente la duplicación de código.

3. **Filtros Potentes Integrados**: Cuenta con más de 50 filtros incorporados que permiten transformar datos directamente en las plantillas sin necesidad de lógica adicional en Python.

4. **Macros Reutilizables**: Permite definir funciones dentro de las plantillas para crear componentes reutilizables.

5. **Seguridad Integrada**: Auto-escapado automático que protege contra ataques XSS sin configuración adicional.

6. **Expresiones Python Completas**: Permite usar expresiones Python directamente en las plantillas para operaciones complejas.

## 📊 Comparación con Otros Motores de Renderizado

### Jinja2 vs EJS

| Aspecto | Jinja2 | EJS |
|---------|--------|-----|
| Herencia de Plantillas | ✅ Nativa y robusta | ❌ No nativa |
| Filtros | ✅ 50+ filtros integrados | ❌ Pocos filtros |
| Sintaxis | Python-like | JavaScript-like |
| Auto-escapado | ✅ Por defecto | ⚠️ Manual |
| Macros/Componentes | ✅ Macros potentes | ⚠️ Solo includes |

### Jinja2 vs Handlebars

| Aspecto | Jinja2 | Handlebars |
|---------|--------|------------|
| Lógica en Plantillas | ✅ Completa | ❌ Limitada (logic-less) |
| Filtros | ✅ 50+ integrados | ⚠️ ~20 helpers |
| Expresiones | ✅ Python completo | ❌ Muy limitado |
| Curva de Aprendizaje | ✅ Fácil | ✅ Fácil |
| Flexibilidad | ✅ Alta | ⚠️ Media-baja |

### Jinja2 vs Pug

| Aspecto | Jinja2 | Pug |
|---------|--------|-----|
| Sintaxis | ✅ HTML estándar | ⚠️ Indentación estricta |
| Curva de Aprendizaje | ✅ Fácil | ❌ Media-alta |
| Herencia | ✅ Blocks | ✅ Extends |
| Legibilidad | ✅ Alta | ⚠️ Requiere adaptación |

## 💡 Ventajas de Jinja2 Demostradas en este Proyecto

### 1. **Herencia de Plantillas**
```jinja2
{% extends "base.html" %}
{% block content %}
  <!-- Contenido específico de la página -->
{% endblock %}
```

Todas las páginas del proyecto heredan de `base.html`, evitando repetir el navbar, footer y estructura HTML.

### 2. **Macros para Componentes Reutilizables**
```jinja2
{% macro render_product_card(producto) %}
  <div class="product-card">
    <h3>{{ producto.nombre }}</h3>
    <!-- más código -->
  </div>
{% endmacro %}
```

Creamos una macro para las tarjetas de productos que se reutiliza en múltiples páginas.

### 3. **Filtros Potentes**
```jinja2
{{ "jinja2" | upper }}  {# JINJA2 #}
{{ producto.descripcion | truncate(80) }}  {# Trunca a 80 caracteres #}
{{ productos | map(attribute='stock') | sum }}  {# Suma todos los stocks #}
{{ "%.2f" | format(producto.precio * 1.21) }}  {# Formatea precio con IVA #}
```

### 4. **Condicionales Avanzados**
```jinja2
{% if producto.stock > 20 %}
  <span class="stock-alto">Stock disponible</span>
{% elif producto.stock > 10 %}
  <span class="stock-medio">Stock limitado</span>
{% else %}
  <span class="stock-bajo">Últimas unidades</span>
{% endif %}
```

### 5. **Variables de Loop**
```jinja2
{% for producto in productos %}
  {{ loop.index }}. {{ producto.nombre }}
  {% if not loop.last %}, {% endif %}
{% endfor %}
```

### 6. **Filtros Encadenados**
```jinja2
{% set destacados = productos | selectattr('destacado') | list %}
{% set all_colors = productos | map(attribute='colores') | sum(start=[]) | unique | list %}
```

## 🛠️ Tecnologías Utilizadas

- **Python 3.x**
- **Flask 3.0+**: Framework web minimalista
- **Jinja2**: Motor de plantillas (incluido con Flask)
- **HTML5 & CSS3**: Estructura y estilos
- **CSS Grid & Flexbox**: Layout responsive

## 📁 Estructura del Proyecto

```
Clase-007-DilanReal/
│
├── app.py                      # Aplicación Flask principal
├── README.md                   # Este archivo
├── requirements.txt            # Dependencias del proyecto
│
├── templates/                  # Plantillas Jinja2
│   ├── base.html              # Plantilla base (navbar, footer)
│   ├── index.html             # Página principal
│   ├── productos.html         # Catálogo completo
│   ├── detalle.html           # Detalle de producto
│   └── ventajas.html          # Explicación de Jinja2
│
└── static/                     # Archivos estáticos
    ├── css/
    │   └── styles.css         # Estilos CSS
    └── images/                # Imágenes de productos
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Pasos:

1. **Clonar o descargar el proyecto**

2. **Crear un entorno virtual (recomendado)**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. **Instalar dependencias**
```bash
pip install -r requirements.txt
```

4. **Ejecutar la aplicación**
```bash
python app.py
```

5. **Abrir en el navegador**
```
http://localhost:5000
```

## 📄 Características Implementadas

### Funcionalidades:
- ✅ Página principal con productos destacados
- ✅ Catálogo completo de productos
- ✅ Página de detalle de cada producto
- ✅ Página explicativa de ventajas de Jinja2
- ✅ Responsive design
- ✅ Estadísticas calculadas dinámicamente
- ✅ Filtrado y organización de productos
- ✅ Tabla comparativa de productos

### Características de Jinja2 Demostradas:
- ✅ Herencia de plantillas (`extends`, `block`)
- ✅ Macros reutilizables
- ✅ Filtros integrados (upper, truncate, format, sum, etc.)
- ✅ Condicionales (`if`, `elif`, `else`)
- ✅ Bucles (`for`, `loop.index`, `loop.last`)
- ✅ Variables de contexto
- ✅ Expresiones Python
- ✅ Filtros encadenados
- ✅ Auto-escapado de seguridad
- ✅ Comentarios con `{# #}`

## 📚 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con productos destacados |
| `/productos` | Catálogo completo de productos |
| `/producto/<id>` | Detalle de un producto específico |
| `/ventajas-jinja2` | Explicación completa de Jinja2 y comparación |

## 🎯 Conclusión

Jinja2 es una excelente elección para proyectos Python/Flask porque:

1. **Integración perfecta** con el ecosistema Python
2. **Productividad alta** gracias a sus características avanzadas
3. **Código más limpio** mediante herencia y macros
4. **Seguridad por defecto** con auto-escapado
5. **Curva de aprendizaje suave** para desarrolladores Python
6. **Documentación excelente** y gran comunidad

Para este proyecto de tienda de fundas para AirPods, Jinja2 permitió:
- Reducir duplicación de código con herencia
- Crear componentes reutilizables con macros
- Transformar datos fácilmente con filtros
- Mantener la lógica de presentación simple y clara

## 👨‍💻 Autor

**Dilan Real**  
Clase 007 - Motores de Renderizado Web  
6to Semestre - Desarrollo Web

## 📝 Licencia

Este proyecto fue creado con fines educativos como parte del taller de la Clase 007.

---

**Nota**: Este proyecto demuestra las capacidades de Jinja2 en un contexto real y educativo, mostrando por qué es una opción superior para desarrollo web con Python comparado con otros motores de renderizado.
