import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
