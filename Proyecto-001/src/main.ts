import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Equipos y Jugadores')
    .setDescription('Documentación de endpoints RESTful con relación 1:N entre Teams y Players')
    .setVersion('1.0')
    .addTag('teams', 'Operaciones relacionadas con equipos')
    .addTag('players', 'Operaciones relacionadas con jugadores')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Aplicación corriendo en: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`Documentación Swagger en: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
