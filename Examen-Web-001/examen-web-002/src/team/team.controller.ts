import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Team } from './team.entity';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Post()
  create(@Body() team: Partial<Team>) {
    return this.teamService.create(team);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() team: Partial<Team>) {
    return this.teamService.update(+id, team);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }

  @Get(':id/players')
  findPlayersFromTeam(@Param('id') id: string) {
    return this.teamService.findPlayersFromTeam(+id);
  }
}
