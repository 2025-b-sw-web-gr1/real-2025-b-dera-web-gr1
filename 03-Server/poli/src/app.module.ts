import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nModule, AcceptLanguageResolver, HeaderResolver, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { IngredientesModule } from './ingredientes/ingrediente.module';
import { Receta } from './receta/receta.entity';
import { RecetasModule } from './receta/receta.module';

@Module({
  imports: [
    //dentro de los imports van los modulos que use nuestra aplicacion
    I18nModule.forRoot({
      fallbackLanguage: 'es',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, // ?lang=es o ?lang=en
        AcceptLanguageResolver, // Accept-Language header
        new HeaderResolver(['x-custom-lang']), // Custom header: x-custom-lang
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nombre del archivo de la base de datos
      entities: [Receta, Ingrediente],
      synchronize: true, // ¡CUIDADO! Solo para desarrollo. En producción usar migraciones
      logging: true, // Opcional: muestra las consultas SQL en consola
    }),
    RecetasModule,
    IngredientesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
