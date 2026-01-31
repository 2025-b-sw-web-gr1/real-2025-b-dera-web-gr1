import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({
    example: 'Lionel Messi',
    description: 'Nombre del jugador',
  })
  name: string;

  @ApiProperty({
    example: 'Delantero',
    description: 'Posición del jugador en el campo',
  })
  position: string;

  @ApiProperty({
    example: { id: 1 },
    description: 'Equipo al que pertenece el jugador',
  })
  team: any;
}
