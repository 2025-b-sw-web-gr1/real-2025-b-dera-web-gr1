# 📝 Examen 01 - Documentación de APIs con Swagger

**Estudiante:** Dilan Real  
**Fecha:** 11 de diciembre de 2025  
**Curso:** Desarrollo Web - 6to Semestre  
**Grupo:** 2025-B SW Web GR1

---

## 🎯 Objetivo del Examen

Documentar todos los endpoints de la API JSONPlaceholder utilizando Swagger/OpenAPI 3.0, basándose en el trabajo práctico realizado en las clases 008-009 con Bruno.

---

## 📚 ¿Qué es Swagger?

**Swagger** es un conjunto de herramientas de código abierto para diseñar, construir, documentar y consumir APIs REST. Utiliza la especificación **OpenAPI** (anteriormente conocida como Swagger Specification) para describir APIs de manera estándar.

### Ventajas de usar Swagger:

✅ **Documentación interactiva**: Permite probar los endpoints directamente desde el navegador  
✅ **Estandarización**: Usa un formato estándar reconocido mundialmente (OpenAPI)  
✅ **Validación**: Detecta errores en la definición de la API  
✅ **Generación de código**: Puede generar código cliente/servidor automáticamente  
✅ **Colaboración**: Facilita la comunicación entre equipos frontend y backend  

---

## 🛠️ Proceso de Desarrollo

### Paso 1: Análisis de la colección Bruno
Revisé los 19 archivos `.bru` creados en la clase 008-009, que incluyen:
- 6 endpoints de Posts
- 3 endpoints de Comments
- 3 endpoints de Albums
- 2 endpoints de Photos
- 3 endpoints de Todos
- 2 endpoints de Users

### Paso 2: Creación de la estructura OpenAPI
Utilicé **OpenAPI 3.0.0** como especificación base y estructuré el documento en:
- **Info**: Metadatos de la API
- **Servers**: URL del servidor JSONPlaceholder
- **Paths**: Definición de todos los endpoints
- **Components/Schemas**: Modelos de datos reutilizables

### Paso 3: Documentación de endpoints
Para cada endpoint documenté:
- Método HTTP (GET, POST, PUT, PATCH, DELETE)
- Ruta del endpoint
- Parámetros (path, query, body)
- Respuestas esperadas (200, 201, 404)
- Descripciones claras y ejemplos

### Paso 4: Definición de schemas
Creé esquemas detallados para cada entidad:
- **Post**: userId, id, title, body
- **Comment**: postId, id, name, email, body
- **Album**: userId, id, title
- **Photo**: albumId, id, title, url, thumbnailUrl
- **Todo**: userId, id, title, completed
- **User**: id, name, username, email, address, phone, website, company

### Paso 5: Validación y pruebas
Utilicé Swagger Editor (https://editor.swagger.io/) para:
- Validar la sintaxis YAML
- Visualizar la documentación generada
- Probar los endpoints contra JSONPlaceholder
- Verificar que las respuestas coincidan con los schemas

---

## 📋 Endpoints Documentados

### Posts (6 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/posts` | Obtener todos los posts |
| GET | `/posts/{id}` | Obtener post por ID |
| POST | `/posts` | Crear nuevo post |
| PUT | `/posts/{id}` | Actualizar post completo |
| PATCH | `/posts/{id}` | Actualizar título de post |
| DELETE | `/posts/{id}` | Eliminar post |

### Comments (3 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/comments` | Obtener todos los comentarios |
| GET | `/comments?postId=1` | Obtener comentarios por post |
| POST | `/comments` | Crear nuevo comentario |

### Albums (3 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/albums` | Obtener todos los álbumes |
| GET | `/albums/{id}` | Obtener álbum por ID |
| POST | `/albums` | Crear nuevo álbum |

### Photos (2 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/photos` | Obtener todas las fotos |
| GET | `/photos?albumId=1` | Obtener fotos por álbum |

### Todos (3 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/todos` | Obtener todas las tareas |
| GET | `/todos/{id}` | Obtener tarea por ID |
| POST | `/todos` | Crear nueva tarea |

### Users (2 endpoints)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Obtener todos los usuarios |
| GET | `/users/{id}` | Obtener usuario por ID |

**Total: 19 endpoints documentados** ✅

---

## 🚀 Cómo usar esta documentación

### Opción 1: Swagger Editor Online
1. Ir a https://editor.swagger.io/
2. Copiar el contenido del archivo `swagger-api-documentation.yaml`
3. Pegarlo en el editor (lado izquierdo)
4. Ver la documentación interactiva (lado derecho)
5. Hacer clic en "Try it out" para probar los endpoints

### Opción 2: Swagger UI Local
```bash
# Instalar Swagger UI
npm install -g swagger-ui

# Servir la documentación
swagger-ui swagger-api-documentation.yaml
```

### Opción 3: VS Code
1. Instalar la extensión "Swagger Viewer"
2. Abrir el archivo `swagger-api-documentation.yaml`
3. Presionar `Shift + Alt + P` para preview

---

## 🔍 Conceptos HTTP Aplicados

### Métodos HTTP
- **GET**: Obtener recursos (lectura)
- **POST**: Crear nuevos recursos
- **PUT**: Actualizar recursos completos
- **PATCH**: Actualizar recursos parcialmente
- **DELETE**: Eliminar recursos

### Códigos de Respuesta HTTP
- **200 OK**: Solicitud exitosa
- **201 Created**: Recurso creado exitosamente
- **404 Not Found**: Recurso no encontrado

### Tipos de Parámetros
- **Path parameters**: En la URL (`/posts/{id}`)
- **Query parameters**: Después de `?` (`?postId=1`)
- **Body parameters**: En el cuerpo de la petición (JSON)

---

## 📦 Estructura de Archivos

```
Examen-01/
├── swagger-api-documentation.yaml    # Documentación completa OpenAPI 3.0
└── README.md                          # Este archivo
```

---

## 🎓 Aprendizajes Clave

1. **Importancia de la documentación**: Una API sin documentación es difícil de usar y mantener
2. **Estandarización**: OpenAPI/Swagger es un estándar reconocido mundialmente
3. **Diseño API-First**: Documentar antes de implementar ayuda a diseñar mejores APIs
4. **Validación automática**: Swagger valida que la documentación sea correcta
5. **Testing integrado**: Poder probar desde la misma documentación ahorra tiempo

---

## 🔗 Referencias

- [OpenAPI Specification](https://spec.openapis.org/oas/v3.0.0)
- [Swagger Editor](https://editor.swagger.io/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Swagger Documentation](https://swagger.io/docs/)

---

## 📌 Notas Adicionales

- Este examen se basó en el trabajo práctico de las clases 008-009 donde se utilizó Bruno para probar los mismos endpoints
- La documentación incluye ejemplos reales tomados de las respuestas de JSONPlaceholder
- Se utilizó la versión 3.0.0 de OpenAPI por ser la más reciente y recomendada
- Se organizaron los endpoints por tags para una mejor navegación

---

**Repositorio:** [real-2025-b-dera-web-gr1](https://github.com/2025-b-sw-web-gr1/real-2025-b-dera-web-gr1)  
**Branch:** main
