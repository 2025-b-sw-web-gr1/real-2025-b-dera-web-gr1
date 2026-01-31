# Ejemplo de Internacionalización (i18n) en NestJS

## ✅ Implementación completada

Se ha configurado **nestjs-i18n** en el proyecto con soporte para español e inglés.

## 📁 Estructura creada

```
src/
└── i18n/
    ├── es/
    │   └── app.json    (Traducciones en español)
    └── en/
        └── app.json    (Traducciones en inglés)
```

## 🔧 Opciones de i18n en NestJS

### 1. **nestjs-i18n** (Implementada ✓)
- **Ventajas**: Integración nativa, fácil configuración, múltiples resolvers
- **Uso**: Perfecto para APIs REST y GraphQL
- **Repositorio**: https://github.com/toonvanstrijp/nestjs-i18n

### 2. **i18next con nestjs-i18next**
- **Ventajas**: Muy potente, ecosistema grande, pluralización avanzada
- **Uso**: Proyectos complejos con múltiples formatos de traducción
- **Instalación**: `npm install nestjs-i18next i18next`

### 3. **Implementación manual**
- **Ventajas**: Control total, sin dependencias
- **Desventajas**: Más código que mantener

## 🚀 Cómo usar

### Formas de especificar el idioma:

#### 1. Query Parameter
```
GET http://localhost:3000?lang=es
GET http://localhost:3000?lang=en
GET http://localhost:3000/welcome?lang=es
```

#### 2. Header Accept-Language
```
GET http://localhost:3000
Accept-Language: es
```

#### 3. Custom Header
```
GET http://localhost:3000
x-custom-lang: en
```

### Ejemplos de respuestas:

**Español:**
- `GET /?lang=es` → "¡Hola Mundo!"
- `GET /welcome?lang=es` → "Bienvenido a nuestra aplicación"
- `GET /greeting?name=Juan&lang=es` → "Hola Juan, ¿cómo estás?"

**Inglés:**
- `GET /?lang=en` → "Hello World!"
- `GET /welcome?lang=en` → "Welcome to our application"
- `GET /greeting?name=John&lang=en` → "Hello John, how are you?"

## 📝 Configuración realizada

### app.module.ts
- Configurado `I18nModule` con 3 resolvers:
  - **QueryResolver**: Detecta `?lang=es` en la URL
  - **AcceptLanguageResolver**: Lee el header `Accept-Language`
  - **HeaderResolver**: Lee el header custom `x-custom-lang`
- Idioma por defecto: **español** (`fallbackLanguage: 'es'`)

### app.service.ts
- Inyectado `I18nService`
- Métodos que usan `i18n.translate()`
- Soporte para variables dinámicas (ej: `{name}`)

### app.controller.ts
- Decorador `@I18nLang()` para obtener idioma automático
- Query parameter `lang` como alternativa
- Múltiples endpoints de ejemplo

## 🌐 Añadir más idiomas

Para agregar francés:

1. Crear `src/i18n/fr/app.json`:
```json
{
  "HELLO": "Bonjour le monde!",
  "WELCOME": "Bienvenue dans notre application",
  "GOODBYE": "Au revoir!",
  "GREETING": "Bonjour {name}, comment allez-vous?"
}
```

2. Usar: `GET /?lang=fr`

## 🔥 Ventajas de nestjs-i18n

✅ Soporte para múltiples formatos (JSON, YAML)  
✅ Detección automática del idioma  
✅ Pluralización  
✅ Interpolación de variables  
✅ Fallback a idioma por defecto  
✅ Hot reload en desarrollo  
✅ TypeScript support

## 📚 Recursos adicionales

- Documentación: https://nestjs-i18n.com/
- Más resolvers: Cookie, Session, Custom
- Validación con i18n: `@IsNotEmpty({ message: i18nValidationMessage('validation.IS_NOT_EMPTY') })`
