import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { Cidade } from 'src/cidades/cidade.entity';

@Entity({name: "clientes"})
export class Cliente {
    @PrimaryGeneratedColumn({
        type: "integer"
    })
    id: number;

    @Column({
        type:"varchar",
        length: 60
    })
    nome: string;

    @Column({
        type:"varchar",
        length: 80
    })
    sobrenome: string;

    @Column({
        type:"varchar",
        length: 40
    })
    sexo: string;

    @Column({
        type:"date"
    })
    dataNascimento: Date;

    @Column({
        type:"integer"
    })
    idade: number;

    @ManyToOne(type => Cidade, cidade => cidade.clientes)
    cidade: Cidade;
}