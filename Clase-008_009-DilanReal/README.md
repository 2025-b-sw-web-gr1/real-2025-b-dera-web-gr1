# 🚀 Clase 008-009: Parámetros y Métodos HTTP con Bruno

**Estudiante:** Dilan Real  
**Fecha:** Diciembre 2025  
**Curso:** Desarrollo Web - 6to Semestre  
**Grupo:** 2025-B SW Web GR1

---

## 📚 Objetivo de la Clase

Aprender y practicar los conceptos fundamentales de APIs REST, incluyendo:
- Métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- Parámetros de peticiones (Path, Query, Body)
- Códigos de respuesta HTTP
- Testing de APIs con Bruno

---

## 🛠️ Herramientas Utilizadas

### Bruno API Client
**Bruno** es un cliente de API de código abierto, rápido y amigable con Git, diseñado para probar y documentar APIs REST.

#### ¿Por qué Bruno?
✅ **Open Source**: Software libre y gratuito  
✅ **Git-friendly**: Los archivos `.bru` son texto plano, fáciles de versionar  
✅ **Offline-first**: No requiere conexión constante a internet  
✅ **Colecciones locales**: Todo se guarda en tu repositorio  
✅ **Sin cuenta requerida**: A diferencia de Postman  

#### Instalación
1. Visitar: https://www.usebruno.com/
2. Descargar la versión para Windows
3. Instalar siguiendo el asistente

---

## 🌐 API de Prueba: JSONPlaceholder

**JSONPlaceholder** es una API REST falsa y gratuita para testing y prototipado.

- **URL Base:** https://jsonplaceholder.typicode.com
- **Recursos disponibles:** posts, comments, albums, photos, todos, users
- **Métodos soportados:** GET, POST, PUT, PATCH, DELETE
- **Sin autenticación requerida**

---

## 📂 Estructura del Proyecto

```
Clase-008_009-DilanReal/
├── bruno-collection/
│   └── JSONPlaceholder API/
│       ├── bruno.json                    # Configuración de la colección
│       ├── posts/                        # 6 archivos
│       │   ├── get-all-posts.bru
│       │   ├── get-post-by-id.bru
│       │   ├── create-post.bru
│       │   ├── update-post-put.bru
│       │   ├── update-post-title.bru
│       │   └── delete-post.bru
│       ├── comments/                     # 3 archivos
│       │   ├── get-all-comments.bru
│       │   ├── get-comments-by-post.bru
│       │   └── create-comment.bru
│       ├── albums/                       # 3 archivos
│       │   ├── get-all-albums.bru
│       │   ├── get-album-by-id.bru
│       │   └── create-album.bru
│       ├── photos/                       # 2 archivos
│       │   ├── get-all-photos.bru
│       │   └── get-photos-by-album.bru
│       ├── todos/                        # 3 archivos
│       │   ├── get-all-todos.bru
│       │   ├── get-todo-by-id.bru
│       │   └── create-todo.bru
│       └── users/                        # 2 archivos
│           ├── get-all-users.bru
│           └── get-user-by-id.bru
└── README.md                             # Este archivo
```

**Total: 19 peticiones organizadas en 6 recursos** ✅

---

## 🔑 Conceptos HTTP Fundamentales

### 1. Métodos HTTP (Verbos)

#### GET - Obtener Recursos
- **Propósito:** Leer/consultar datos
- **Idempotente:** Sí (misma respuesta en múltiples llamadas)
- **Tiene body:** No
- **Ejemplo:** `GET /posts` → Obtiene todos los posts

#### POST - Crear Recursos
- **Propósito:** Crear nuevos recursos
- **Idempotente:** No (cada llamada crea un nuevo recurso)
- **Tiene body:** Sí (JSON con datos del nuevo recurso)
- **Ejemplo:** `POST /posts` → Crea un nuevo post

#### PUT - Actualizar Completo
- **Propósito:** Reemplazar un recurso completo
- **Idempotente:** Sí
- **Tiene body:** Sí (todos los campos del recurso)
- **Ejemplo:** `PUT /posts/1` → Reemplaza completamente el post #1

#### PATCH - Actualizar Parcial
- **Propósito:** Modificar parte de un recurso
- **Idempotente:** Sí
- **Tiene body:** Sí (solo los campos a actualizar)
- **Ejemplo:** `PATCH /posts/1` → Actualiza solo el título del post #1

