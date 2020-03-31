import { Entity, Column, PrimaryGeneratedColumn, Double, ManyToOne, OneToMany  } from 'typeorm';
import { Estado } from '../estados/estado.entity';
import { Cliente } from 'src/clientes/cliente.entity';

@Entity({name: "cidades"})
export class Cidade {
    @PrimaryGeneratedColumn({
        type: "integer"
    })
    id: number;

    @Column({
        type:"varchar",
        length: 100
    })
    nome: string;

    @Column({
        type: "real"
    })
    latitude: Double;

    @Column({
        type: "real"
    })
    longitude: Double;

    @Column({
        type: "boolean"
    })
    capital: boolean;

    @ManyToOne(type => Estado, estado => estado.id)
    estado: Estado;

    @OneToMany(type => Cliente, clientes => clientes.cidade)
    clientes: Cliente[];
}