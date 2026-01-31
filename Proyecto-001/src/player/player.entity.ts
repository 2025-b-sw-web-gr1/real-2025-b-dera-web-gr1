import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Team } from '../team/team.entity';

@Entity()
export class Player {
  @ApiProperty({ example: 1, description: 'ID único del jugador' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del jugador' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Delantero', description: 'Posición del jugador en el campo' })
  @Column()
  position: string;

  @ApiProperty({ 
    type: () => Team,
    description: 'Equipo al que pertenece el jugador' 
  })
  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
