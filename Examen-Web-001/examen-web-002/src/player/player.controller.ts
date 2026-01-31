import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Post()
  create(@Body() player: Partial<Player>) {
    return this.playerService.create(player);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() player: Partial<Player>) {
    return this.playerService.update(+id, player);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
