import { Double } from 'typeorm';
import { Estado } from '../estados/estado.entity';
import { Cliente } from 'src/clientes/cliente.entity';
export declare class Cidade {
    id: number;
    nome: string;
    latitude: Double;
    longitude: Double;
    capital: boolean;
    estado: Estado;
    clientes: Cliente[];
}
