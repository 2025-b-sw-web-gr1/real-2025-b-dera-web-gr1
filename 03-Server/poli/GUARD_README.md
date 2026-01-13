# 🛡️ Guard de Autenticación - NestJS

## 📋 Descripción

Sistema de autorización implementado con **Guards de NestJS** que protege endpoints verificando que el usuario esté autenticado como **admin** antes de permitir el acceso.

## 🏗️ Arquitectura

### Componentes creados:

1. **AuthGuard** (`auth.guard.ts`) - Guard que implementa `CanActivate`
2. **User Decorator** (`user.decorator.ts`) - Decorador personalizado para obtener el usuario
3. **Actualización de controladores** - Recetas e Ingredientes protegidos

---

## 🔐 AuthGuard

### Ubicación
```
src/auth/auth.guard.ts
```

### Funcionalidad

El `AuthGuard` verifica:
1. ✅ Que exista una sesión activa
2. ✅ Que el usuario en sesión sea "admin"
3. ✅ Agrega el usuario al request para uso posterior

### Código

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const session = request.session;

    // Verificar sesión
    if (!session || !session.username) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'No estás autenticado. Por favor inicia sesión.',
        error: 'Unauthorized',
      });
    }

    // Verificar que sea admin
    if (session.username !== 'admin') {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'No tienes permisos de administrador.',
        error: 'Forbidden',
      });
    }

    // Agregar usuario al request
    request.user = { username: session.username };
    return true;
  }
}
```

---

## 🎯 User Decorator

### Ubicación
```
src/auth/user.decorator.ts
```

### Funcionalidad

Decorador personalizado que extrae el usuario del request automáticamente.

### Código

```typescript
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
```

### Uso

```typescript
@Post()
@UseGuards(AuthGuard)
async crear(@Body() data: any, @User() user: any) {
  console.log(user.username); // "admin"
  // ... lógica del endpoint
}
```

---

## 🛠️ Uso en Controladores

### Opción 1: Proteger endpoints individuales

```typescript
import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../auth/user.decorator';

@Controller('recetas')
export class RecetasController {
  
  // ✅ Endpoint protegido
  @Post()
  @UseGuards(AuthGuard)
  async crear(@Body() data: any, @User() user: any) {
    return {
      message: 'Receta creada',
      createdBy: user.username // "admin"
    };
  }

  // ❌ Endpoint público (sin guard)
  @Get()
  async obtenerTodas() {
    return { message: 'Lista de recetas' };
  }
}
```

### Opción 2: Proteger todo el controlador

```typescript
@Controller('recetas')
@UseGuards(AuthGuard) // ← Protege TODOS los endpoints
export class RecetasController {
  
  @Post()
  async crear(@Body() data: any, @User() user: any) {
    // Este endpoint requiere autenticación
  }

  @Get()
  async obtenerTodas(@User() user: any) {
    // Este TAMBIÉN requiere autenticación
  }
}
```

---

## 📡 Endpoints Protegidos

### Recetas

| Endpoint | Método | Protegido | Respuesta incluye |
|----------|--------|-----------|-------------------|
| `/recetas` | POST | ✅ | `createdBy: "admin"` |
| `/recetas/:id` | PATCH | ✅ | `updatedBy: "admin"` |
| `/recetas/:id` | DELETE | ✅ | `deletedBy: "admin"` |
| `/recetas` | GET | ❌ | - |
| `/recetas/:id` | GET | ❌ | - |

### Ingredientes

| Endpoint | Método | Protegido | Respuesta incluye |
|----------|--------|-----------|-------------------|
| `/ingredientes` | POST | ✅ | `createdBy: "admin"` |
| `/ingredientes/:id` | PATCH | ✅ | `updatedBy: "admin"` |
| `/ingredientes/:id` | DELETE | ✅ | `deletedBy: "admin"` |
| `/ingredientes` | GET | ❌ | - |
| `/ingredientes/:id` | GET | ❌ | - |

---

## 🧪 Pruebas

### 1. Intentar crear receta SIN autenticación

**Request:**
```bash
POST http://localhost:3000/recetas
Content-Type: application/json

{
  "nombre": "Pizza",
  "descripcion": "Deliciosa pizza"
}
```

**Response (401):**
```json
{
  "statusCode": 401,
  "message": "No estás autenticado. Por favor inicia sesión.",
  "error": "Unauthorized"
}
```

### 2. Login y luego crear receta

**Paso 1: Login**
```bash
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "12345678"
}
```

**Paso 2: Crear receta (con sesión)**
```bash
POST http://localhost:3000/recetas
Content-Type: application/json
Cookie: connect.sid=<session-cookie>

