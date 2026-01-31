import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playerRepository.find({ relations: ['team'] });
  }

  findOne(id: number): Promise<Player | null> {
    return this.playerRepository.findOne({
      where: { id },
      relations: ['team'],
    });
  }

  create(player: any): Promise<Player> {
    const newPlayer = this.playerRepository.create(player as any);
    return this.playerRepository.save(newPlayer) as any;
  }

  async update(id: number, player: any): Promise<Player | null> {
    await this.playerRepository.update(id, player);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
