import { Receta } from 'src/receta/receta.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cantidad: string;

  @ManyToOne(() => Receta, (receta) => receta.ingredientes)
  receta: Receta;
}
