# 🍽️ Proyecto 01 - API RESTful de Restaurantes y Platos

**Integrante:**
- Dilan Real - dilan.real@epn.edu.ec

**Fecha:** 12 de diciembre de 2025  
**Curso:** Desarrollo Web - 6to Semestre  
**Grupo:** 2025-B SW Web GR1

---

## 📋 Descripción del Proyecto

Este proyecto implementa una **API RESTful** completa para la gestión de restaurantes y sus platos del menú. El sistema permite administrar información de restaurantes (ubicación, tipo de cocina, contacto) y los platos que cada restaurante ofrece (nombre, descripción, precio, disponibilidad).

### Problema que resuelve:
- Gestionar catálogos de restaurantes y menús digitales
- Facilitar la consulta de platos por restaurante
- Mantener actualizada la información de disponibilidad y precios
- Proporcionar una base para aplicaciones de delivery o reservas

---

## 🎯 Relación 1 a Muchos

**Entidad Principal:** Restaurante  
**Entidad Relacionada:** Plato

### Explicación de la relación:

```
Un RESTAURANTE puede tener MUCHOS PLATOS en su menú
Cada PLATO pertenece a UN SOLO RESTAURANTE

Ejemplo:
┌─────────────────────────┐
│ Restaurante             │
│ "La Casa del Marisco"   │──┐
└─────────────────────────┘  │
                             │ tiene muchos
                             ├──> Ceviche de Camarón
                             ├──> Arroz Marinero
                             ├──> Corvina al Horno
                             └──> Encocado de Pescado
```

Esta es una relación clásica de **uno a muchos (1:N)** donde:
- La tabla `restaurants` es la entidad padre
- La tabla `dishes` es la entidad hija
- `dishes.restauranteId` es la clave foránea (Foreign Key) que vincula cada plato con su restaurante

---

## 📊 Modelo de Datos

### Restaurant (Restaurante)
| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| id | integer | Identificador único | Sí |
| nombre | string | Nombre comercial del restaurante | Sí |
| direccion | string | Dirección física | Sí |
| ciudad | string | Ciudad donde se ubica | Sí |
| tipoCocina | string | Especialidad culinaria | Sí |
| telefono | string | Teléfono de contacto | Sí |

**Ejemplo:**
```json
{
  "id": 1,
  "nombre": "La Casa del Marisco",
  "direccion": "Av. Amazonas N24-03",
  "ciudad": "Quito",
  "tipoCocina": "Mariscos",
  "telefono": "02-234-5678"
}
```

### Dish (Plato)
| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| id | integer | Identificador único | Sí |
| nombre | string | Nombre del plato | Sí |
| descripcion | string | Descripción e ingredientes | Sí |
| precio | number | Precio en dólares | Sí |
| categoria | string | Tipo de plato (Entrada, Plato Fuerte, etc.) | Sí |
| disponible | boolean | Si está disponible actualmente | Sí |
| restauranteId | integer | **FK** - ID del restaurante | Sí |

**Ejemplo:**
```json
{
  "id": 1,
  "nombre": "Ceviche de Camarón",
  "descripcion": "Camarones frescos marinados en limón con cebolla morada y cilantro",
  "precio": 12.50,
  "categoria": "Entrada",
  "disponible": true,
  "restauranteId": 1
}
```

---

## 🔗 Endpoints Documentados

### Restaurantes (5 endpoints)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/restaurants` | Obtener todos los restaurantes | No |
| GET | `/restaurants/{id}` | Obtener restaurante por ID | No |
| POST | `/restaurants` | Crear nuevo restaurante | Sí |
| PUT | `/restaurants/{id}` | Actualizar restaurante completo | Sí |
| DELETE | `/restaurants/{id}` | Eliminar restaurante | Sí |

### Platos (6 endpoints)

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/dishes` | Obtener todos los platos | No |
| GET | `/dishes/{id}` | Obtener plato por ID | No |
| GET | `/restaurants/{id}/dishes` | **Obtener platos de un restaurante** ⭐ | No |
| POST | `/dishes` | Crear nuevo plato | Sí |
| PUT | `/dishes/{id}` | Actualizar plato completo | Sí |
| DELETE | `/dishes/{id}` | Eliminar plato | Sí |

**Total: 11 endpoints**

### Endpoint Especial - Relación 1:N

```http
GET /restaurants/{id}/dishes
```

Este endpoint es la representación de la relación 1 a muchos. Permite obtener todos los platos que pertenecen a un restaurante específico.

**Ejemplo de uso:**
```bash
GET https://api.ejemplo.com/restaurants/1/dishes

