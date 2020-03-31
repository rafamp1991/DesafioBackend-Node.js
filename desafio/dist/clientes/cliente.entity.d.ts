import { Cidade } from 'src/cidades/cidade.entity';
export declare class Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    sexo: string;
    dataNascimento: Date;
    idade: number;
    cidade: Cidade;
}
