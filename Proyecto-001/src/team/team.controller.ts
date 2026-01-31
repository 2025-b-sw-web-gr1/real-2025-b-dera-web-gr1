import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Team } from './team.entity';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todos los equipos con sus jugadores',
    type: [Team] 
  })
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Equipo encontrado',
    type: Team 
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ 
    status: 201, 
    description: 'Equipo creado exitosamente',
    type: Team 
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() team: CreateTeamDto) {
    return this.teamService.create(team);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo existente' })
  @ApiParam({ name: 'id', description: 'ID del equipo a actualizar', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Equipo actualizado exitosamente',
    type: Team 
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  update(@Param('id') id: string, @Body() team: UpdateTeamDto) {
    return this.teamService.update(+id, team);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo a eliminar', type: Number })
  @ApiResponse({ status: 200, description: 'Equipo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener todos los jugadores de un equipo específico' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de jugadores del equipo' 
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findPlayersFromTeam(@Param('id') id: string) {
    return this.teamService.findPlayersFromTeam(+id);
  }
}
