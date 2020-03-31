import { Cidade } from 'src/cidades/cidade.entity';
export declare class Estado {
    id: number;
    uf: string;
    nome: string;
    cidades: Cidade[];
}