#### DELETE - Eliminar Recursos
- **Propósito:** Eliminar un recurso
- **Idempotente:** Sí
- **Tiene body:** No
- **Ejemplo:** `DELETE /posts/1` → Elimina el post #1

### 2. Tipos de Parámetros

#### Path Parameters (Parámetros de Ruta)
Forman parte de la URL y son obligatorios.
```
GET /posts/1
         ↑
    Path parameter (id=1)
```

#### Query Parameters (Parámetros de Consulta)
Opcionales, van después del `?` en la URL.
```
GET /comments?postId=1
              ↑
        Query parameter
```

#### Body Parameters (Parámetros del Cuerpo)
Datos enviados en el cuerpo de la petición (JSON).
```json
POST /posts
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

### 3. Códigos de Respuesta HTTP

| Código | Significado | Cuándo se usa |
|--------|-------------|---------------|
| 200 OK | Éxito | GET, PUT, PATCH exitosos |
| 201 Created | Recurso creado | POST exitoso |
| 204 No Content | Sin contenido | DELETE exitoso |
| 400 Bad Request | Solicitud incorrecta | Datos inválidos |
| 404 Not Found | No encontrado | Recurso no existe |
| 500 Internal Server Error | Error del servidor | Error interno |

---

## 🧪 Ejercicios Realizados

### Grupo 1: Posts (6 peticiones)

#### 1. GET /posts - Obtener todos los posts
```
Método: GET
URL: https://jsonplaceholder.typicode.com/posts
Respuesta esperada: 200 OK
Retorna: Array de 100 posts
```

#### 2. GET /posts/{id} - Obtener post por ID
```
Método: GET
URL: https://jsonplaceholder.typicode.com/posts/1
Path param: id=1
Respuesta esperada: 200 OK
Retorna: Un objeto post
```

#### 3. POST /posts - Crear nuevo post
```
Método: POST
URL: https://jsonplaceholder.typicode.com/posts
Body: { "title": "foo", "body": "bar", "userId": 1 }
Respuesta esperada: 201 Created
Retorna: El post creado con un nuevo ID
```

#### 4. PUT /posts/{id} - Actualizar post completo
```
Método: PUT
URL: https://jsonplaceholder.typicode.com/posts/1
Body: { "id": 1, "title": "foo", "body": "bar", "userId": 1 }
Respuesta esperada: 200 OK
Retorna: El post actualizado completo
```

#### 5. PATCH /posts/{id} - Actualizar título
```
Método: PATCH
URL: https://jsonplaceholder.typicode.com/posts/1
Body: { "title": "updated title" }
Respuesta esperada: 200 OK
Retorna: El post con el campo title actualizado
```

#### 6. DELETE /posts/{id} - Eliminar post
```
Método: DELETE
URL: https://jsonplaceholder.typicode.com/posts/1
Respuesta esperada: 200 OK
Retorna: Objeto vacío {}
```

### Grupo 2: Comments (3 peticiones)

#### 7. GET /comments - Todos los comentarios
```
Respuesta esperada: 200 OK
Retorna: Array de 500 comentarios
```

#### 8. GET /comments?postId=1 - Comentarios filtrados
```
Query param: postId=1
Respuesta esperada: 200 OK
Retorna: Comentarios del post #1
```

#### 9. POST /comments - Crear comentario
```
Body: {
  "name": "test",
  "email": "test@example.com",
  "body": "Nice!",
  "postId": 1
}
Respuesta esperada: 201 Created
```

### Grupo 3: Albums (3 peticiones)

#### 10-12. Similar a Posts
- GET todos, GET por ID, POST nuevo álbum

### Grupo 4: Photos (2 peticiones)

#### 13-14. Similar a Comments
- GET todas, GET filtradas por albumId

### Grupo 5: Todos (3 peticiones)

#### 15-17. Similar a Posts
- GET todos, GET por ID, POST nueva tarea

### Grupo 6: Users (2 peticiones)

#### 18-19. Solo lectura
- GET todos, GET por ID

---

## 🎯 Aprendizajes Clave

### 1. Diferencia entre PUT y PATCH
- **PUT**: Reemplaza TODO el recurso → Envías todos los campos
- **PATCH**: Actualiza SOLO lo que envías → Envías campos específicos

### 2. Idempotencia
Una operación es idempotente si ejecutarla múltiples veces produce el mismo resultado:
- ✅ GET, PUT, PATCH, DELETE: Idempotentes
- ❌ POST: No idempotente (cada llamada crea un nuevo recurso)

### 3. RESTful Best Practices
- Usar sustantivos en plural: `/posts` no `/post`
- Usar métodos HTTP correctos para cada acción
- Retornar códigos de estado apropiados
- Estructurar URLs de forma jerárquica

### 4. Query Parameters vs Path Parameters
- **Path**: Para identificar UN recurso específico (`/posts/1`)
- **Query**: Para filtrar, ordenar o paginar (`/posts?userId=1&_limit=10`)

---

## 🔧 Cómo Usar Esta Colección

### Paso 1: Abrir Bruno
1. Abrir la aplicación Bruno
2. Click en "Open Collection"
3. Seleccionar la carpeta `bruno-collection`

### Paso 2: Explorar las Carpetas
Navegar por las carpetas organizadas por recurso:
- posts
- comments
- albums
- photos
- todos
- users

### Paso 3: Ejecutar Peticiones
1. Hacer clic en cualquier archivo `.bru`
2. Presionar el botón "Send" o usar `Ctrl+Enter`
3. Observar la respuesta en el panel inferior

### Paso 4: Modificar y Experimentar
- Cambiar los IDs en los path parameters
- Modificar los valores en los bodies
- Añadir query parameters adicionales
- Observar cómo cambian las respuestas

---

## 📊 Resumen de Endpoints Probados

| Recurso | GET All | GET by ID | GET Filtered | POST | PUT | PATCH | DELETE |
|---------|---------|-----------|--------------|------|-----|-------|--------|
| Posts | ✅ | ✅ | - | ✅ | ✅ | ✅ | ✅ |
| Comments | ✅ | - | ✅ | ✅ | - | - | - |
| Albums | ✅ | ✅ | - | ✅ | - | - | - |
| Photos | ✅ | - | ✅ | - | - | - | - |
| Todos | ✅ | ✅ | - | ✅ | - | - | - |
| Users | ✅ | ✅ | - | - | - | - | - |

**Total: 19 endpoints probados exitosamente** ✅

---

## 🎓 Recursos Adicionales

### Presentaciones de Clase
- [Presentación 1 - Parámetros HTTP](https://app.presentations.ai/view/Ak2Rzeuljc)
- [Presentación 2 - Métodos HTTP](https://app.presentations.ai/view/euqEgUmy1U)

### Documentación Oficial
- [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/)
- [Bruno Documentation](https://docs.usebruno.com/)
- [HTTP Methods - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [HTTP Status Codes - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

### Herramientas Relacionadas
- [Postman](https://www.postman.com/) - Alternativa popular
- [Insomnia](https://insomnia.rest/) - Otra alternativa
- [HTTPie](https://httpie.io/) - Cliente HTTP por línea de comandos

---

## 💡 Tips y Buenas Prácticas

1. **Organización**: Mantener las peticiones organizadas por recursos facilita el mantenimiento
2. **Nomenclatura**: Usar nombres descriptivos para los archivos (verbo-recurso-accion.bru)
3. **Versionamiento**: Los archivos `.bru` son texto plano, ideales para Git
4. **Testing**: Probar todos los casos de éxito y error
5. **Documentación**: Comentar peticiones complejas o casos especiales

---

## 🔗 Enlaces Importantes

- **API Base:** https://jsonplaceholder.typicode.com
- **Bruno Download:** https://www.usebruno.com/
- **Repositorio:** [real-2025-b-dera-web-gr1](https://github.com/2025-b-sw-web-gr1/real-2025-b-dera-web-gr1)

---

## ✅ Checklist de Aprendizaje

- [x] Instalar Bruno
- [x] Crear colección de peticiones
- [x] Entender métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- [x] Usar path parameters
- [x] Usar query parameters
- [x] Enviar body en formato JSON
- [x] Interpretar códigos de respuesta HTTP
- [x] Organizar peticiones por recursos
- [x] Probar todas las 19 peticiones
- [x] Documentar el proceso

---

**Próximo paso:** Documentar estos endpoints con Swagger en el Examen 01 📝