# Respuesta:
[
  {
    "id": 1,
    "nombre": "Ceviche de Camarón",
    "precio": 12.50,
    "categoria": "Entrada",
    "restauranteId": 1
  },
  {
    "id": 2,
    "nombre": "Arroz Marinero",
    "precio": 18.00,
    "categoria": "Plato Fuerte",
    "restauranteId": 1
  }
]
```

---

## 📁 Estructura del Proyecto

```
Proyecto-01/
├── bruno-collection/
│   └── Restaurantes API/
│       ├── bruno.json
│       ├── restaurants/                    # 5 archivos
│       │   ├── get-all-restaurants.bru
│       │   ├── get-restaurant-by-id.bru
│       │   ├── create-restaurant.bru
│       │   ├── update-restaurant.bru
│       │   └── delete-restaurant.bru
│       └── dishes/                         # 6 archivos
│           ├── get-all-dishes.bru
│           ├── get-dish-by-id.bru
│           ├── get-dishes-by-restaurant.bru  ⭐ Endpoint de relación
│           ├── create-dish.bru
│           ├── update-dish.bru
│           └── delete-dish.bru
├── swagger-api.yaml                        # Documentación OpenAPI 3.0
└── README.md                               # Este archivo
```

**Total de archivos:**
- 11 archivos `.bru` (peticiones Bruno)
- 1 archivo YAML (documentación Swagger)
- 1 archivo README

---

## 🚀 Cómo Probar la API

### Opción 1: Con Swagger UI (Recomendado)

1. **Abrir Swagger Editor online:**
   ```
   https://editor.swagger.io/
   ```

2. **Cargar la documentación:**
   - Copiar todo el contenido del archivo `swagger-api.yaml`
   - Pegarlo en el panel izquierdo del editor
   - Automáticamente verás la documentación generada en el panel derecho

3. **Probar endpoints:**
   - Navegar por los endpoints en la documentación
   - Click en cualquier endpoint para expandirlo
   - Click en el botón "Try it out"
   - Ingresar los parámetros necesarios
   - Click en "Execute"
   - Ver la respuesta simulada

4. **Validar:**
   - Verificar que no hay errores de sintaxis
   - Revisar que todos los schemas estén definidos
   - Comprobar que los ejemplos sean correctos

### Opción 2: Con Bruno (Cliente API)

1. **Abrir Bruno:**
   - Iniciar la aplicación Bruno

2. **Cargar la colección:**
   - Click en "Open Collection"
   - Navegar a `Proyecto-01/bruno-collection/`
   - Seleccionar la carpeta "Restaurantes API"

3. **Explorar endpoints:**
   - Navegar por las carpetas `restaurants/` y `dishes/`
   - Ver los 11 archivos .bru organizados

4. **Ejecutar peticiones:**
   - Click en cualquier archivo .bru
   - Presionar el botón "Send" o `Ctrl+Enter`
   - Observar la respuesta (como JSONPlaceholder no existe, verás error de conexión, pero la sintaxis es correcta)

5. **Modificar y experimentar:**
   - Cambiar valores en los bodies
   - Modificar IDs en las URLs
   - Agregar headers personalizados

### Opción 3: Validación con OpenAPI Validator

```bash
# Instalar validador
npm install -g @apidevtools/swagger-cli

# Validar el archivo YAML
swagger-cli validate swagger-api.yaml

# Si todo está correcto, verás:
# swagger-api.yaml is valid
```

---

## 🎓 Conceptos Aplicados

### 1. Arquitectura RESTful

✅ **Recursos bien definidos:**
- `/restaurants` - Colección de restaurantes
- `/dishes` - Colección de platos
- `/restaurants/{id}/dishes` - Relación anidada

✅ **Métodos HTTP semánticos:**
- GET para lectura
- POST para creación
- PUT para actualización completa
- DELETE para eliminación

✅ **Stateless:**
- Cada petición es independiente
- No se mantiene estado en el servidor

✅ **Formato JSON:**
- Todas las respuestas en formato JSON estándar

### 2. Diseño de Relaciones

**Relación 1:N implementada correctamente:**

```
Restaurant (1) ──< Dishes (N)
     ↓
   Padre          Hijos
```

**Cascada de eliminación:**
```yaml
DELETE /restaurants/1
# ⚠️ Debe eliminar o manejar todos los platos asociados
```

### 3. Códigos HTTP Apropiados

| Código | Uso | Ejemplo |
|--------|-----|---------|
| 200 | Éxito en GET, PUT | Restaurante encontrado |
| 201 | Recurso creado | POST exitoso |
| 204 | Éxito sin contenido | DELETE exitoso |
| 400 | Request inválido | Datos faltantes |
| 404 | No encontrado | ID inexistente |
| 409 | Conflicto | No se puede eliminar (tiene hijos) |

### 4. Validaciones

**En el Schema:**
```yaml
nombre:
  type: string
  minLength: 3
  maxLength: 100

precio:
  type: number
  minimum: 0
  maximum: 999.99

telefono:
  type: string
  pattern: '^\d{2}-\d{3}-\d{4}$'
