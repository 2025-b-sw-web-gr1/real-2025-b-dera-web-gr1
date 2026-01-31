import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamRepository.find({ relations: ['players'] });
  }

  findOne(id: number): Promise<Team | null> {
    return this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
  }

  create(team: Partial<Team>): Promise<Team> {
    const newTeam = this.teamRepository.create(team);
    return this.teamRepository.save(newTeam);
  }

  async update(id: number, team: Partial<Team>): Promise<Team | null> {
    await this.teamRepository.update(id, team);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.teamRepository.delete(id);
  }

  async findPlayersFromTeam(id: number) {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
    return team ? team.players : [];
  }
}
