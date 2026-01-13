# 🔐 Sistema de Autenticación con Sesiones

## Descripción

Sistema de autenticación básico implementado con NestJS, usando `express-session` y `session-file-store` para el manejo de sesiones persistentes.

## 📦 Dependencias Instaladas

- `express-session` - Middleware para manejo de sesiones en Express
- `session-file-store` - Store para persistir sesiones en archivos
- `@types/express-session` - Tipos de TypeScript para express-session

## 🔑 Credenciales Hardcodeadas

```
Usuario: admin
Contraseña: 12345678
```

## 🌐 Endpoints de Autenticación

### 1. Login - `POST /auth/login`

Inicia sesión con credenciales hardcodeadas.

**Request Body:**
```json
{
  "username": "admin",
  "password": "12345678"
}
```

**Respuesta Exitosa (200):**
```json
{
  "statusCode": 200,
  "message": "Login exitoso",
  "data": {
    "username": "admin"
  }
}
```

**Error - Sesión ya activa (400):**
```json
{
  "statusCode": 400,
  "message": "Ya existe una sesión activa. Por favor, cierra sesión primero.",
  "error": "Session Already Active"
}
```

**Error - Credenciales incorrectas (401):**
```json
{
  "statusCode": 401,
  "message": "Usuario o contraseña incorrectos",
  "error": "Unauthorized"
}
```

### 2. Logout - `POST /auth/logout`

Cierra la sesión actual.

**Respuesta Exitosa (200):**
```json
{
  "statusCode": 200,
  "message": "Logout exitoso",
  "data": {
    "username": "admin"
  }
}
```

**Error - No hay sesión activa (400):**
```json
{
  "statusCode": 400,
  "message": "No hay sesión activa",
  "error": "No Active Session"
}
```

### 3. Estado de Sesión - `GET /auth/status`

Verifica si hay una sesión activa.

**Respuesta - Sesión activa (200):**
```json
{
  "statusCode": 200,
  "message": "Sesión activa",
  "data": {
    "authenticated": true,
    "username": "admin"
  }
}
```

**Respuesta - Sin sesión (200):**
```json
{
  "statusCode": 200,
  "message": "No hay sesión activa",
  "data": {
    "authenticated": false
  }
}
```

## 🧪 Pruebas con cURL

### Login
```bash
curl -X POST http://localhost:3000/auth/login ^
  -H "Content-Type: application/json" ^
  -c cookies.txt ^
  -d "{\"username\":\"admin\",\"password\":\"12345678\"}"
```

### Verificar estado (requiere cookie de sesión)
```bash
curl -X GET http://localhost:3000/auth/status ^
  -b cookies.txt
```

### Logout
```bash
curl -X POST http://localhost:3000/auth/logout ^
  -b cookies.txt
```

## 🧪 Pruebas con Bruno

### 1. Login
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "12345678"
}
```

### 2. Verificar Estado
```
GET http://localhost:3000/auth/status
```

### 3. Logout
```
POST http://localhost:3000/auth/logout
```

**Nota:** Bruno automáticamente maneja las cookies de sesión entre requests.

## ⚙️ Configuración de Sesiones

Las sesiones están configuradas en `src/main.ts` con las siguientes características:

- **Store:** Archivos locales en carpeta `./sessions`
- **TTL:** 24 horas (86400 segundos)
- **Cookie MaxAge:** 24 horas
- **Cookie HttpOnly:** `true` (protección contra XSS)
- **Cookie Secure:** `false` (cambiar a `true` en producción con HTTPS)

## 📁 Estructura de Archivos

```
src/
├── auth/
│   ├── auth.controller.ts    # Controlador de autenticación
│   └── auth.module.ts         # Módulo de autenticación
├── types/
│   └── session.d.ts           # Tipos TypeScript para sesiones
└── main.ts                    # Configuración de express-session
```

## 🔒 Validaciones Implementadas

1. **Login:**
   - ✅ Verifica que no exista sesión activa
   - ✅ Valida usuario y contraseña
   - ✅ Guarda solo el username en la sesión

2. **Logout:**
   - ✅ Verifica que exista sesión activa
   - ✅ Destruye la sesión correctamente

3. **Status:**
   - ✅ Retorna información de la sesión actual

## 🗂️ Persistencia de Sesiones

Las sesiones se guardan como archivos JSON en la carpeta `./sessions/` con el formato:

```
sessions/
└── <session-id>.json
```

Cada archivo contiene la información de la sesión incluyendo el username.

## 🚀 Características

- ✅ Credenciales hardcodeadas (admin/12345678)
- ✅ Validación de sesión activa antes de login
- ✅ Guardado solo del username en sesión
- ✅ Persistencia en archivos (session-file-store)
- ✅ TTL de 24 horas
- ✅ Manejo de errores robusto
- ✅ Endpoint de verificación de estado

## 🔐 Seguridad

**⚠️ Nota Importante:** Este es un sistema de autenticación básico para desarrollo/demo:

- Credenciales hardcodeadas (NO usar en producción)
- Sin hash de contraseñas
- Sin tokens JWT
- Sin rate limiting
- Sin protección CSRF

Para producción, considerar:
- Usar base de datos para usuarios
- Implementar bcrypt para hash de contraseñas
- Agregar JWT para APIs REST
- Implementar rate limiting
- Configurar CORS apropiadamente
- Usar HTTPS con cookies secure