```

### 5. Documentación Completa

✅ Descripción clara de cada endpoint  
✅ Ejemplos de request y response  
✅ Códigos de error documentados  
✅ Schemas reutilizables  
✅ Tags para organización  

---

## 📚 Aprendizajes del Proyecto

### Técnicos:

1. **Diseño de APIs RESTful:**
   - Aprendí a diseñar endpoints siguiendo convenciones REST
   - Entendí la importancia de usar métodos HTTP correctamente
   - Comprendí cómo estructurar URLs jerárquicas

2. **Relaciones entre entidades:**
   - Implementé una relación 1:N usando claves foráneas
   - Diseñé endpoints que reflejan estas relaciones
   - Consideré el impacto de operaciones en cascada

3. **Documentación con OpenAPI:**
   - Dominio de la sintaxis YAML para OpenAPI 3.0
   - Creación de schemas reutilizables con `$ref`
   - Definición de validaciones y constraints
   - Uso de tags para organizar endpoints

4. **Testing con Bruno:**
   - Organización de peticiones en colecciones
   - Sintaxis del formato `.bru`
   - Versionamiento de peticiones en Git

### Conceptuales:

1. **Importancia de la documentación:**
   - Una API sin documentación es difícil de usar
   - Swagger UI facilita la exploración y prueba
   - La documentación debe mantenerse actualizada

2. **Diseño API-First:**
   - Documentar antes de implementar ayuda a diseñar mejor
   - Permite que frontend y backend trabajen en paralelo
   - Reduce errores de integración

3. **Estándares de la industria:**
   - OpenAPI es el estándar para documentar APIs REST
   - Seguir convenciones facilita la comprensión
   - Las herramientas se integran mejor con estándares

---

## 🔄 Posibles Extensiones

Este proyecto puede extenderse con:

### 1. Autenticación y Autorización
```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```

### 2. Paginación
```
GET /dishes?page=1&limit=10
```

### 3. Filtros y Ordenamiento
```
GET /dishes?categoria=Entrada&ordenarPor=precio&orden=asc
```

### 4. Búsqueda
```
GET /restaurants?buscar=marisco&ciudad=Quito
```

### 5. Nuevas Relaciones
- Restaurante → Horarios (1:N)
- Plato → Ingredientes (N:N)
- Restaurante → Reseñas (1:N)

---

## 🛠️ Tecnologías Usadas

- **OpenAPI 3.0.0** - Especificación de la API
- **Swagger Editor** - Validación y visualización
- **Bruno** - Cliente de API para testing
- **YAML** - Formato de documentación
- **Git** - Control de versiones

---

## 📖 Referencias

### Documentación oficial:
- [OpenAPI Specification 3.0](https://spec.openapis.org/oas/v3.0.0)
- [Swagger Documentation](https://swagger.io/docs/)
- [Bruno Documentation](https://docs.usebruno.com/)

### Guías de diseño:
- [REST API Design Best Practices](https://restfulapi.net/)
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)
- [Google API Design Guide](https://cloud.google.com/apis/design)

### Recursos de aprendizaje:
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de prueba
- [ReqRes](https://reqres.in/) - API de prueba alternativa
- [Public APIs](https://github.com/public-apis/public-apis) - Lista de APIs públicas

---

## ✅ Checklist de Entrega

- [x] Modelo de datos diseñado (Restaurantes y Platos)
- [x] Relación 1:N implementada correctamente
- [x] 11 endpoints documentados (5 + 6)
- [x] 11 archivos .bru creados en Bruno
- [x] Archivo swagger-api.yaml completo
- [x] Validación en Swagger Editor sin errores
- [x] README.md documentado
- [x] Ejemplos de request/response incluidos
- [x] Códigos HTTP apropiados documentados
- [x] Schemas con validaciones definidas
- [x] Tags para organización de endpoints
- [x] Endpoint de relación `/restaurants/{id}/dishes` funcional

---

## 👨‍💻 Autor

**Dilan Real**  
Estudiante de Ingeniería de Sistemas  
Escuela Politécnica Nacional  
📧 dilan.real@epn.edu.ec

---

## 📝 Notas Finales

Este proyecto fue desarrollado como parte del **Proyecto 01** del curso de Desarrollo Web. 

El objetivo principal fue aplicar los conocimientos adquiridos sobre:
- APIs RESTful
- Documentación con Swagger/OpenAPI
- Testing con Bruno
- Diseño de relaciones entre entidades
- Buenas prácticas en desarrollo web

El proyecto está listo para ser extendido con una implementación real usando frameworks como:
- **Backend:** Express.js, Flask, Django, Spring Boot, ASP.NET
- **Base de datos:** PostgreSQL, MySQL, MongoDB
- **Frontend:** React, Vue, Angular

---

**Repositorio:** [real-2025-b-dera-web-gr1](https://github.com/2025-b-sw-web-gr1/real-2025-b-dera-web-gr1)  
**Carpeta:** `Proyecto-01/`  
**Fecha de entrega:** 12 de diciembre de 2025
