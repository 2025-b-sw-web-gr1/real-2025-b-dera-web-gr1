import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Player } from './player.entity';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todos los jugadores con información de su equipo',
    type: [Player] 
  })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  @ApiParam({ name: 'id', description: 'ID del jugador', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugador encontrado',
    type: Player 
  })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @ApiResponse({ 
    status: 201, 
    description: 'Jugador creado exitosamente',
    type: Player 
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() player: CreatePlayerDto) {
    return this.playerService.create(player);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un jugador existente' })
  @ApiParam({ name: 'id', description: 'ID del jugador a actualizar', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugador actualizado exitosamente',
    type: Player 
  })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  update(@Param('id') id: string, @Body() player: UpdatePlayerDto) {
    return this.playerService.update(+id, player);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador a eliminar', type: Number })
  @ApiResponse({ status: 200, description: 'Jugador eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
