import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({
    example: 'FC Barcelona',
    description: 'Nombre del equipo',
  })
  name: string;

  @ApiProperty({
    example: 'España',
    description: 'País del equipo',
  })
  country: string;
}
