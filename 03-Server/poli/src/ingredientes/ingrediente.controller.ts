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
import { Ingrediente } from './ingrediente.entity';
import { IngredientesService } from './ingrediente.service';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  // Crear un ingrediente (requiere autenticación)
  @Post()
  @UseGuards(AuthGuard)
  async crear(@Body() data: Partial<Ingrediente>, @User() user: any) {
    try {
      const ingrediente = await this.ingredientesService.crear(data);
      return {
        statusCode: HttpStatus.CREATED,
        data: ingrediente,
        createdBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Error al crear ingrediente';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Actualizar un ingrediente (requiere autenticación)
  @Patch(':id')
  @UseGuards(AuthGuard)
  async actualizar(
    @Param('id') id: number,
    @Body() data: Partial<Ingrediente>,
    @User() user: any,
  ) {
    try {
      const ingrediente = await this.ingredientesService.actualizar(id, data);
      if (!ingrediente) {
        throw new HttpException(
          'Ingrediente no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        statusCode: HttpStatus.OK,
        data: ingrediente,
        updatedBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Error al actualizar ingrediente';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Eliminar un ingrediente (requiere autenticación)
  @Delete(':id')
  @UseGuards(AuthGuard)
  async eliminar(@Param('id') id: number, @User() user: any) {
    try {
      await this.ingredientesService.eliminar(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Ingrediente eliminado correctamente',
        deletedBy: user.username,
      };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Error al eliminar ingrediente';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Obtener un ingrediente por ID
  @Get(':id')
  async obtenerUno(@Param('id') id: number) {
    const ingrediente = await this.ingredientesService.obtenerUno(id);
    if (!ingrediente) {
      throw new HttpException(
        'Ingrediente no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return { statusCode: HttpStatus.OK, data: ingrediente };
  }

  // Obtener muchos ingredientes con filtros
  @Get()
  async obtenerMuchos(@Query() filtros: any) {
    const ingredientes = await this.ingredientesService.obtenerMuchos(filtros);
    return { statusCode: HttpStatus.OK, data: ingredientes };
  }
}
