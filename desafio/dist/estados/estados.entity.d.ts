import { Cidade } from 'src/cidades/cidades.entity';
export declare class Estado {
    id: number;
    uf: string;
    nome: string;
    cidades: Cidade[];
}
