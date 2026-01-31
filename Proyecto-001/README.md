# 📘 Proyecto 001 – Documentación de Endpoints con Swagger

API RESTful desarrollada con NestJS, TypeORM y SQLite, completamente documentada con Swagger (OpenAPI 3.0). Implementa un sistema de gestión de equipos y jugadores con relación 1:N.

## 🎯 Descripción

Este proyecto extiende la API RESTful del Examen Web 002 agregando documentación automática con Swagger. Todos los endpoints están completamente documentados con decoradores de `@nestjs/swagger`, incluyendo:

- Descripciones detalladas de operaciones
- Parámetros documentados
- Respuestas HTTP con códigos de estado
- Esquemas de datos (DTOs) documentados
- Ejemplos de uso

## 🚀 Instalación

### Prerequisitos
- Node.js (v18 o superior)
- npm (v9 o superior)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd Proyecto-001
```

2. **Instalar dependencias**
```bash
npm install
```

## ▶️ Ejecución

### Modo desarrollo
```bash
npm run start:dev
```

El servidor se iniciará en `http://localhost:3000`

**Documentación Swagger disponible en:** `http://localhost:3000/api`

### Modo producción
```bash
npm run build
npm run start:prod
```

## 📖 Acceso a Swagger

Una vez que el servidor esté corriendo, accede a la documentación interactiva:

### URL de Swagger UI
```
http://localhost:3000/api
```

### Características de Swagger UI

- **Interfaz interactiva**: Prueba todos los endpoints directamente desde el navegador
- **Documentación automática**: Esquemas generados automáticamente desde el código
- **Validación de datos**: Muestra ejemplos y validaciones para cada endpoint
- **Respuestas en tiempo real**: Ve las respuestas de la API en vivo

## 📚 Endpoints Documentados

### Teams (Equipos)

| Método | Endpoint | Descripción | Swagger Tag |
|--------|----------|-------------|-------------|
| GET | `/teams` | Obtener todos los equipos | teams |
| GET | `/teams/:id` | Obtener un equipo por ID | teams |
| POST | `/teams` | Crear un nuevo equipo | teams |
| PUT | `/teams/:id` | Actualizar un equipo | teams |
| DELETE | `/teams/:id` | Eliminar un equipo | teams |
| GET | `/teams/:id/players` | Obtener jugadores de un equipo | teams |

### Players (Jugadores)

| Método | Endpoint | Descripción | Swagger Tag |
|--------|----------|-------------|-------------|
| GET | `/players` | Obtener todos los jugadores | players |
| GET | `/players/:id` | Obtener un jugador por ID | players |
| POST | `/players` | Crear un nuevo jugador | players |
| PUT | `/players/:id` | Actualizar un jugador | players |
| DELETE | `/players/:id` | Eliminar un jugador | players |

## 📝 Ejemplos de Uso con Swagger

### 1. Abrir Swagger UI
Navega a `http://localhost:3000/api` en tu navegador

### 2. Crear un equipo
1. Busca la sección **teams**
2. Click en `POST /teams`
3. Click en "Try it out"
4. Usa el siguiente ejemplo:
```json
{
  "name": "FC Barcelona",
  "country": "España"
}
```
5. Click en "Execute"

### 3. Crear un jugador
1. Busca la sección **players**
2. Click en `POST /players`
3. Click en "Try it out"
4. Usa el siguiente ejemplo:
```json
{
  "name": "Lionel Messi",
  "position": "Delantero",
  "team": {
    "id": 1
  }
}
```
5. Click en "Execute"

### 4. Ver jugadores de un equipo
1. Click en `GET /teams/{id}/players`
2. Click en "Try it out"
3. Ingresa el ID del equipo (por ejemplo: 1)
4. Click en "Execute"

## 🔧 Configuración de Swagger

### Archivo: `src/main.ts`

