import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session = require('express-session');
import FileStore = require('session-file-store');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar session-file-store
  const SessionFileStore = FileStore(session);

  app.use(
    session({
      store: new SessionFileStore({
        path: './sessions', // Carpeta donde se guardarán las sesiones
        ttl: 86400, // Tiempo de vida de la sesión en segundos (24 horas)
        retries: 0,
      }),
      secret: 'mi-secreto-super-seguro-2025', // Cambiar en producción
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 86400000, // 24 horas en milisegundos
        httpOnly: true,
        secure: false, // Cambiar a true en producción con HTTPS
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Aplicación corriendo en: http://localhost:3000`);
}
bootstrap();
