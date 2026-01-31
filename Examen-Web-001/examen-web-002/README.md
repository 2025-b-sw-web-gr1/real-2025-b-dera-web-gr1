# 🎯 Examen Web 002 - API RESTful con NestJS

API RESTful desarrollada con NestJS, TypeORM y SQLite que implementa un sistema de gestión de equipos y jugadores con relación 1 a muchos.

## 📋 Descripción

Esta aplicación implementa una API RESTful que permite gestionar:
- **Teams (Equipos)**: Información de equipos deportivos
- **Players (Jugadores)**: Información de jugadores asociados a equipos

Cada equipo puede tener múltiples jugadores (relación 1:N).

## 🚀 Instalación

### Prerequisitos
- Node.js (v18 o superior)
- npm (v9 o superior)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd Examen-Web-001/examen-web-002
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

### Modo producción
```bash
npm run build
npm run start:prod
```

## 📚 Endpoints de la API

### Teams (Equipos)

#### Obtener todos los equipos
```bash
# curl
curl http://localhost:3000/teams

# HTTPie
http GET localhost:3000/teams
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Barcelona FC",
    "country": "España",
    "players": [...]
  }
]
```

#### Obtener un equipo por ID
```bash
# curl
curl http://localhost:3000/teams/1

# HTTPie
http GET localhost:3000/teams/1
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Barcelona FC",
  "country": "España",
  "players": [...]
}
```

#### Crear un equipo
```bash
# curl
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid", "country": "España"}'

# HTTPie
http POST localhost:3000/teams name="Real Madrid" country="España"
```

**Body:**
```json
{
  "name": "Real Madrid",
  "country": "España"
}
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Real Madrid",
  "country": "España"
}
```

#### Actualizar un equipo
```bash
# curl
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid CF", "country": "España"}'

# HTTPie
http PUT localhost:3000/teams/1 name="Real Madrid CF" country="España"
```

**Body:**
```json
{
  "name": "Real Madrid CF",
  "country": "España"
}
```

#### Eliminar un equipo
```bash
# curl
curl -X DELETE http://localhost:3000/teams/1

# HTTPie
http DELETE localhost:3000/teams/1
```

#### Obtener jugadores de un equipo específico
```bash
# curl
curl http://localhost:3000/teams/1/players

# HTTPie
http GET localhost:3000/teams/1/players
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Delantero"
  }
]
```

### Players (Jugadores)

#### Obtener todos los jugadores
```bash
# curl
curl http://localhost:3000/players

# HTTPie
http GET localhost:3000/players
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Delantero",
    "team": {
      "id": 1,
      "name": "Barcelona FC",
      "country": "España"
    }
  }
]
```

#### Obtener un jugador por ID
```bash
# curl
curl http://localhost:3000/players/1

# HTTPie
http GET localhost:3000/players/1
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Delantero",
  "team": {
    "id": 1,
    "name": "Barcelona FC",
    "country": "España"
  }
}
```

#### Crear un jugador
```bash
# curl
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Cristiano Ronaldo", "position": "Delantero", "team": {"id": 1}}'

# HTTPie
http POST localhost:3000/players name="Cristiano Ronaldo" position="Delantero" team:='{"id": 1}'
```

**Body:**
```json
{
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "team": {
    "id": 1
  }
}
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "team": {
    "id": 1,
    "name": "Real Madrid",
    "country": "España"
  }
}
```

#### Actualizar un jugador
```bash
# curl
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "CR7", "position": "Extremo"}'

# HTTPie
http PUT localhost:3000/players/1 name="CR7" position="Extremo"
```

**Body:**
```json
{
  "name": "CR7",
  "position": "Extremo"
}
```

#### Eliminar un jugador
```bash
# curl
curl -X DELETE http://localhost:3000/players/1

# HTTPie
http DELETE localhost:3000/players/1
```

## 🗄️ Base de Datos

El proyecto utiliza SQLite como base de datos. El archivo `db.sqlite` se crea automáticamente al iniciar la aplicación.

### Estructura de las Entidades

#### Team (Equipo)
- `id`: number (PK, auto-incremental)
- `name`: string (nombre del equipo)
- `country`: string (país del equipo)
- `players`: Player[] (relación 1:N)

#### Player (Jugador)
- `id`: number (PK, auto-incremental)
- `name`: string (nombre del jugador)
- `position`: string (posición en el campo)
- `team`: Team (relación N:1)

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite3** - Base de datos relacional
- **TypeScript** - Lenguaje de programación

## 📁 Estructura del Proyecto

```
examen-web-002/
├── src/
│   ├── team/
│   │   ├── team.entity.ts       # Entidad Team
│   │   ├── team.service.ts      # Lógica de negocio
│   │   ├── team.controller.ts   # Endpoints REST
│   │   └── team.module.ts       # Módulo de Team
│   ├── player/
│   │   ├── player.entity.ts     # Entidad Player
│   │   ├── player.service.ts    # Lógica de negocio
│   │   ├── player.controller.ts # Endpoints REST
│   │   └── player.module.ts     # Módulo de Player
│   ├── app.module.ts            # Módulo principal
│   └── main.ts                  # Punto de entrada
├── db.sqlite                    # Base de datos SQLite
├── package.json
└── README.md
```

## 🧪 Ejemplos de Uso Completo

### Flujo de trabajo típico

1. **Crear un equipo**
```bash
http POST localhost:3000/teams name="FC Barcelona" country="España"
```

2. **Crear jugadores para ese equipo**
```bash
http POST localhost:3000/players name="Lionel Messi" position="Delantero" team:='{"id": 1}'
http POST localhost:3000/players name="Gerard Piqué" position="Defensa" team:='{"id": 1}'
```

3. **Consultar los jugadores del equipo**
```bash
http GET localhost:3000/teams/1/players
```

4. **Actualizar información de un jugador**
```bash
http PUT localhost:3000/players/1 position="Mediocampista ofensivo"
```

5. **Ver todos los equipos con sus jugadores**
```bash
http GET localhost:3000/teams
```

## 📝 Notas

- La base de datos se crea automáticamente con `synchronize: true` en TypeORM
- Las relaciones se cargan automáticamente usando `relations` en las consultas
- Los datos persisten en el archivo `db.sqlite`

## 👨‍💻 Autor

Dilan Real - Examen Web 002

## 📅 Fecha

Enero 2026
