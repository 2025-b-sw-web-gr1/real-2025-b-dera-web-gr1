from flask import Flask, render_template

app = Flask(__name__)

# Datos de productos de fundas para AirPods
productos = [
    {
        'id': 1,
        'nombre': 'Funda Silicona Premium',
        'precio': 12.99,
        'descripcion': 'Funda de silicona suave con protección anti-golpes',
        'colores': ['Negro', 'Blanco', 'Rosa', 'Azul'],
        'imagen': 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop',
        'destacado': True,
        'stock': 25
    },
    {
        'id': 2,
        'nombre': 'Funda Cuero Vintage',
        'precio': 24.99,
        'descripcion': 'Elegante funda de cuero genuino con mosquetón metálico',
        'colores': ['Marrón', 'Negro'],
        'imagen': 'https://images.unsplash.com/photo-1625245488600-f89d3f6d243d?w=500&h=500&fit=crop',
        'destacado': True,
        'stock': 15
    },
    {
        'id': 3,
        'nombre': 'Funda Transparente',
        'precio': 9.99,
        'descripcion': 'Funda transparente ultra delgada que muestra el diseño original',
        'colores': ['Transparente'],
        'imagen': 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&h=500&fit=crop',
        'destacado': False,
        'stock': 30
    },
    {
        'id': 4,
        'nombre': 'Funda Impermeable',
        'precio': 19.99,
        'descripcion': 'Protección total contra agua y polvo, perfecta para deportes',
        'colores': ['Negro', 'Verde', 'Naranja'],
        'imagen': 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
        'destacado': True,
        'stock': 10
    },
    {
        'id': 5,
        'nombre': 'Funda Diseño Cartoon',
        'precio': 14.99,
        'descripcion': 'Diseños divertidos y coloridos de personajes animados',
        'colores': ['Multicolor'],
        'imagen': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        'destacado': False,
        'stock': 20
    },
    {
        'id': 6,
        'nombre': 'Funda Metalizada',
        'precio': 16.99,
        'descripcion': 'Acabado metalizado brillante con protección reforzada',
        'colores': ['Oro', 'Plata', 'Rosa Gold'],
        'imagen': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        'destacado': False,
        'stock': 12
    }
]

# Características de Jinja2 que demostraremos
caracteristicas_jinja2 = {
    'herencia': 'Sistema de herencia de plantillas con blocks',
    'filtros': 'Más de 50 filtros incorporados para transformar datos',
    'macros': 'Funciones reutilizables dentro de las plantillas',
    'expresiones': 'Expresiones Python completas en las plantillas',
    'autoescapado': 'Protección automática contra XSS',
    'extensiones': 'Sistema de extensiones personalizable'
}

@app.route('/')
def index():
    """Página principal con productos destacados"""
    productos_destacados = [p for p in productos if p['destacado']]
    return render_template('index.html', 
                         productos=productos_destacados,
                         titulo='Fundas Premium para AirPods',
                         caracteristicas=caracteristicas_jinja2)

@app.route('/productos')
def todos_productos():
    """Página con todos los productos"""
    return render_template('productos.html', 
                         productos=productos,
                         titulo='Catálogo Completo')

@app.route('/producto/<int:producto_id>')
def detalle_producto(producto_id):
    """Página de detalle de un producto específico"""
    producto = next((p for p in productos if p['id'] == producto_id), None)
    if producto:
        return render_template('detalle.html', producto=producto)
    return "Producto no encontrado", 404

@app.route('/ventajas-jinja2')
def ventajas():
    """Página explicativa de las ventajas de Jinja2"""
    ventajas_lista = [
        {
            'titulo': 'Sintaxis Clara y Pythónica',
            'descripcion': 'Jinja2 usa una sintaxis similar a Python, lo que facilita el aprendizaje para desarrolladores Python.',
            'ejemplo': '{{ variable | upper }} o {% for item in items %}'
        },
        {
            'titulo': 'Herencia de Plantillas',
            'descripcion': 'Sistema robusto de herencia que permite crear layouts base y extenderlos.',
            'ejemplo': '{% extends "base.html" %} y {% block content %}'
        },
        {
            'titulo': 'Filtros Potentes',
            'descripcion': 'Más de 50 filtros integrados para transformar datos sin lógica en Python.',
            'ejemplo': '{{ precio | round(2) }} o {{ texto | truncate(100) }}'
        },
        {
            'titulo': 'Macros Reutilizables',
            'descripcion': 'Define funciones en plantillas para reutilizar código HTML.',
            'ejemplo': '{% macro render_card(producto) %}'
        },
        {
            'titulo': 'Auto-escapado',
            'descripcion': 'Protección automática contra ataques XSS escapando HTML por defecto.',
            'ejemplo': 'Seguridad integrada sin configuración adicional'
        },
        {
            'titulo': 'Expresiones Python',
            'descripcion': 'Permite usar expresiones Python completas en las plantillas.',
            'ejemplo': '{{ productos | length }} o {{ precio * 1.21 }}'
        }
    ]
    
    comparacion = {
        'EJS': {
            'pros': ['Sintaxis similar a JavaScript', 'Fácil para devs de Node.js'],
            'contras': ['Sin herencia de plantillas nativa', 'Menos filtros integrados']
        },
        'Handlebars': {
            'pros': ['Lógica-less (sin lógica compleja)', 'Muy portable'],
            'contras': ['Limitado para casos complejos', 'Requiere helpers para operaciones simples']
        },
        'Pug': {
            'pros': ['Sintaxis muy concisa', 'Menos código HTML'],
            'contras': ['Curva de aprendizaje alta', 'Indentación estricta puede ser problemática']
        }
    }
    
    return render_template('ventajas.html', 
                         ventajas=ventajas_lista,
                         comparacion=comparacion)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
