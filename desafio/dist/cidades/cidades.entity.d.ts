import { Double } from 'typeorm';
import { Estado } from '../estados/estados.entity';
import { Cliente } from 'src/clientes/clientes.entity';
export declare class Cidade {
    id: number;
    nome: string;
    latitude: Double;
    longitude: Double;
    capital: boolean;
    estado: Estado;
    clientes: Cliente[];
}
