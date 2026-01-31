import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Player } from '../player/player.entity';

@Entity()
export class Team {
  @ApiProperty({ example: 1, description: 'ID único del equipo' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'FC Barcelona', description: 'Nombre del equipo' })
  @Column()
  name: string;

  @ApiProperty({ example: 'España', description: 'País del equipo' })
  @Column()
  country: string;

  @ApiProperty({ 
    type: () => Player, 
    isArray: true,
    description: 'Lista de jugadores del equipo' 
  })
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
