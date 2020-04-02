import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { Cidade } from '../cidades/cidade.entity';

@Entity({name: "estados"})
export class Estado {
    @PrimaryGeneratedColumn({
        type: "integer"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 2
    })
    uf: string;

    @Column({
        type:"varchar",
        length: 60
    })
    nome: string;

    @OneToMany(type => Cidade, cidades => cidades.estado)
    cidades: Cidade[];
}