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

  create(player: Partial<Player>): Promise<Player> {
    const newPlayer = this.playerRepository.create(player);
    return this.playerRepository.save(newPlayer);
  }

  async update(id: number, player: Partial<Player>): Promise<Player | null> {
    await this.playerRepository.update(id, player);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