```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('API de Equipos y Jugadores')
  .setDescription('Documentación de endpoints RESTful con relación 1:N')
  .setVersion('1.0')
  .addTag('teams', 'Operaciones relacionadas con equipos')
  .addTag('players', 'Operaciones relacionadas con jugadores')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

## 📦 DTOs Documentados

### CreateTeamDto
```typescript
{
  "name": "string",     // Nombre del equipo
  "country": "string"   // País del equipo
}
```

### UpdateTeamDto
```typescript
{
  "name": "string",     // Opcional
  "country": "string"   // Opcional
}
```

### CreatePlayerDto
```typescript
{
  "name": "string",       // Nombre del jugador
  "position": "string",   // Posición del jugador
  "team": {
    "id": number         // ID del equipo
  }
}
```

### UpdatePlayerDto
```typescript
{
  "name": "string",       // Opcional
  "position": "string",   // Opcional
  "team": {
    "id": number         // Opcional
  }
}
```

## 🗄️ Base de Datos

### SQLite
- **Archivo**: `db.sqlite` (se crea automáticamente)
- **Sincronización**: Automática en desarrollo

### Estructura de Entidades

#### Team (Equipo)
```typescript
{
  id: number,           // PK, auto-incremental
  name: string,         // Nombre del equipo
  country: string,      // País del equipo
  players: Player[]     // Relación 1:N con jugadores
}
```

#### Player (Jugador)
```typescript
{
  id: number,           // PK, auto-incremental
  name: string,         // Nombre del jugador
  position: string,     // Posición en el campo
  team: Team            // Relación N:1 con equipo
}
```

## 🛠️ Tecnologías Utilizadas

- **NestJS** ^11.0.0 - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite3** - Base de datos relacional
- **Swagger (OpenAPI)** - Documentación de API
- **@nestjs/swagger** - Integración de Swagger con NestJS
- **swagger-ui-express** - UI de Swagger

## 📁 Estructura del Proyecto

```
Proyecto-001/
├── src/
│   ├── team/
│   │   ├── dto/
│   │   │   ├── create-team.dto.ts     # DTO con @ApiProperty
│   │   │   └── update-team.dto.ts     # DTO con @ApiProperty
│   │   ├── team.entity.ts             # Entidad documentada
│   │   ├── team.service.ts            # Lógica de negocio
│   │   ├── team.controller.ts         # Controlador con decoradores Swagger
│   │   └── team.module.ts
│   ├── player/
│   │   ├── dto/
│   │   │   ├── create-player.dto.ts   # DTO con @ApiProperty
│   │   │   └── update-player.dto.ts   # DTO con @ApiProperty
│   │   ├── player.entity.ts           # Entidad documentada
│   │   ├── player.service.ts          # Lógica de negocio
│   │   ├── player.controller.ts       # Controlador con decoradores Swagger
│   │   └── player.module.ts
│   ├── app.module.ts                  # Módulo principal
│   └── main.ts                        # Configuración de Swagger
├── bruno-collection/                  # Colección de pruebas Bruno
├── README.md
└── package.json
```

## 🎨 Decoradores de Swagger Utilizados

### En Controladores
- `@ApiTags()` - Agrupa endpoints por categoría
- `@ApiOperation()` - Describe la operación del endpoint
- `@ApiResponse()` - Documenta respuestas HTTP
- `@ApiParam()` - Documenta parámetros de ruta

### En DTOs y Entidades
- `@ApiProperty()` - Documenta propiedades de clase
- `@ApiPropertyOptional()` - Documenta propiedades opcionales

### Ejemplo en Controlador
```typescript
@ApiTags('teams')
@Controller('teams')
export class TeamController {
  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamService.findAll();
  }
}
```

### Ejemplo en DTO
```typescript
export class CreateTeamDto {
  @ApiProperty({ 
    example: 'FC Barcelona',
    description: 'Nombre del equipo' 
  })
  name: string;
}
```

## ✅ Criterios de Evaluación Cumplidos

- ✅ Proyecto correctamente subido al repositorio del curso
- ✅ Swagger instalado y configurado en main.ts
- ✅ Endpoints documentados con decoradores (@ApiTags, @ApiOperation, @ApiResponse)
- ✅ DTOs documentados con @ApiProperty
- ✅ Documentación accesible en `/api`
- ✅ README claro y completo

## 🧪 Pruebas

### Opción 1: Usar Swagger UI (Recomendado)
1. Abre `http://localhost:3000/api`
2. Selecciona un endpoint
3. Click en "Try it out"
4. Ingresa los datos de ejemplo
5. Click en "Execute"

### Opción 2: Usar curl
```bash
# Crear un equipo
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid", "country": "España"}'

# Obtener todos los equipos
curl http://localhost:3000/teams
```

### Opción 3: Usar Bruno Collection
Abre la colección en `bruno-collection/` con Bruno

## 📝 Notas

- La documentación de Swagger se genera automáticamente del código
- Los esquemas se actualizan automáticamente al modificar DTOs
- Swagger UI permite probar todos los endpoints sin herramientas externas
- La base de datos SQLite se crea automáticamente al iniciar

## 👨‍💻 Autor

Dilan Real - Proyecto 001 - Documentación con Swagger

## 📅 Fecha

Enero 2026

---

**📌 Importante**: La documentación Swagger está disponible inmediatamente después de iniciar el servidor en `http://localhost:3000/api`
