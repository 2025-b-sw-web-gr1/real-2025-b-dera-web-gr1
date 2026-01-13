import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../auth/user.decorator';
import { Receta } from './receta.entity';
import { RecetasService } from './receta.service';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  // Crear una receta (requiere autenticación)
  @Post()
  @UseGuards(AuthGuard)
  async crear(@Body() data: Partial<Receta>, @User() user: any) {
    try {
      const receta = await this.recetasService.crear(data);
      return {
        statusCode: HttpStatus.CREATED,
        data: receta,
        createdBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Error al crear la receta';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Actualizar una receta (requiere autenticación)
  @Patch(':id')
  @UseGuards(AuthGuard)
  async actualizar(
    @Param('id') id: number,
    @Body() data: Partial<Receta>,
    @User() user: any,
  ) {
    try {
      const receta = await this.recetasService.actualizar(id, data);
      if (!receta) {
        throw new HttpException('Receta no encontrada', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        data: receta,
        updatedBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Error al actualizar la receta';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Eliminar una receta (requiere autenticación)
  @Delete(':id')
  @UseGuards(AuthGuard)
  async eliminar(@Param('id') id: number, @User() user: any) {
    try {
      await this.recetasService.eliminar(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Receta eliminada correctamente',
        deletedBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Error al eliminar la receta';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Obtener una receta por ID
  @Get(':id')
  async obtenerUno(@Param('id') id: number) {
    const receta = await this.recetasService.obtenerUno(id);
    if (!receta) {
      throw new HttpException('Receta no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: receta };
  }

  // Obtener muchas recetas con filtros
  @Get()
  async obtenerMuchos(@Query() filtros: any) {
    const recetas = await this.recetasService.obtenerMuchos(filtros);
    return { statusCode: HttpStatus.OK, data: recetas };
  }
}