{
  "nombre": "Pizza Margherita",
  "descripcion": "Pizza italiana clásica"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "data": {
    "id": 1,
    "nombre": "Pizza Margherita",
    "descripcion": "Pizza italiana clásica"
  },
  "createdBy": "admin"
}
```

---

## 🔄 Flujo de Autenticación

```
┌─────────────┐
│   Cliente   │
└──────┬──────┘
       │
       │ 1. POST /auth/login
       │    {username, password}
       ▼
┌──────────────────┐
│  AuthController  │
│   (sin guard)    │
└────────┬─────────┘
         │
         │ 2. Valida credenciales
         │    Crea sesión
         │
         ▼
┌──────────────────┐
│  Session Store   │
│  (archivo .json) │
└────────┬─────────┘
         │
         │ 3. Retorna cookie
         │
         ▼
┌─────────────────────┐
│      Cliente        │
│ (guarda la cookie)  │
└──────┬──────────────┘
       │
       │ 4. POST /recetas
       │    Cookie: connect.sid=...
       ▼
┌──────────────────┐
│    AuthGuard     │
│  (intercepta)    │
└────────┬─────────┘
         │
         │ 5. Verifica sesión
         │    ✅ session.username === "admin"
         │
         ▼
┌──────────────────┐
│ RecetasController│
│  @UseGuards()    │
└────────┬─────────┘
         │
         │ 6. Ejecuta endpoint
         │
         ▼
┌─────────────┐
│  Response   │
│ + createdBy │
└─────────────┘
```

---

## 🎨 Respuestas Actualizadas

Todos los endpoints protegidos ahora incluyen información del usuario que realizó la acción:

### Crear Receta
```json
{
  "statusCode": 201,
  "data": { ... },
  "createdBy": "admin"
}
```

### Actualizar Receta
```json
{
  "statusCode": 200,
  "data": { ... },
  "updatedBy": "admin"
}
```

### Eliminar Receta
```json
{
  "statusCode": 200,
  "message": "Receta eliminada correctamente",
  "deletedBy": "admin"
}
```

---

## ⚠️ Errores Comunes

### Error 401 - Sin sesión
```json
{
  "statusCode": 401,
  "message": "No estás autenticado. Por favor inicia sesión.",
  "error": "Unauthorized"
}
```

**Solución:** Hacer login primero en `/auth/login`

### Error 401 - No es admin
```json
{
  "statusCode": 401,
  "message": "No tienes permisos de administrador.",
  "error": "Forbidden"
}
```

**Solución:** Solo el usuario "admin" puede acceder

### Cookie no se envía

**Problema:** Bruno/Postman no envía la cookie automáticamente

**Solución en Bruno:** Las cookies se manejan automáticamente por colección

**Solución en Postman:**
1. Ir a Settings → Cookies
2. Habilitar "Automatically follow redirects"
3. O copiar manualmente la cookie del login

---

## 🔧 Personalización

### Cambiar rol requerido

Para permitir otros roles además de admin:

```typescript
// auth.guard.ts
const allowedRoles = ['admin', 'editor', 'moderator'];

if (!allowedRoles.includes(session.username)) {
  throw new UnauthorizedException('Rol no autorizado');
}
```

### Guard basado en roles

```typescript
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.session.username;

    return requiredRoles.includes(user);
  }
}
```

---

## 📚 Documentación NestJS

- [Guards](https://docs.nestjs.com/guards)
- [Custom Decorators](https://docs.nestjs.com/custom-decorators)
- [Exception Filters](https://docs.nestjs.com/exception-filters)

---

## ✅ Checklist de Implementación

- ✅ AuthGuard creado e implementado
- ✅ User decorator personalizado
- ✅ AuthModule exporta el guard
- ✅ Endpoints POST, PATCH, DELETE protegidos
- ✅ Endpoints GET permanecen públicos
- ✅ Respuestas incluyen información del usuario
- ✅ Manejo de errores 401 Unauthorized
- ✅ Compilación sin errores
- ✅ Pruebas en Bruno preparadas

---

## 🎯 Próximos Pasos

1. **Roles dinámicos:** Implementar sistema de roles en base de datos
2. **JWT:** Agregar tokens JWT para APIs stateless
3. **Rate limiting:** Proteger contra ataques de fuerza bruta
4. **Logging:** Registrar todas las acciones de admin
5. **Auditoría:** Guardar historial de cambios con usuario
